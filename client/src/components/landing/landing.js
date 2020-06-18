import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './landing.scss';

export default function landing() {
  return (
    <div className="landing">
      <Link to="#lock">
        <img src={require('./lock.png')} className="landingImg" />
      </Link>
      <Link to="#clock">
        <img src={require("./clock.png")} className="landingImg" />
      </Link>
      <Link to="#speed">
        <img src={require("./speed.png")} className="landingImg" />
      </Link>
      <Link to="#freedom">
        <img src={require("./freedom.png")} className="landingImg" />
      </Link>
      <br />
      <button onClick={event =>  window.location.href='/connect'}>
        Connect.
      </button>
      <hr />
      <div id="lock" class="lock">
        <img src={require("./lock.png")} align="left" className="Maina" />
        <h1>End-to-end encrypted.</h1>
        <p>
          End-to-end encryption is intended to prevent data being read or secretly modified, other than by the true sender and recipient(s).
          <br /><br />
          The messages are encrypted by the sender but the third party does not have a means to decrypt them, and stores them encrypted.
        </p>
      </div>
      <hr />
      <div id="clock" class="clock">
        <img src={require("./clock.png")} align="right" className="Maina" />
        <h1>Instant temporary messaging.</h1>
        <p>
          Private messaging with no databases or logs.<br /><br />
          Self clear on page reload.<br /><br />
          Append only new messages.<br /><br />
        </p>
      </div>
      <hr />
      <div id="speed" class="speed">
        <img src={require("./speed.png")} align="left" className="Maina" />
        <h1>Fast, insured delivery.</h1>
        <p>
          Bi-directional communication between web clients and servers.<br /><br />
          Guaranteed delivery with wait queue.<br /><br />
          Real time push and pull.<br /><br />
        </p>
      </div>
      <hr />
      <div id="freedom" class="freedom">
        <img src={require("./freedom.png")} align="right" className="Maina" />
        <h1>Freedom.</h1>
        <p>
          No typing restrictions.<br /><br />
          Share pictures and files.<br /><br />
          Temporary storage with one time download.<br /><br />
        </p>
      </div>
      <hr />
    </div>
  );
}
