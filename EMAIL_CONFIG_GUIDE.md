# Configuração de Email com EmailJS

## Setup Rápido (5 minutos)

### Passo 1: Registrar no EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" (Free tier é suficiente)
3. Complete o registro

### Passo 2: Adicionar seu Email
1. Vá para "Email Services" no painel
2. Clique "Add Service" 
3. Escolha "Outlook" ou "Gmail"
4. Conecte sua conta (contato.grxagency@outlook.com)
5. Verifique o email que EmailJS enviar

### Passo 3: Criar um Template
1. Vá para "Email Templates"
2. Clique "Create New Template"
3. Cole este template:

```
Template Name: contact_form
Subject: Nova Mensagem - GRX AGENCY

Body:
Nome: {{name}}
Email: {{email}}
Telefone: {{phone}}
Assunto: {{subject}}

Mensagem:
{{message}}
```

4. Clique "Save"
5. Copie o **Template ID** (aparece no canto superior)

### Passo 4: Pegar suas Credenciais
1. Vá para "Account" > "API"
2. Copie o **User ID** (Public Key)

### Passo 5: Enviar para o Desenvolvedor
Envie as 3 informações:
- **Service ID**: (de Email Services)
- **Template ID**: (do template criado)
- **User ID** (Public Key): (de Account > API)

Depois é só integrar no código!

## Alternativa: Formspree (Ainda Mais Simples)

Se preferir algo mais simples ainda:

1. Acesse: https://formspree.io/
2. Sign up (grátis)
3. Crie um novo formulário
4. Copie o **Form ID**
5. Só isso!

Qual você prefere? **EmailJS** ou **Formspree**?
