import React from 'react';

const SavedCard = ({id,info,stats,removePlayer}) => (

      <div className="card savedP" key={id}>

       <img className="card-img-top" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png` } alt="Pulgares"/>
       <div className="card-block">
         <a href={`player/${id}`}>
         <h6 className="card-title">{info ? info.displayFirstLast :"--"}</h6>
           <div className="card-text">
             <ul>
               <li> pts: { stats ? stats.pts : "--"} </li>
               <li> Ast: {stats ? stats.ast : "--"}</li>
               <li> Reb: {stats ? stats.reb : "--"}</li>
               <li> Pie: {stats ? stats.pie : "--"}</li>
             </ul>
           </div>
         </a>
         <button className="btn btn-danger" onClick={removePlayer} data-player-id={id}> Remove </button>
       </div>
      </div>

)
export default SavedCard;
