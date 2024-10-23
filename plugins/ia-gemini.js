/* By Jtxs 🐢 */     
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*Ingresa un texto para hablar con gemini*`, m)

try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
let json = await api.json()

if (json.status === 'true') {
await conn.sendMessage(m.chat, {
text: json.result,
contextInfo: {
externalAdReply: {
title: '[ 𝐆 𝐄 𝐌 𝐈 𝐍 𝐈 - 𝐀 𝐈 ]',
body: '𝗠𝗶𝗰𝗸𝗲𝘆 𝗕𝗼𝘁 - 𝗠𝗗 ',
thumbnailUrl: 'https://qu.ax/UTgs.jpg',
sourceUrl: canal,
mediaType: 1,
renderLargerThumbnail: true
}}},
{ quoted: m})

} else {
conn.reply('error :v')
}
} catch {
conn.reply('error :v')
}
}

handler.help = ['gemini <texto>'];
handler.tags = ['ai'];
handler.command = ['gemini']

export default handler