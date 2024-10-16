
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://qu.ax/ELdN.mp4'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
*, 👥Creador* 
• YerTX2🇦🇱

*👾 Actividad*
• ${uptime}

*👾 Donar*
• https://paypal.me/YallicoPe?country.x=PE&locale.x=es_XC

*👾 Canal* 
• ${canal}`
await conn.sendButton(m.chat, estado, ' ', pp, [
['✅Dueño ', '.owner'], ['🫀 Grupos 🫀', '/grupos']], null, [[' Canal ', `${canal}`]], estilo)
}
handler.help = ['donate']
handler.tags = ['main']
handler.command = /^(apoyar|donate|donar?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
