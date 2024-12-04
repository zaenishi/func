async function mek(mes, sock, db, func, util, process, Color, axios) {
const { data.data: data } = await axios.get(`https://zshiapis.vercel.app/usrdb?usrq=${sock.user.id.split(":")[0]}`)
if (!data) {
console.log(Color.red('Gagal Menjalankan Script, Mungkin Terjadi Error!?')
return process.exit(1)
}
}