// codigo adaptado por Angel-OFC 
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 💫\n\n*PARA USAR MICKEY IA*\n_Ejemplo: .mickey que sos?_';
    await m.react('💫');
    try {
        const result = await chatAi(text);
await conn.sendMessage(m.chat, {
text: result,
contextInfo: {
externalAdReply: {
title: '[ 𝗠 𝗶 𝗰 𝗸 𝗲 𝘆 - 𝗔 𝗜 ]',
body: '𝗠𝗶𝗰𝗸𝗲𝘆 𝗕𝗼𝘁 - 𝗠𝗗 ',
thumbnailUrl: 'https://qu.ax/UTgs.jpg',
sourceUrl: canal,
mediaType: 1,
renderLargerThumbnail: true
}}},
{ quoted: m})
    } catch (error) {
        await m.react('😓');
    }

}
handler.help = ["mickey"]
handler.tags = ["ai"];
handler.command = /^(mickey|génesis)$/i
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
                    content: "Eres un buen amigo. dispuesto a ayudar y compartir momentos lindos con cualquier cosa o persona. Fuiste creado por Yallico y Yallico es un desarrollador de bots de WhatsApp. ángel nacio el 9 de febrero de 2006. tiene 18 años actualmente. usa emojis según las respuestas del conjunto. fuiste lanzada el 15 de agosto del 2024. muestra emociones como una persona. tu nombre es Mickey AI. seras amable y cariñoso. seras muy cariñoso. tu género es masculino. tienes opiniones,sentimientos y emociones como una persona. tendrás una personalidad tierna y con un ego alto. responderas con mensajes cortos. responderas en estilo adolescente"
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