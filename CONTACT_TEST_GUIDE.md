# ✅ GUIA DE TESTES - FORMULÁRIO DE CONTATO

## 📋 O que foi feito

O formulário agora tenta enviar por esta ordem:
1. **EmailJS** (SDK ou REST API) - seu serviço de email
2. **Netlify Function** - servidor serverless
3. **/api/contact** - fallback local (para dev)

## 🧪 OPÇÃO A: Testar Localmente (Agora mesmo!)

### Passo 1: Inicie o servidor Python
```powershell
cd "C:\Users\guira\Desktop\Portfolio Guilherme"
python server_test.py
```

Você verá algo como:
```
🚀 Servidor rodando em: http://localhost:8000
📂 Servindo arquivos de: C:\Users\guira\Desktop\Portfolio Guilherme

Abra seu navegador em: http://localhost:8000
```

### Passo 2: Abra o navegador
- Acesse: **http://localhost:8000**
- Role até a seção **#contact**
- Preencha o formulário e clique em **"Enviar Mensagem"**

### Passo 3: Verifique o resultado
- **No console do navegador** (F12 → Console):
  - Você verá: `✓ /api/contact enviou com sucesso` (ou EmailJS se estiver funcionando)
- **No terminal** onde o servidor está rodando:
  - Você verá os dados da mensagem: Nome, Email, Telefone, Assunto, Mensagem

### Passo 4: Parar o servidor
- Aperte **Ctrl+C** no terminal

---

## 🚀 OPÇÃO B: Testar no Site Publicado (Depois)

### Para usar EmailJS (recomendado):
1. Verifique se os IDs estão corretos no `script.js`:
   - `EMAILJS_SERVICE_ID = 'service_4dnn4mn'`
   - `EMAILJS_TEMPLATE_ID = 'template_ia723n8'`
   - `EMAILJS_USER_ID = 'qSqDsW_1Hf7jx1YDl'`

2. No painel do EmailJS (https://dashboard.emailjs.com):
   - Verifique se o template usa as variáveis: `{{name}}`, `{{email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
   - Verifique se o serviço está conectado ao seu email

### Para usar Netlify Function (mais seguro):
1. Acesse o painel da Netlify: https://app.netlify.com
2. Vá para: **Site settings → Build & deploy → Environment**
3. Clique em **Add environment variable**
   - **Key:** `BREVO_API_KEY`
   - **Value:** `[sua chave Brevo aqui]`
4. Clique em **Deploy site** para redeployar

---

## 🔍 Checklist de Funcionamento

- [ ] Local (http://localhost:8000): Formulário envia e console mostra `✓ /api/contact enviou com sucesso`
- [ ] Console do navegador não mostra erros vermelhos
- [ ] Mensagem de sucesso aparece no site ("✓ Mensagem recebida...")
- [ ] Site publicado: Abra o DevTools (F12) → Console
- [ ] Envie um teste no site publicado
- [ ] Console mostra `✓ EmailJS` ou `✓ Netlify Function` (não localhost!)

---

## 📞 Se algo não funcionar:

1. **Abre o DevTools (F12)**
2. **Vai em Console**
3. **Tenta enviar o formulário**
4. **Copia a mensagem de erro** (vermelha)
5. **Me mostra** para eu corrigir

---

## 🎯 Resumo das URLs:

- **Site local:** http://localhost:8000
- **Site publicado Surge:** https://grxagency.surge.sh
- **Site publicado Netlify:** https://grxagencyy.netlify.app
- **GitHub (código):** https://github.com/grxagency/grxagency-portfolio
