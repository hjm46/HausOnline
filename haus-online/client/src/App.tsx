import React, { useState } from 'react'
import { createDeck, shuffleCards } from './utils/deck'
import { getCardImage } from './utils/imageUtils'

function App() {

  const [deck, setDeck] = useState(createDeck())

  const handleShuffle = () => {
    const shuffledDeck = shuffleCards([...deck]);
    setDeck(shuffledDeck);
  };

  return (
    <div>
      <button onClick={handleShuffle}>Shuffle Deck</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {deck.map((card, index) => (
          <img 
            key={index}
            src={getCardImage(card)} 
            alt={`${card.rank} of ${card.suit}`} 
            style={{ width: '80px', height: 'auto' }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
