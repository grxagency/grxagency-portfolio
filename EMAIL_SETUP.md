# Configuração de Senha para Email Outlook

## IMPORTANTE: Como configurar a senha de email

O sistema de contato usa Nodemailer para enviar emails via Outlook (contato.grxagency@outlook.com).

### Passos para gerar a Senha de App do Outlook:

1. Acesse sua conta Outlook em: https://outlook.live.com
2. Vá em "Configurações" > "Segurança" > "Segurança avançada"
3. Ative a "Verificação em duas etapas" (se ainda não estiver)
4. Acesse "Segurança da conta" e procure por "Senhas de app"
5. Gere uma nova "Senha de app" para "Outro (Windows, Mac, Linux)"
6. Copie a senha gerada (será algo como: "abcd efgh ijkl mnop")
7. Cole a senha no arquivo `.env` abaixo

### Como usar:

1. Crie um arquivo chamado `.env` na raiz do projeto:
   ```
   EMAIL_PASSWORD=sua_senha_de_app_aqui
   ```

2. Substitua `sua_senha_de_app_aqui` pela senha gerada no passo 6 acima

3. Para rodar o servidor de contato:
   ```
   npm run contact-server
   ```

4. O servidor rodará em http://localhost:3001

### Alternativa: Se preferir usar Gmail

Se quiser usar Gmail ao invés de Outlook:

1. Ative "Senhas de app" em sua conta Google: https://myaccount.google.com/apppasswords
2. Gere uma senha para "Mail" e "Windows Computer"
3. No arquivo `server.js`, mude:
   ```javascript
   service: 'gmail',
   auth: {
       user: 'seu-email@gmail.com',
       pass: process.env.EMAIL_PASSWORD
   }
   ```

### Testando o servidor:

- Após rodar `npm run contact-server`, acesse http://localhost:3001/api/status
- Se retornar `{"status":"ok"}`, o servidor está funcionando
- Agora o formulário de contato enviará emails automaticamente

### Localização das mensagens salvas:

Todas as mensagens também são salvas em: `./messages/`

## ⚠️ SEGURANÇA

**NUNCA** coloque a senha diretamente no código ou no GitHub!
Use sempre variáveis de ambiente (arquivo `.env`).

Se usar `.env`, adicione na raiz do projeto e **NÃO** faça commit para o Git.

