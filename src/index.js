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

// Shuffle the deck

// Step one: Cut the deck

const cutTheDeck = deck => {
    // check that the deck(s) are a full 52 cards each
    let amountOfDecks = (deck.length*2) / 52
    if (deck.length % 52 != 0) {
        return ("This is not a full legal deck")
    } else {
        
        console.log (`There is/are ${amountOfDecks} full deck(s) here.`)
    }
    let depthOfCut = Math.floor((Math.random() * 20) + (20)) * amountOfDecks ;
    console.log(depthOfCut)
}

cutTheDeck(cards)
