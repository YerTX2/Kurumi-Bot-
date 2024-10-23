import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

  if (!text) return conn.reply(m.chat, '*\`Ingresa El Nombre De Lo Que Quieres Buscar\`*', m, fake)
        let mame = ` `
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `✳️ Vídeo/Audio no encontrado`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('💿') 
  let play = `*\`[YOUTUBE - YALLICO]\`*

> *\`TÍTULO :\`* ${vid.title}
> *\`DURACIÓN :\`* ${vid.timestamp}`
 await conn.sendButton(m.chat, play, mame, thumbnail, [
    ['Audio 🎶', `${usedPrefix}fgmp3 ${url}`],
    ['Video 🎶', `${usedPrefix}fgmp4 ${url}`],
['Audio Doc 🎶', `${usedPrefix}ytmp3doc ${url}`],
['Video Doc 🎶', `${usedPrefix}ytmp4doc ${url}`]
  ], null, [['Canal 🎶', `${canal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = false

export default handler