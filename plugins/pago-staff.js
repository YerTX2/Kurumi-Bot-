const handler = async (m, {conn, text, command}) => {
  const yh = global.staff;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*hola 🌟*\n\n*Creador Oficial :*\n- *YerTX2 🇦🇱*\n\n*Grupo Oficial :* https://chat.whatsapp.com/EfnhQvzXQWW940w73UnRBh'}, {quoted: m});
};
handler.command = /^(staff)$/i;
handler.tags = ['main'];
handler.help = ['staff'];
export default handler;

global.staff = [
  'https://qu.ax/RlyXW.jpg',
];