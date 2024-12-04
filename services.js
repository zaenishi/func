async function conn(db, func, color, util) {
  const topBorder = color.yellow("┌" + "─".repeat(48) + "┐");
  const middleBorder = color.yellow("├" + "─".repeat(48) + "┤");
  const bottomBorder = color.yellow("└" + "─".repeat(48) + "┘");
  const sideLine = color.yellow("│");
  console.log(topBorder);
  console.log(sideLine + color.red.bold(" 🔥 Script ini dibuat oleh Zaenishi 🍄 🔥 ").padEnd(48) + sideLine);
  console.log(middleBorder);
  console.log(sideLine + color.cyan(" 🌐 Website: ").padEnd(20) + color.white.bold("zaenishi.xyz").padEnd(26) + sideLine);
  console.log(sideLine + color.cyan(" 💻 Github: ").padEnd(20) + color.white.bold("zaenishi").padEnd(26) + sideLine);
  console.log(sideLine + color.cyan(" 📸 Instagram: ").padEnd(20) + color.white.bold("zaenishi").padEnd(26) + sideLine);
  console.log(sideLine + color.cyan(" 📞 Kontak: ").padEnd(20) + color.white.bold("62831-8822-9366").padEnd(26) + sideLine);
  console.log(bottomBorder);
}
