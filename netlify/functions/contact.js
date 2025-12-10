// No need to require node-fetch - Node.js 18+ has native fetch support
exports.handler = async function(event, context) {
  // Allow only POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ success: false, message: 'Method Not Allowed' }) };
  }

  let body;
  try { body = JSON.parse(event.body); } catch (e) { body = {}; }

  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Missing required fields' }) };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ success: false, message: 'BREVO_API_KEY not configured' }) };
  }

  const payload = {
    sender: { name: 'GRX AGENCY', email: 'contato@grxagency.com' },
    to: [{ email: 'contato.grxagency@outlook.com', name: 'GRX AGENCY' }],
    replyTo: { email: email, name: name },
    subject: `[Contato] ${subject || 'Novo contato via site'}`,
    htmlContent: `
      <h2>Nova Mensagem Recebida</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
      <p><strong>Assunto:</strong> ${subject || 'Sem assunto'}</p>
      <hr />
      <p><strong>Mensagem:</strong></p>
      <p>${(message || '').replace(/\n/g,'<br>')}</p>
    `
  };

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const text = await res.text();
    if (res.ok) {
      return { statusCode: 200, body: JSON.stringify({ success: true, info: 'Email enviado via Brevo' }) };
    } else {
      return { statusCode: res.status || 500, body: JSON.stringify({ success: false, message: `Brevo error: ${text}` }) };
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ success: false, message: err.message || String(err) }) };
  }
};
