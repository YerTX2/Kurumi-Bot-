const handler = async (m, {conn, text, command}) => {
  const yh = global.paypal;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '˜”*°• 👾 𝗣𝗿𝗲𝗰𝗶𝗼𝘀 𝗧𝗮𝗻𝗷𝗶𝗿𝗼 𝗕𝗼𝘁 👾 •°*”˜\n\n*`Precio Permanente Para Grupo`*\n- *Para 1 Grupo :* 2,58 Usd 💫\n- *Para 3 Grupos :* 4 Usd 💫\n- *Para 5 Grupos :* 5,97 Usd 💫\n\n*`Precio Mensual Para Grupo`*\n- *Precio Para 1 Grupo :* 1,73 Usd 💫\n- *Precio Para 3 Grupos :* 2,58 Usd 💫\n- *Precio Para 5 Grupos :* 4 Usd 💫\n\n_*Tanjiro Bot, Un Bot Activo 24/7 A Un Precio Económico, Fluido Y Rápido Ademas Puedes Descargar Musica, Videos Y Crear Stickers ✨*_\n\nhttps://chat.whatsapp.com/LcGsVxpCHNpKPDjp8A7dYN'}, {quoted: m});
};
handler.command = /^(paypal)$/i;
handler.tags = ['pago'];
handler.help = ['paypal'];
export default handler;

global.paypal = [
  'https://qu.ax/LPPlA.jpg',
];