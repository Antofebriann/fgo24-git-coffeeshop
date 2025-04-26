export function tampilkanKeranjang(keranjang) {

  console.log("\n=== Isi Keranjang ===");
  if (keranjang.length === 0) {
      console.log("Keranjang masih kosong.");
  } else {
      let total = 0;
      keranjang.forEach((item, i) => {
          console.log(`${i + 1}. ${item.name} - Rp${item.harga}`);
          total += item.harga;
      });
      console.log(`Total sementara: Rp${total}`);
  }
  console.log("\nKetik 'kembali' untuk ke menu utama.");
}

export function checkout(keranjang) {
  console.log("\n=== Checkout ===");
  if (keranjang.length === 0) {
      console.log("Keranjang kosong. Tidak ada yang dipesan.");
  } else {
      let total = 0;
      keranjang.forEach((item, i) => {
          console.log(`${i + 1}. ${item.name} - Rp${item.harga}`);
          total += item.harga;
      });
      console.log(`\nTotal yang harus dibayar: Rp${total}`);
      console.log("Terima kasih telah memesan!");
  }
  process.exit();
}