import ytSearch from "yt-search"
const handler = async (m, { conn, usedPrefix, args, command }) => {
try {
let titu = ` `
const text = args.length >= 1 ? args.slice(0).join(" ") : (m.quoted && m.quoted?.text || m.quoted?.caption || m.quoted?.description) || null

if (!text) return conn.reply(m.chat, '*\`Ingresa El Nombre De Lo Que Quieres Buscar\`*', m, fake)
await m.react('🕒')

const { all: [bestItem, ...moreItems] } = await ytSearch(text)
const videoItems = moreItems.filter(item => item.type === 'video')
const formattedData = {
title: `\`[ YOUTUBE - SEARCH ]\`\n\n> 🤍 *\`Titulo :\`* ${bestItem.title}\n> 🤍 *\`Duración :\`* ${bestItem.timestamp}\n> 🤍 *\`Visitas :\`* ${bestItem.views}\n> 🤍 *\`Subido :\`* ${bestItem.ago}\n> 🤍 *\`Url :\`* ${bestItem.url}`,
rows: [{
title: "Vídeo más Popular 😼",
highlight_label: "Popular",
rows: [{
header: bestItem.title,
id: `${usedPrefix}ytmp4 ${bestItem.url}`,
title: bestItem.title,
description: ""
}]
}, {
title: "Videos Encontrados 🤍",
rows: videoItems.map(({
title,
url,
description
}, index) => ({
header: `${index + 1}). ${title}`,
id: `.fgmp4 ${url}`,
title: title,
description: ""
}))
}]
}
const emojiMap = {
type: "🎥",
videoId: "🆔",
url: "🔗",
title: "📺",
description: "📝",
image: "🖼️",
thumbnail: "🖼️",
seconds: "⏱️",
timestamp: "⏰",
ago: "⌚",
views: "👀",
author: "👤"
}

const caption = Object.entries(bestItem).map(([key, value]) => {
const formattedKey = key.charAt(0).toUpperCase() + key.slice(1)
const valueToDisplay = key === 'views' ? new Intl.NumberFormat('en', { notation: 'compact' }).format(value) : key === 'author' ? `Nombre: ${value.name || 'Desconocido'}\nURL: ${value.url || 'Desconocido'}` : value || 'Desconocido';
return ` ${emojiMap[key] || '🔹'} *${formattedKey}:* ${valueToDisplay}`}).join('\n')

await m.react('✅')
await conn.sendButtonMessages(m.chat, [
[formattedData.title, titu, bestItem.image || logo, [
], null, [
[]
],
[["ʀᴇꜱᴜʟᴛᴀᴅᴏꜱ 🍂", formattedData.rows]]
]], m, fake)

} catch (error) {
console.error(error)
conn.reply(m.chat, `Ocurrió un error.${error}`, m)
}
}

handler.help = ['ytsearch *<text>*']
handler.tags = ['search']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.register = true
export default handler
