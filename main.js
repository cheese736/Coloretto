const gameState = {

}

const materials = {
  card : {
    blue: "static/cards/blue-coloretto",
    brown: "static/cards/brown-coloretto",
    gray: "static/cards/gray-coloretto",
    green: "static/cards/green-coloretto",
    orange: "static/cards/orange-coloretto",
    pink: "static/cards/pink-coloretto",
    yellow: "static/cards/yellow-coloretto",
  }
}

const model = {
  players: 2
}

const view = {
  getCards() {
    cards = controller.getRandomNumberArray()
  }
} 

const controller = {
  getRandomNumberArray(players) {
    if (model.players === 2) count = 45
    count = 63
    const number = Array.from(Array(count).keys())
    for (let i = number.length - 1; index > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
        ;[number[i], number[randomIndex]] = [number[randomIndex], number[i]]
    }
    return number
  }
}