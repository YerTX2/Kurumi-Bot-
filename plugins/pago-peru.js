const handler = async (m, {conn, text, command}) => {
  const yh = global.peru;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '˜”*°• 👾 𝗣𝗿𝗲𝗰𝗶𝗼𝘀 𝗧𝗮𝗻𝗷𝗶𝗿𝗼 𝗕𝗼𝘁 👾 •°*”˜\n\n*`Precio Permanente Para Grupo`*\n- *Para 1 Grupo :* 7 Soles 🇵🇪\n- *Para 3 Grupos :* 12 Soles 🇵🇪\n- *Para 5 Grupos :* 16 Soles 🇵🇪\n\n*`Precio Mensual Para Grupo`*\n- *Precio Para 1 Grupo :* 4 Soles 🇵🇪\n- *Precio Para 3 Grupos :* 7 Soles 🇵🇪\n- *Precio Para 5 Grupos :* 11 Soles 🇵🇪\n\n_*Tanjiro Bot, Un Bot Activo 24/7 A Un Precio Económico, Fluido Y Rápido Ademas Puedes Descargar Musica, Videos Y Crear Stickers ✨*_\n\nhttps://chat.whatsapp.com/D8b5JZEIfLF3YZiCDP1cAp'}, {quoted: m});
};
handler.command = /^(peru)$/i;
handler.tags = ['pago'];
handler.help = ['peru'];
export default handler;

global.peru = [
  'https://qu.ax/LPPlA.jpg',
];