let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `🚩 *S U P E R I O R I T Y - H O S T* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *Superiority Host*, un hosting de calidad con servidores dedicados y precios por debajo de 1USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

🟢 \`\`\`Información del Host\`\`\`

🔮 *Dashboard:* 
• https://system.py.superiority.pro

🧃 *Panel:*
• https://control.py.superiority.pro

💥 *Canal:*
• https://whatsapp.com/channel/0029Vajmcez5PO0xdMq2Qu1e

⚜️ *Contacto (Mateo)*
• +51926956637

> *Únete a está comunidad y disfruta de un servicio de calidad :D*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 S U P E R I O R I T Y - H O S T 🔵`,
body: `⚜️ Super Hosting 24/7 ⚜️`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/DsAV.jpg', 
sourceUrl: ''}}},
{ quoted: fkontak})
}
handler.tags =['main'] 
handler.help = ['host'] 
handler.command = ['host', 'Superiority', 'superhost', 'hosting']
export default handler
