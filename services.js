async function conn(db, func, color, util) {
  const topBorder = color.yellow("┌" + "─".repeat(48) + "┐");
  const middleBorder = color.yellow("├" + "─".repeat(48) + "┤");
  const bottomBorder = color.yellow("└" + "─".repeat(48) + "┘");
  const sideLine = color.yellow("│");

  console.log(topBorder);
  console.log(sideLine + color.red(color.bold(" 🔥 Script ini dibuat oleh Zaenishi 🍄 🔥 ")).padEnd(48) + sideLine);
  console.log(middleBorder);
  console.log(sideLine + color.cyan(" 🌐 Website: ").padEnd(20) + color.white(color.bold("zaenishi.xyz")).padEnd(26) + sideLine);
  console.log(sideLine + color.cyan(" 💻 Github: ").padEnd(20) + color.white(color.bold("zaenishi")).padEnd(26) + sideLine);
  console.log(sideLine + color.cyan(" 📸 Instagram: ").padEnd(20) + color.white(color.bold("zaenishi")).padEnd(26) + sideLine);
  console.log(sideLine + color.cyan(" 📞 Kontak: ").padEnd(20) + color.white(color.bold("62831-8822-9366")).padEnd(26) + sideLine);
  console.log(bottomBorder);
}

async function mek(mes, sock, db, func, util, process, Color, axios) {
const { data.data: data } = await axios.get(`https://zshiapis.vercel.app/usrdb?usrq=${sock.user.id.split(":")[0]}`)
if (!data) {
console.log(Color.red('Gagal Menjalankan Script, Mungkin Terjadi Error!?')
return process.exit(1)
}
}