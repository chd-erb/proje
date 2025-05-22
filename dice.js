// Zar arayüzü (Interface)
class Zar {
    zarAt() {
        throw new Error("zarAt() metodu implement edilmeli.");
    }
}

// Standart 6 yüzlü zar
class StandartZar extends Zar {
    constructor(yuzSayisi = 6) {
        super();
        this.yuzSayisi = yuzSayisi;
    }

    zarAt() {
        return Math.floor(Math.random() * this.yuzSayisi) + 1;
    }
}

// Zar atma servisi (Bağımlılıkları dışarıdan alır)
class ZarAtici {
    constructor(zar) {
        this.zar = zar;
    }

    zarAt() {
        return this.zar.zarAt();
    }
}

// Arayüz ile bağlantı
document.addEventListener("DOMContentLoaded", function () {
    const standartZar = new StandartZar();
    const zarAtici = new ZarAtici(standartZar);

    const sonucDiv = document.getElementById("diceResult");
    const zarAtBtn = document.getElementById("rollBtn");

    zarAtBtn.addEventListener("click", function () {
        const sonuc = zarAtici.zarAt();
        sonucDiv.textContent = sonuc;
    });
});