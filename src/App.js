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
        <BottomRow />
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
