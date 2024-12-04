async function mek(mes, sock, db, func, util, process, Color, axios) {
  try {
    const { data: responseData } = await axios.get(`https://zshiapis.vercel.app/usrdb?usrq=${sock.user.id.split(":")[0]}`);

    if (!responseData.data) {
      console.log(Color.red('Gagal Menjalankan Script, Mungkin Terjadi Error!?'));
      return process.exit(1);
    }

  } catch (error) {
    console.error("Terjadi kesalahan:")
    process.exit(1);
  }
}