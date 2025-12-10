const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;  // ✅ Porta 3000 - ÚNICO servidor

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta raiz
app.use(express.static(path.join(__dirname)));

// ✅ ROTA EXPLÍCITA PARA PORTFOLIO (mais importante que static)
app.get('/data/projects.json', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'projects.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('❌ Erro ao ler projects.json:', err);
            return res.status(500).json({ error: 'Erro ao carregar projetos' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// Diretório para salvar mensagens
const messagesDir = path.join(__dirname, 'messages');
if (!fs.existsSync(messagesDir)) {
    fs.mkdirSync(messagesDir, { recursive: true });
}

// Função para enviar email via Brevo API
function sendViaBrevo(name, email, phone, subject, message) {
    return new Promise((resolve, reject) => {
        // Você deve criar uma conta grátis em https://www.brevo.com e copiar a API key
        // Para teste rápido, estamos usando a API key como exemplo
        // IMPORTANTE: Gere sua própria API key em brevo.com
        const apiKey = process.env.BREVO_API_KEY || 'seu_brevo_api_key_aqui';
        
        if (apiKey === 'seu_brevo_api_key_aqui') {
            // Se não há API key, apenas log e fallback
            console.warn('⚠️ Brevo API key não configurada. Usando fallback local.');
            resolve({ success: true, method: 'local_only' });
            return;
        }

        const payload = JSON.stringify({
            sender: {
                name: "GRX AGENCY",
                email: "contato@grxagency.com"
            },
            to: [
                {
                    email: "contato.grxagency@outlook.com",
                    name: "GRX AGENCY"
                }
            ],
            replyTo: {
                email: email,
                name: name
            },
            subject: `[Contato] ${subject || 'Novo contato via site'}`,
            htmlContent: `
                <h2>Nova Mensagem Recebida</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
                <p><strong>Assunto:</strong> ${subject || 'Sem assunto'}</p>
                <hr />
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr />
                <p style="color: #999; font-size: 12px;">Este e-mail foi enviado via GRX AGENCY Contact Form</p>
            `
        });

        const options = {
            hostname: 'api.brevo.com',
            port: 443,
            path: '/v3/smtp/email',
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json',
                'content-length': Buffer.byteLength(payload)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log(`✓ Email enviado via Brevo: ${res.statusCode}`);
                    resolve({ success: true, method: 'brevo', status: res.statusCode });
                } else {
                    console.error(`❌ Brevo error: ${res.statusCode} - ${data}`);
                    reject(new Error(`Brevo error: ${res.statusCode}`));
                }
            });
        });

        req.on('error', (e) => {
            console.error('❌ Erro ao chamar Brevo API:', e.message);
            reject(e);
        });

        req.write(payload);
        req.end();
    });
}

// Rota para receber mensagens
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message, phone } = req.body;

        // Validações básicas
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Nome, email e mensagem são obrigatórios' 
            });
        }

        // Preparar conteúdo da mensagem para arquivo
        const messageContent = `
================================================================================
NOVA MENSAGEM RECEBIDA - GRX AGENCY
================================================================================
Data: ${new Date().toLocaleString('pt-BR')}

INFORMAÇÕES DO CLIENTE:
- Nome: ${name}
- Email: ${email}
- Telefone: ${phone || 'Não informado'}
- Assunto: ${subject || 'Sem assunto'}

MENSAGEM:
${message}

================================================================================
`;

        // Salvar backup em arquivo local
        const timestamp = new Date().getTime();
        const safeFileName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const fileName = `${timestamp}_${safeFileName}.txt`;
        const filePath = path.join(messagesDir, fileName);
        
        fs.writeFileSync(filePath, messageContent, 'utf8');
        console.log(`✓ Backup local salvo: ${fileName}`);

        // Tentar enviar via Brevo
        try {
            await sendViaBrevo(name, email, phone, subject, message);
            return res.json({ 
                success: true, 
                message: '✓ Mensagem recebida com sucesso! Você receberá uma confirmação por e-mail em breve.'
            });
        } catch (emailError) {
            console.error('⚠️ Erro ao enviar email:', emailError.message);
            // Mesmo com erro de email, a mensagem foi salva localmente
            return res.json({ 
                success: true, 
                message: '✓ Mensagem recebida! Você receberá uma resposta em breve.'
            });
        }

    } catch (error) {
        console.error('Erro ao processar mensagem:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao processar mensagem. Tente novamente mais tarde.' 
        });
    }
});

// Rota para testar se o servidor está funcionando
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor de contato funcionando' });
});

app.listen(PORT, () => {
    console.log(`\n✓ Servidor de mensagens rodando em http://localhost:${PORT}`);
    console.log(`✓ Endpoint: POST /api/contact`);
    console.log(`✓ Metodo de envio: Brevo API`);
    console.log(`✓ Backup de mensagens em: ${messagesDir}\n`);
});
