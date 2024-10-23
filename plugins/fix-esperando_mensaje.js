/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '> Solamente Lo Puede Usar Mi Creador 🇦🇱'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './MickeySession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '> Error No Hay Archivos Que Eliminar'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `> Archivos Eliminados:${filesDeleted}\n> AntiBug 1 Activado 🇦🇱`}, {quoted: m});
    }
  } catch (err) {
    console.error('> Error Verifique La Carpeta De Session:', err);
    await conn.sendMessage(m.chat, {text: '> Verifique Que Sea Tal Cual La Carpeta De Session'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `> AntiBug X Yallico 🇦🇱\n\n> Si El Bot No Responde Aún , Le Recomiendo Hacer Un Pequeño Spam De 3 Veces Ejecutando El Siguiente Comando: .s`}, {quoted: m});
};
handler.help = ['AntiBug1'];
handler.tags = ['main'];
handler.command = /^(AntiBug1|ds)$/i;
export default handler;
