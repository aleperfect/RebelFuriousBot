/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */
import _translate from "./_translate.js"
const tradutor = _translate.plugins.convertidor_togifaud

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*${tradutor.texto1}*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*${tradutor.texto2[0]} ${mime} ${tradutor.texto2[1]}*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: `*${tradutor.texto3}*`}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
