import React, { useEffect, useState } from 'react';
import './FeedBack.css';

export default function FeedBack({ showFeedback,setShowFeedback }) {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [clzBtnVisible, setClzBtnVisible] = useState(false);


  useEffect(() => {
    if (showFeedback) {
      setTimeout(() => setSectionVisible(true),800);
    } else {
      setSectionVisible(false);
    }
  }, [showFeedback]);


  useEffect(() => {
    if (showFeedback) {
      setTimeout(() => setClzBtnVisible(true),2000);
    } else {
      setClzBtnVisible(false);
    }
  }, [showFeedback]);

  return (
    <>
      <div className={showFeedback ? 'FeedBack_body' : 'FeedBack_body_of'}>
        <div className={clzBtnVisible?"Clz_fedBk_btn":"Clz_fedBk_btn_off"}><button onClick={()=>setShowFeedback(false)}><i class="fa-solid fa-xmark"></i></button></div>
        <div className={sectionVisible ? 'feedback-section_open' : 'feedback-section'}>
          <h2 className='to_developer'>Feedback To The <mark>Developer</mark></h2>
          <form className="feedback-form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
