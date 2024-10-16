const handler = async (m, {conn, text, command}) => {
  const yh = global.staff;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*Te Presentamos Al Staff De Tanjiro Bot 👾*\n\n*Creador Oficial :*\n- *Yallico 🤖  / +51 926 956 637*\n\n*Vendedores Oficiales :*\n- *Nare 👸 / +51 971 060 913*\n- *Nat 👸 / +52 417 206 4415*\n- *Lexus 🤴 / +505 8858 6015*\n- *Mayra 👸 / +54 9 11 6122-5453*\n- *Mari 👸 / +54 9 11 6395-9270*\n\n*Grupo Oficial :* https://chat.whatsapp.com/D8b5JZEIfLF3YZiCDP1cAp'}, {quoted: m});
};
handler.command = /^(staff)$/i;
handler.tags = ['main'];
handler.help = ['staff'];
export default handler;

global.staff = [
  'https://qu.ax/RlyXW.jpg',
];