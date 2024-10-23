const handler = async (m, {conn, text, command}) => {
  const yh = global.colombia;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '˜”*°• 👾 𝗣𝗿𝗲𝗰𝗶𝗼𝘀 𝗧𝗮𝗻𝗷𝗶𝗿𝗼 𝗕𝗼𝘁 👾 •°*”˜\n\n*`Precio Permanente Para Grupo`*\n- *Para 1 Grupo :* 10,400 Cop 🇨🇴\n- *Para 3 Grupos :* 16,900 Cop 🇨🇴\n- *Para 5 Grupos :* 26,000 Cop 🇨🇴\n\n*`Precio Mensual Para Grupo`*\n- *Precio Para 1 Grupo :* 6,500 Cop 🇨🇴\n- *Precio Para 3 Grupos :* 10,400 Cop 🇨🇴\n- *Precio Para 5 Grupos :* 16,900 Cop 🇨🇴\n\n_*Tanjiro Bot, Un Bot Activo 24/7 A Un Precio Económico, Fluido Y Rápido Ademas Puedes Descargar Musica, Videos Y Crear Stickers ✨*_\n\nhttps://chat.whatsapp.com/LcGsVxpCHNpKPDjp8A7dYN'}, {quoted: m});
};
handler.command = /^(colombia)$/i;
handler.tags = ['pago'];
handler.help = ['colombia'];
export default handler;

global.colombia = [
  'https://qu.ax/LPPlA.jpg',
];