// Zar arayüzü (Interface)
class IDice {
    roll() {
        throw new Error("roll() metodu implement edilmeli.");
    }
}

// Standart 6 yüzlü zar
class StandardDice extends IDice {
    constructor(sides = 6) {
        super();
        this.sides = sides;
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

// Zar atma servisi (Dependency Injection ile)
class DiceRoller {
    constructor(dice) {
        this.dice = dice;
    }

    rollDice() {
        return this.dice.roll();
    }
}

// UI ile bağlantı
document.addEventListener("DOMContentLoaded", function () {
    const dice = new StandardDice();
    const roller = new DiceRoller(dice);

    const resultDiv = document.getElementById("diceResult");
    const rollBtn = document.getElementById("rollBtn");

    rollBtn.addEventListener("click", function () {
        const result = roller.rollDice();
        resultDiv.textContent = result;
    });
});