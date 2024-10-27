import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Dic_Body_MediaQureis.css';
import './Dic_Body.css';
import { Dic_Body_Content } from "./Dic_content_body.jsx";
import Footer from './Footer.jsx';
import FeedBack from './FeedBack.jsx';
import AboutMe from './AboutMe.jsx';

export default function Dic_Body() {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('ctrl+s');
  const inputRef = useRef(null);
  let [showFeedback,setShowFeedback]=useState(false)
  let [showAboutMe,setShowAboutMe]=useState(false)


  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleSearch = () => {
    if (word) {
      setLoading(true);
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
          setData(response.data[0]);
          setError("");
          setLoading(false);
        })
        .catch(error => {
          setError(word);
          setData(null);
          setLoading(false);
        });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleShortcutKey = (event) => {
    if (event.ctrlKey && event.key === 'x') {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setPlaceholder('Search for Word');
  };

  const handleBlur = () => {
    setPlaceholder('ctrl+s');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleShortcutKey);
    return () => {
      window.removeEventListener('keydown', handleShortcutKey);
    };
  }, []);


  const handleReload = ()=>{
    window.location.reload()
  }
  return (
    <>
      <header>
        <div className="logo">
          <h1 className="Dictionary_text" ><span onClick={handleReload} style={{cursor:"pointer"}}>Dictionary.</span ><sup  className="dotEng" style={{cursor:"pointer"}} onClick={handleReload}><u>eng</u></sup></h1>
        </div>
      </header>

      <nav>
        <div className="input_box">
          <div className="SearchIcon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="Input">
            <input
              ref={inputRef}
              type="search"
              placeholder={placeholder}
              value={word}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <button className="noselect goBtn" onClick={handleSearch}>Go</button>
        </div>
      </nav>

      <Dic_Body_Content data={data} loading={loading} error={error} />
      <Footer setShowFeedback={setShowFeedback} setShowAboutMe={setShowAboutMe}  />
      <FeedBack showFeedback={showFeedback} setShowFeedback={setShowFeedback}/>
      <AboutMe  showAboutMe={showAboutMe} setShowAboutMe={setShowAboutMe} />

    </>
  );
}
