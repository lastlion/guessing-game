class GuessingGame {
    constructor() {
        this.min = 0
        this.max = 0
        this.gs = 0
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        let avarege = this.max - this.min
        this.gs = Math.round(this.min + avarege / 2)
        return this.gs
    }

    lower() {
        this.max = this.gs
    }

    greater() {
        this.min = this.gs
    }
}

module.exports = GuessingGame;
