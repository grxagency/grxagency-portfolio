# 🔧 COMO CORRIGIR O TEMPLATE DO EMAILJS

## O PROBLEMA:
- Você está recebendo SÓ a mensagem
- Não vem: email, telefone, tipo de serviço

## A RAZÃO:
O template do EmailJS não está usando as variáveis dos campos


## SOLUÇÃO - 3 PASSOS SIMPLES:

### PASSO 1: Acesse o EmailJS
1. Vá para https://dashboard.emailjs.com
2. Faça login
3. Clique em **"Email Templates"** (menu esquerdo)
4. Procure por **"template_ia723n8"** e clique nele

### PASSO 2: Edite o Template
Dentro do template, você verá algo como:

```
Olá,

Você recebeu uma nova mensagem:

{{message}}

Obrigado
```

**APAGUE TUDO** (ou quase) e **COPIE E COLE ISSO:**

```
<h2>📧 Nova Mensagem do Site</h2>

<hr />

<p><strong>Nome:</strong> {{name}}</p>

<p><strong>Email:</strong> {{email}}</p>

<p><strong>Telefone:</strong> {{phone}}</p>

<p><strong>Tipo de Serviço:</strong> {{subject}}</p>

<hr />

<p><strong>Mensagem:</strong></p>

<p>{{message}}</p>

<hr />

<p style="color: #999; font-size: 12px;">
  Mensagem recebida automaticamente pelo formulário do site GRX AGENCY
</p>
```

### PASSO 3: Salve e Teste

1. Clique em **"Save"** (botão azul)
2. Feche o template
3. Volte ao site e envie uma mensagem de teste
4. Verifique seu email!

---

## ✅ PRONTO!

Agora você receberá:
- ✅ Nome
- ✅ Email do cliente
- ✅ Telefone
- ✅ Tipo de serviço
- ✅ Mensagem

---

## DÚVIDAS?

Se o template não parecer certo:

1. Abra o painel EmailJS
2. Em **"Email Templates"**
3. Procure **"template_ia723n8"**
4. Copie exatamente o HTML acima
5. Salve

Pronto! 🎉
