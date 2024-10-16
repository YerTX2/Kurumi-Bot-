/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '> Solamente Lo Puede Usar Mi Creador 🇦🇱'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '> AntiBug2 Activado , Iniciando Proceso'}, {quoted: m});
  const sessionPath = './KurumiSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '> La Carpeta Session Esta Vacia O No Existe, Fijese Que La Carpeta Sea La Correcta'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '> Error No Hay Archivos Que Eliminar'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `> Archivos Eliminados:${filesDeleted}\n> AntiBug 2 Activado 🇦🇱`}, {quoted: m});
    }
  }  catch (err) {
    console.error('> Error Verifique La Carpeta De Session:', err);
    await conn.sendMessage(m.chat, {text: '> Verifique Que Sea Tal Cual La Carpeta De Session'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `> AntiBug X YerTX2🇦🇱\n\n> Si El Bot No Responde Aún , Le Recomiendo Hacer Un Pequeño Spam De 3 Veces Ejecutando El Siguiente Comando: .s`}, {quoted: m});
};
handler.help = ['AntiBug2'];
handler.tags = ['main'];
handler.command = /^(AntiBug2|dsowner|clearallsession)$/i;
handler.rowner = true
export default handler;
