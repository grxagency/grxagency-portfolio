# 🚀 ALTERNATIVA: USAR NETLIFY FUNCTION + BREVO (Mais fácil!)

Se você quer que **tudo funcione já, já** sem mexer em template, use o **Brevo via Netlify Function**.

## VANTAGENS:
- ✅ Já vem com todos os campos certos
- ✅ Mais seguro (API fica no servidor, não no navegador)
- ✅ Fácil de configurar
- ✅ Grátis (até 300 emails/dia)

## PASSO A PASSO:

### PASSO 1: Crie conta Brevo (grátis)
1. Vá para https://www.brevo.com
2. Clique em **"Sign up"** (canto superior direito)
3. Use o email: `contato.grxagency@outlook.com`
4. Crie uma senha forte
5. Confirme o email

### PASSO 2: Gere a chave API
1. Faça login no Brevo: https://app.brevo.com
2. Vá em **"Settings"** (engrenagem, canto inferior esquerdo)
3. Clique em **"API & Webhooks"** → **"API Keys"**
4. Clique em **"Create a new API key"** (botão azul)
5. Escolha um nome: `GRX AGENCY`
6. **COPIE A CHAVE** que apareceu (começa com `xsmtpsib-...`)

### PASSO 3: Configure no Netlify
1. Acesse https://app.netlify.com
2. Clique no seu site: **"grxagencyy"**
3. Vá em **"Site settings"** (aba superior)
4. Clique em **"Build & deploy"** (menu esquerdo)
5. Clique em **"Environment"**
6. Clique em **"Edit variables"** (ou **"Add environment variable"**)
7. Adicione:
   - **Key:** `BREVO_API_KEY`
   - **Value:** Cole a chave que você copiou (xsmtpsib-...)
8. Clique em **"Save"**

### PASSO 4: Redeploye o site
1. De volta no Netlify, clique em **"Deploys"**
2. Procure o último deploy
3. Clique em **"Trigger deploy"** → **"Deploy site"** (botão azul)
4. Aguarde terminar (deve dizer ✓ Published)

### PASSO 5: Teste!
1. Abra o site: https://grxagencyy.netlify.app
2. Role até **#contact**
3. Preencha o formulário inteiro (nome, email, telefone, tipo de serviço, mensagem)
4. Clique em **"Enviar Mensagem"**
5. Verifique seu email: você receberá TUDO (nome, email, telefone, serviço, mensagem)

---

## ✅ Quando usar cada método:

| | EmailJS | Brevo + Netlify |
|---|---------|---|
| Facilidade | ⭐⭐ (precisa ajustar template) | ⭐⭐⭐⭐⭐ (só configurar) |
| Segurança | ⭐⭐ (chave no navegador) | ⭐⭐⭐⭐⭐ (no servidor) |
| Velocidade de setup | ⭐⭐⭐⭐ (5 min) | ⭐⭐⭐ (10 min) |
| Confiabilidade | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 💡 RECOMENDAÇÃO:
Use **Brevo + Netlify Function**. É mais fácil, mais seguro e já funciona certo!

---

## 🆘 PRECISA DE AJUDA?

Se não conseguir gerar a chave Brevo ou configurar no Netlify, me avisa!
