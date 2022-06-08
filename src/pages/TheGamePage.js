import React, { useEffect, useState } from 'react'

import SingleCard from '../components/SingleCard'

import '../styles/gameStyles.scss'

import ace from '../img/ace.jpg'
import four from '../img/four.jpg'
import jack from '../img/jack.jpg'
import king from '../img/king.jpg'
import queen from '../img/queen.jpg'
import seven from '../img/seven.jpg'
import ten from '../img/ten.jpg'
import two from '../img/two.jpg'

export default function TheGamePage() {

  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);


  const cardsArray = [
    {src : ace, isMatched: false},
    {src : four, isMatched: false},
    {src : jack, isMatched: false},
    {src : king, isMatched: false},
    {src : queen, isMatched: false},
    {src : seven, isMatched: false},
    {src : ten, isMatched: false},
    {src : two, isMatched: false}
  ]


  
  function reshuffleCards() {
    const reshuffledCards = [...cardsArray, ...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));
  
    setCards(reshuffledCards);
  }

  function handleChoise(card) {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);

  }

  function resetTurns() {
    setFirstChoice(null);
    setSecondChoice(null);
  }

  useEffect(() => {
    if(firstChoice && secondChoice) {
      if(firstChoice.src === secondChoice.src){
        setCards(prev => {
          return prev.map(card => {
            if(card.src === firstChoice.src) {
              return {...card, isMatched: true}
            } else {
              return card                                    //It`s return a NEW arr
            }
          })
        })
        resetTurns();

      } else {
        resetTurns();
      }
    }
  }, [firstChoice, secondChoice])

  console.log(cards);

  return (
    <>

    <div className='gameContainer'>
      <button className='btn' onClick={reshuffleCards}>New Game</button>
      <div className='cardsGrid'>
        {cards.map(item => (
          <SingleCard 
          key={item.id} 
          item={item}
          handleChoise={handleChoise}
          isSwitched={item === firstChoice || item === secondChoice || item.isMatched}
          />
        ))}
      </div>
    </div>

</>
  )
}
