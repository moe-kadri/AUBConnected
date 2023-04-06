import React, { useState } from "react";
import Heading from "../../heading/Heading";
import "./style.css";

const Faq = () => {
  const [faqData, setFaqData] = useState([
    { question: "When does Fall 2023-2024 registration start?", answer: "Registration starts on April 17th." },
    { question: "What if I loose the course while trading?", answer: "This can never happen." },
    { question: "Is my feedback private?", answer: "Yes, you can either make your feedback anonymous or not." },
    { question: "Who developed UniFlow", answer: "A group of 4 computer science students at AUB." },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq">
      <Heading title="Frequently Asked Questions" />
      {faqData.map((faq, index) => (
        <div className="faq__item" key={index}>
          <div className="faq__question" onClick={() => handleQuestionClick(index)}>
            {faq.question}
            {activeIndex === index ? <span className="faq__arrow">&#x25B2;</span> : <span className="faq__arrow">&#x25BC;</span>}
          </div>
          {activeIndex === index && <div className="faq__answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
