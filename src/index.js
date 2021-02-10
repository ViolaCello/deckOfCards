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
  console.log(fullDeck)
    return fullDeck
}

const cards = createDeck(ranks, suits)

function showCards(cards) {
    cards.forEach(card => {
        console.log(card)
    })
}

showCards(cards)

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
    const createTwoPiles = cc => {
        
        console.log("Line51 ", cc.length, depthOfCut)
        if (depthOfCut !=0) {
            leftPile.push(cc.shift())
            depthOfCut--
            return createTwoPiles(cc)
        } else {
            console.log("What's left of deck=", deck)
            deck.forEach(d => {
                rightPile.push(d)
            })
        }
        let result = []
        result.push(leftPile)
        result.push(rightPile)
        return result
    }
   let twoHalves = createTwoPiles(deck)
   return twoHalves
    
}

let c = cutTheDeck(cards)
console.log("This is C", c)

// Now that the deck is cut, we need to shuffle the cards back together (ie., merge)
// this will take in an array of the two halfs of the deck(s) we just cut
const combineHalfDecks = decks => {
  //  debugger
    let combinedDecks = []
    while (decks[0].length !=0 && decks[1].length !=0) {
        let side = Math.round(Math.random()) // when shuffling a deck, there is never an even insertion of left and right, replicating it here
        combinedDecks.push(decks[side].shift()) 
    } 
    return combinedDecks.concat(decks[0]).concat(decks[1])
    
}

let shuffledDeck = combineHalfDecks(c)
console.log(shuffledDeck.length)
showCards(shuffledDeck)