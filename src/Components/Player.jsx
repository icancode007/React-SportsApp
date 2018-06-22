import React from 'react';

const Player= ({onClick, id, info, stats ,playerCount})=>(

    <div className="card searchIn">
     <img className="card-img-top" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png` } alt="Pulgares"/>
     <div className="card-block">
       <h4 className="card-title">{info.displayFirstLast}</h4>
       <div className="card-text">
       </div>
       <button className="btn btn-primary" onClick={() => onClick({id, info, stats},playerCount)}> Add </button>
     </div>
  </div>
)
export default Player;
