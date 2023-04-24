import React from "react"
import Heading from "../../heading/Heading"
import "./feedhead.css"

const FeedHead = () => {
  return (
    <>
      <section className='feedhead'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='UniFlow Feedback' title='Confused about a course or a professor?' />
            <p>Lookout peer feedback on courses and professors.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default FeedHead
