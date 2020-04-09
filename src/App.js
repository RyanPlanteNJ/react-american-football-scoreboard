//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homepoints, setHomePoints] = useState(0);
  const hometouchdown = e => {
    setHomePoints(homepoints + 7);
  };
  const homegoal = e => {
    setHomePoints(homepoints + 3);
  };
  const [awaypoints, setAwayPoints] = useState(0);
  const awaytouchdown = e => {
    setAwayPoints(awaypoints + 7);
  };
  const awaygoal = e => {
    setAwayPoints(awaypoints + 3);
  };

  const [quarter, setQuarter] = useState(1);
  const qrtr = e => {
    (quarter < 4) ? setQuarter(quarter + 1) : setQuarter(1);
  };

  const [down, setDown] = useState(1);
  const dwn = e => {
    (down < 4) ? setDown(down + 1) : setDown(1);
  };

  const [togo,setToGo] = useState(10);
  const ToGo = e => {
    (togo > 1) ? setToGo(togo - 1) : setToGo(10);
  };

  const [ballon,setBallOn] = useState(0);
  const BallOn = e => {
    (ballon < 100) ? setBallOn(ballon + 1) : setBallOn(0);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homepoints}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awaypoints}</div>
          </div>
        </div>
        <BottomRow qrtr = {qrtr} quarter = {quarter} dwn = {dwn} down = {down} ToGo = {ToGo} togo = {togo} BallOn = {BallOn} ballon = {ballon}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={hometouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homegoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awaytouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awaygoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
