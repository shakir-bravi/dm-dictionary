import React, { useEffect, useState } from 'react';
// import './FeedBack.css';
import "./AboutMe.css";
// import myImg from "./images/myIamge.jpg"
// import coding from "./images/coding.jpg"
// import writer from "./images/writer.jpg";
import handShake from "./images/handshake.gif";
import TypingAnimator from 'react-typing-animator';


export default function AboutMe({ showAboutMe,setShowAboutMe }) {
  const [sectionVisibleAbout, setSectionVisibleAbout] = useState(false);
  const [clzBtnVisibleAbout, setClzBtnVisibleAbout] = useState(false);
  const [more,setMore] = useState(false);
  const textArray = ["Frontend", "& Backend" , "The MERN Stack"];
const longtext= ["As a passionate MERN Full Stack Developer, I bring a rich blend of creativity and technical expertise to every project I undertake. With a strong foundation in building dynamic and responsive web applications, my 1.5 years of dedicated experience in the field empower me to craft innovative solutions that elevate user experiences. My commitment to continuous learning and staying updated with the latest industry trends ensures that I deliver high-quality, scalable, and efficient web applications that meet and exceed client expectations."]

  useEffect(() => {
    if (showAboutMe) {
      setTimeout(() => setSectionVisibleAbout(true),800);
    } else {
      setSectionVisibleAbout(false);
    }
  }, [showAboutMe]);


  useEffect(() => {
    if (showAboutMe) {
      setTimeout(() => setClzBtnVisibleAbout(true),2000);
    } else {
      setClzBtnVisibleAbout(false);
    }
  }, [showAboutMe]);

  return (
    <>
      <div className={showAboutMe ? 'FeedBack_body_About' : 'FeedBack_body_of_About'}>
        <div className={clzBtnVisibleAbout?"Clz_fedBk_btn":"Clz_fedBk_btn_off"}><button onClick={()=>setShowAboutMe(false)}><i class="fa-solid fa-xmark"></i></button></div>
        <div className={sectionVisibleAbout ? 'feedback-section_open_About' : 'feedback-section_About'}>





<div className="about_Header">
<div className="social-media">
  <div className="a">
  <a href="#">
    <i className="fab fa-facebook-f" />
  </a>
  </div>

  <div className="a">
  <a href="#">
    <i className="fab fa-github" />
  </a>
  </div>

  <div className="a">
  <a href="#">
    <i className="fab fa-instagram" />
  </a>
  </div>

  <div className="a">
  <a href="#">
    <i className="fab fa-linkedin-in" />
  </a>
  </div>

  <div className="a">
  <a href="#">
    <i className="fab fa-twitter" />
  </a>
  </div>





</div>

</div>


<div className="_about_Body">

<div className="left_about">
<div className="My_img_about">
  {/* <img src={myImg} alt="Developer Image" /> */}
</div>
<div className="Visit_portfolio"><a href="">Visit Portfolio</a></div>

</div>
<div className="right_about">

<div className="hi">
  <h3>Hi there, <br />I'm</h3>
  <img src={handShake} alt="Hand Shake GIF" />
</div>

<div className="Dost_m">
<h1>Dost Muhammad</h1>
</div>
<div className="MERN_stack">
  <div className="mern">
<TypingAnimator
      textArray={textArray}
      cursorColor="rgba(88, 196, 220, 1)"
      textColor="white"
      fontSize="1.6em"
      loop
      typingSpeed={40}
      delaySpeed={2000}
      backspace
      height="60px"
    />
      <h1>  Developer</h1>

    </div>


</div>


<div className="more_about_ME">
{/* <button>more</button> */}

<button className={more?"morebtn_hide":"morebtn"} onClick={()=> setMore(!more)}>  more... </button>
{
  more &&
<div className="moretext">

<TypingAnimator
      textArray={longtext}
      cursorColor="rgba(88, 196, 220, 1)"
      textColor=" white"
      fontSize="1.4em"
      loop ={true}
      typingSpeed={40}


      delaySpeed={20000000}
      backspace
      height="60px"
    />
</div>
}






</div>

</div>





</div>


<div className="about_body_small_scrn">

<div className="about_sml_scrn_img">
</div>
<div className="Visit_portfolio"><a href="">Visit Portfolio</a></div>


<div className="hi_sml_src">
  <h3>Hi there, <br />I'm</h3>
  <img src={handShake} alt="Hand Shake GIF" />
</div>

<div className="Dost_m_sml_scr">
<h1>Dost Muhammad</h1>
</div>

<div className="MERN_stack">
  <div className="mern mern_sml_scr">
<TypingAnimator
      textArray={textArray}
      cursorColor="rgba(88, 196, 220, 1)"
      textColor="white"
      fontSize="1.6em"
      loop
      typingSpeed={40}
      delaySpeed={2000}
      backspace
      height="60px"
    />
      <h1>  Developer</h1>

    </div>


</div>


</div>

<div className="About_footer">
  <center>~Thanks For Visiting My site.</center>
</div>










        </div>
      </div>
    </>
  );
}
