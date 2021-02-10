// create a deck of cards from scratch

const ranks = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]

const createDeck = (ranks, suits) => {
    let fullDeck = []
    ranks.forEach(rank => {
        suits.forEach(suit => {
            let newCard = {}
            newCard[rank]=suit
            fullDeck.push(newCard)
        })
    });
    // console.log(fullDeck)
    return fullDeck
}

let cards = createDeck(ranks, suits)
console.log(cards)