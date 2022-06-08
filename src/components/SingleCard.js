import React from "react"
import imageFront from '../img/front.jpg'

export default function SingleCard({ item, handleChoise, isSwitched }) {

    function handleClick() {
        handleChoise(item)
    }

  return (
    
        <div className='card' key={item.id}>
            <div className={isSwitched ? 'switched' : undefined}>
              <img src={item.src} className='cardVisible' alt="cardVisible" />
              <img src={imageFront}
                     className='cardFront'
                     alt="cardFront"
                     onClick={handleClick}
                     />
            </div>
          </div>

   

  )
}
