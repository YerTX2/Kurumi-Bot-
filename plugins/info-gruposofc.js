
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://i.ibb.co/ZYprXhm/file.jpg'
m.react('✅')
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
᥀·࣭࣪̇˖✅◗ 𝘊𝘈𝘕𝘈𝘓:
• ${canal}

᥀·࣭࣪̇˖✅◗ 𝘈𝘝𝘐𝘚𝘖𝘚 🛎️:
• ${bgp}
`
await conn.sendButton(m.chat, estado, 'YerTX2🇦🇱 Creador', pp, [
['Dueño ✅', '.owner'], ['Donar ✅', '.donate']], null, [['Canal ✅', `${canal}`]], m)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos|groups|support?)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
