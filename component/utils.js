export function tampilkanMenuUtama() {
    console.log("\n=== Menu Utama ===");
    console.log("1. Pilih Menu");
    console.log("2. Lihat Keranjang");
    console.log("3. Checkout");
    console.log("Ketik 'selesai' untuk keluar.\n");
}

export function tampilkanKategori(menu) {
    console.log("\n=== Pilih Kategori ===");
    console.log("0. Kembali ke Menu Utama");
    menu.forEach((item, index) => {
        console.log(`${index + 1}. ${item.kategori}`);
    });
}