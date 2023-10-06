class Kota {
  constructor(public nama: string) {}
}

class Negara {
  private kota: Kota[] = [];

  constructor(public nama: string) {}

  tambahKota(namaKota: string) {
    const kotaBaru = new Kota(namaKota);
    this.kota.push(kotaBaru);
  }

  daftarKota() {
    console.log(`Kota-kota di ${this.nama}:`);
    this.kota.forEach((kota, index) => {
      console.log(`${index + 1}. ${kota.nama}`);
    });
  }
}

class Program {
  private negara: Negara[] = [];

  tambahNegara(namaNegara: string) {
    const negaraBaru = new Negara(namaNegara);
    this.negara.push(negaraBaru);
  }

  tambahKota(namaNegara: string, namaKota: string) {
    const negara = this.cariNegara(namaNegara);
    if (negara) {
      negara.tambahKota(namaKota);
    } else {
      console.log(`Negara ${namaNegara} tidak ditemukan.`);
    }
  }

  daftarNegara() {
    console.log("Daftar Negara:");
    this.negara.forEach((negara, index) => {
      console.log(`${index + 1}. ${negara.nama}`);
    });
  }

  daftarKota(namaNegara: string) {
    const negara = this.cariNegara(namaNegara);
    if (negara) {
      negara.daftarKota();
    } else {
      console.log(`Negara ${namaNegara} tidak ditemukan.`);
    }
  }

  private cariNegara(namaNegara: string): Negara | undefined {
    return this.negara.find((negara) => negara.nama === namaNegara);
  }
}

const program = new Program();

program.tambahNegara("Indonesia");
program.tambahNegara("Amerika Serikat");

program.tambahKota("Indonesia", "Jakarta");
program.tambahKota("Indonesia", "Surabaya");
program.tambahKota("Amerika Serikat", "New York");
program.tambahKota("Amerika Serikat", "Los Angeles");

program.daftarNegara();
program.daftarKota("Indonesia");
program.daftarKota("Amerika Serikat");
