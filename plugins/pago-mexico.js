const handler = async (m, {conn, text, command}) => {
  const yh = global.mexico;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '˜”*°• 👾 𝗣𝗿𝗲𝗰𝗶𝗼𝘀 𝗧𝗮𝗻𝗷𝗶𝗿𝗼 𝗕𝗼𝘁 👾 •°*”˜\n\n*`Precio Permanente Para Grupo`*\n- *Para 1 Grupo :* 51 Mx 🇲🇽\n- *Para 3 Grupos :* 83 Mx 🇲🇽\n- *Para 5 Grupos :* 127 Mx 🇲🇽\n\n*`Precio Mensual Para Grupo`*\n- *Precio Para 1 Grupo :* 32 Mx 🇲🇽\n- *Precio Para 3 Grupos :* 51 Mx 🇲🇽\n- *Precio Para 5 Grupos :* 83 Mx 🇲🇽\n\n_*Tanjiro Bot, Un Bot Activo 24/7 A Un Precio Económico, Fluido Y Rápido Ademas Puedes Descargar Musica, Videos Y Crear Stickers ✨*_\n\nhttps://chat.whatsapp.com/LcGsVxpCHNpKPDjp8A7dYN'}, {quoted: m});
};
handler.command = /^(mexico)$/i;
handler.tags = ['pago'];
handler.help = ['mexico'];
export default handler;

global.mexico = [
  'https://qu.ax/LPPlA.jpg',
];