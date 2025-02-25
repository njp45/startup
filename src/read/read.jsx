import React from 'react';
import './read.css';

export function Read() {
  return (
    <main className="container-fluid bg-white text-center">
      <div>
        <h2>[REACT NUMBER] Words written with Erasr</h2>
        <p>...and counting!</p>
      </div>
      <hr />
      <h1>[OTHER USERS' TEXT HERE]</h1>
      <div className="user-text">
        <p><i className="fa-solid fa-user lg"></i> username_01</p>
        <p style="margin-left: 1em">We the People of the United States, in Order to form a more perfect Union, establish
          Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure
          the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the
          United States of America. </p>
        <p style="margin-left: 1em">Article. I. Section. 1. All legislative Powers herein granted shall be vested in a
          Congress of the United States, which shall consist of a Senate and House of Representatives.</p>
      </div>
    </main>
  );
}