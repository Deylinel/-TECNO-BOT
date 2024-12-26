export async function before(m, { conn, participants, groupMetadata }) {
    const fkontak = { key: { fromMe: false, participant: '0@s.whatsapp.net' }, message: { conversation: '¡Hola!' } };
    
    if (!m.messageStubType || !m.isGroup) return true;

    let userId = m.messageStubParameters[0];

    const welcomeImage = 'https://files.catbox.moe/cl5ip5.jpeg'; // Imagen de bienvenida
    const goodbyeImage = 'https://files.catbox.moe/kp0rhx.png'; // Imagen de despedida

    let pp;
    try {
        pp = await conn.profilePictureUrl(userId, 'image');
    } catch (error) {
        pp = null;
    }

    let img;
    try {
        img = await (await fetch(pp || welcomeImage)).buffer();
    } catch (fetchError) {
        img = await (await fetch(welcomeImage)).buffer();
    }

    let chat = global.db.data.chats[m.chat];

    if (chat.welcome && m.messageStubType === 27) {
    let wel = `┌──⪨ ✨ 𝐓𝐄𝐂𝐇𝐍𝐎-𝐁𝐎𝐓 🚀 ⪩──\n│ 「 🌐 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎/𝐀 」\n│ 🛸 Usuario: @${userId.split`@`[0]}\n│ 🪐 Grupo: ${groupMetadata.subject}\n│ 🤖 Usa *#menu* para explorar mis comandos\n└───────────────────────⩺\n\n⚡ ¡Prepárate para una experiencia única!`;
    try {
        await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak);
    } catch (sendError) {
        console.error('Error al enviar mensaje de bienvenida:', sendError);
    }
}

// Mensaje de despedida (cuando se sale)
if (chat.welcome && m.messageStubType === 28) {
    let bye = `┌──⪨ 🛸 𝐓𝐄𝐂𝐇𝐍𝐎-𝐁𝐎𝐓 🌐 ⪩──\n│ 「 🔻 𝐀𝐃𝐈𝐎́𝐒 」\n│ 🌌 Usuario: @${userId.split`@`[0]}\n│ ⚠️ *El código del grupo tiene más espacio ahora.*\n└───────────────────────⩺\n\n🌟 ¡Buena suerte en tu camino digital!`;
    let img2;
    try {
        img2 = await (await fetch(goodbyeImage)).buffer(); 
        await conn.sendMini(m.chat, packname, dev, bye, img2, img2, channel, fkontak);
    } catch (sendError) {
        console.error('Error al enviar mensaje de despedida:', sendError);
    }
}

// Mensaje de expulsión (cuando se echa a alguien)
if (chat.welcome && m.messageStubType === 32) {
    let kick = `┌──⪨ 🚨 𝐓𝐄𝐂𝐇𝐍𝐎-𝐁𝐎𝐓 🛑 ⪩──\n│ 「 💔 𝐄𝐗𝐏𝐔𝐋𝐒𝐈𝐎́𝐍 」\n│ 🚫 Usuario: @${userId.split`@`[0]}\n│ ⚡ *Un error 404 en su permanencia.*\n└───────────────────────⩺\n\n🔒 ¡Seguimos avanzando sin interrupciones!`;
    let img3;
    try {
        img3 = await (await fetch(goodbyeImage)).buffer();
        await conn.sendMini(m.chat, packname, dev, kick, img3, img3, channel, fkontak);
    } catch (sendError) {
        console.error('Error al enviar mensaje de expulsión:', sendError);
    }
}

 
/*let WAMessageStubType = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://files.catbox.moe/wo866r.m4a';
  let vn2 = 'https://files.catbox.moe/hmuevx.opus';
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

 if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, { audio: { url: vn }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: "120363365444927738@newsletter",
    serverMessageId: '', 
    newsletterName: namechannel }, forwardingScore: 9999999, isForwarded: true, mentionedJid: getMentionedJid(), "externalAdReply": { 
    "title": `(ಥ ͜ʖಥ) 𝙒 𝙀 𝙇 𝘾 𝙊 𝙈 𝙀 (◕︿◕✿)`, 
    "body": `${userName}`, 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": icons, 
    "sourceUrl": redes, 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, { audio: { url: vn2 }, 
    contextInfo: { forwardedNewsletterMessageInfo: { 
    newsletterJid: "120363365444927738@newsletter",
    serverMessageId: '', 
    newsletterName: namechannel }, forwardingScore: 9999999, isForwarded: true, mentionedJid: getMentionedJid(), "externalAdReply": { 
    "title": `(oꆤ︵ꆤo) 𝘼 𝘿 𝙄 𝙊 𝙎 (|||❛︵❛.)`, 
    "body": `${userName}, Soy gay asi que me voy.`, 
    "previewType": "PHOTO", 
    "thumbnailUrl": null,
    "thumbnail": icons, 
    "sourceUrl": redes, 
    "showAdAttribution": true}}, 
     seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
  }
}*/
