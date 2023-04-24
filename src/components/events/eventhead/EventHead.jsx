import React from "react"
import Heading from "../../heading/Heading"
import "./eventhead.css"

const EventHead = () => {
  return (
    <>
      <section className='eventhead'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='UniFlow Events' title='Missing events or not hearing about them?' />
            <p>Check-out all events, organized for YOU.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default EventHead
