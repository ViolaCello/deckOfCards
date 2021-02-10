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
    let amountOfDecks = deck.length / 52
    if (deck.length % 52 != 0) {
        return ("This is not a full legal deck")
    } else {
        
        console.log (`There is/are ${amountOfDecks} full deck(s) here.`)
    }
    // like in real life, the cut of the deck is never exactly half
    let depthOfCut = Math.floor((Math.random() * 20) + (20)) * amountOfDecks 
    console.log(depthOfCut)
    // create two piles of cards
    let leftPile = []
    let rightPile = []
    const createTwoPiles = deck => {
        console.log("Line 42")
        leftPile.push(deck.shift())
        if (depthOfCut !=0) {
            depthOfCut--
            return createTwoPiles(deck)
        } else {
            rightPile.push(deck)
        }
        console.log("Left=", leftPile.length, " ", leftPile)
        console.log("Right=", rightPile.length, " ", rightPile)
    }
    createTwoPiles(deck)
    console.log("End")
}

cutTheDeck(cards)
