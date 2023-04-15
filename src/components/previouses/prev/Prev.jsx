import React from "react"
import Heading from "../../heading/Heading"
import "./Prev.css"

const Prev = () => {
  return (
    <>
      <section className='prev'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='UniFlow Previouses' title='What previous are you looking for?' />
            <p>Find the previous you want, filtered by course, semester, year, and/or professor.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Prev
