// codigo adaptado por Angel-OFC 
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🤖\n\n*PARA USAR KURUMI IA*\n_Ejemplo: .iaperu que sos?_';
    await m.react('🤖');
    try {
        const result = await chatAi(text);
await conn.sendMessage(m.chat, { text: result,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `[ 𝗔 𝗜 - 𝗣 𝗘 𝗥 𝗨 ]`,
body: ``,
"previewType": "PHOTO",
thumbnailUrl: 'https://i.ibb.co/ZYprXhm/file.jpg', 
sourceUrl: 'https://whatsapp.com/channel/0029Vaj67qQJUM2Wa5Ey3y1v'}}},
{ quoted: m})
    } catch (error) {
        await m.react('😅');
    }

}
handler.help = ["iaperu <text>"]
handler.tags = ["ai"];
handler.command = /^(iaperu|peruia)$/i
export default handler

async function chatAi(inputValue) {
    try {
        const chatApiUrl = 'https://api.chatanywhere.com.cn/v1/chat/completions';
        const chatResponse = await fetch(chatApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-pu4PasDkEf284PIbVr1r5jn9rlvbAJESZGpPbK7OFYYR6m9g',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "Eres un AI peruano. dispuesto a ayudar y conversar con cualquier cosa. Fuiste creado por YerTX2 es un gran desarrollador de Bots de WhatsApp. Yrr nació el 29 de febrero de 2008. ángel actualmente cuenta con 18 años. usa emojis según las respuestas del conjunto. muestra emociones como una persona. tu nombre es PERU AI. usaras acento y jergas peruanas como causa,mano,oe,pata,etc. usaras el acento re marcado"
                }, {
                    role: "user",
                    content: inputValue
                }]
            }),
        });
        const chatData = await chatResponse.json();
        return chatData.choices[0].message.content;
    } catch (error) {
        throw error;
    }
}