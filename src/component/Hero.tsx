import React from 'react'

function Hero() {
  return (
    <div className='d-flex row h-150 mb-4 ' style={{width:"85%",paddingLeft:"18%"}}>
         <h3 className="display-3 fw-bold mb-5 text-center">
          Understanding the Universe
        </h3>
        <p className="text-center">
          The universe is vast, mysterious, and filled with secrets yet to be
          uncovered. Every theory we create brings us closer to understanding
          the fabric of reality — the nature of time, space, energy, and matter.
          As humanity, we are destined to explore, to question, and to expand
          our vision beyond the stars.
        </p>

        <p className="fst-italic mb-4 text-center">
          As Galileo once looked through his telescope to expand our vision,  
          we too must scale the scope of our understanding to see the universe.
        </p>
    </div>
  )
}

export default Hero