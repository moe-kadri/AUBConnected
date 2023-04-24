import React from "react"
import Heading from "../../heading/Heading"
import "./tradehead.css"

const TradeHead = () => {
  return (
    <>
      <section className='tradehead'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='UniFlow Trading' title='What courses are you willing to trade?' />
            <p>Drop your bet and trade your courses.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default TradeHead
