import React from 'react';
import "./Loading_skeleton.css";

export default function Loading_skeleton() {
  return (
    <>
      <div className="Word">
        <h2 className="Word_skeleton loading"><sup className="Sup_word"></sup></h2>
      </div>
      <div className="parent">
        <fieldset>
          <legend>Meaning <span className="skeleton_Index_histoy loading">Hook</span></legend>
          <div className="content-wrapper">
            <button className="nav-button disabled loading" disabled>❮</button>
            <div className="content-div">
              <p className="Disable_meaning loading">_____________</p>
            </div>
            <button className="nav-button disabled loading" disabled>❯</button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Synonyms <span className="skeleton_Index_histoy loading">Hook</span></legend>
          <div className="content-wrapper">
            <button className="nav-button disabled loading" disabled>❮</button>
            <div className="content-div">
              <p className="Disable_meaning loading">_____________</p>
            </div>
            <button className="nav-button disabled loading" disabled>❯</button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Antonyms <span className="skeleton_Index_histoy loading">Hook</span></legend>
          <div className="content-wrapper">
            <button className="nav-button disabled loading" disabled>❮</button>
            <div className="content-div">
              <p className="Disable_meaning loading">_____________</p>
            </div>
            <button className="nav-button disabled loading" disabled>❯</button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Examples <span className="skeleton_Index_histoy loading">Hook</span></legend>
          <div className="content-wrapper">
            <button className="nav-button disabled loading" disabled>❮</button>
            <div className="content-div">
              <p className="Disable_meaning loading">_____________</p>
            </div>
            <button className="nav-button disabled loading" disabled>❯</button>
          </div>
        </fieldset>
      </div>
    </>
  );
}
