import React, { useState } from 'react';
import "./footer.css"

export default function Footer({setShowFeedback,setShowAboutMe}) {
  let [showFooter,setshowFooter]=useState(true)
  return (
    <>
    <footer>

<div className="Footer_SorH_btn">
  <button onClick={()=>setshowFooter(!showFooter)}>{showFooter?<span>Hide Footer</span>:<span>Show Footer</span>}</button></div>

<div className={showFooter?"_footer_show":"_footer"}>


<div className="about_Developer">
<button onClick={()=>setShowAboutMe(true)}>About Developer</button>
</div>
<div className="feedback"> <button onClick={()=>setShowFeedback(true)}>FeedBack</button></div>
<div className="github"><a href=""><i class="fa-brands fa-square-github"></i></a></div>



</div>


    </footer>









    </>

  )
}
