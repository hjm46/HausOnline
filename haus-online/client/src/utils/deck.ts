// creating base deck
type Card = {
    suit: string;
    rank: string;
};

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['jack', 'queen', 'king', 'ace'];

export function createDeck(): Card[] {
    const deck: Card[] = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
            deck.push({ suit, rank });
        }
    }
    return deck;
}

// shuffling deck
export function shuffleCards(deck: Card[]): Card[] {
    const shuffledDeck = [...deck]
    .sort(() => Math.random() - 0.5)
    .map(card => ({...card, id: Math.random()}));
    return shuffledDeck;
}

// //dealing cards
// export function dealCards(deck: Card[], numCards: number): { Card[][] } {
//     handsArray: Card[][] = [][];
    
// }