import React from 'react';
import PlayerApp from './PlayerApp';
import Carousel from './Partials/Carousel';
import Footer from './Partials/Footer';
import PlayerListApp from './PlayerListApp';
import '../styles/index.css';
const HomePage = ({onChange, query, player, savedPlayers}) => {

  return (
    <div className='bucket'>
      <Carousel/>
      <div className='playerSearchHeading'>
        <h1>
          Create Your Player Top</h1>
        <h5>
          Just Search and add</h5>
      </div>
      <hr></hr>
      <div className='d-flex'>
        <PlayerListApp players={savedPlayers}/>
        <div className="col-sm-2.5">
          <input className='form-control' placeholder='Search' onChange={onChange}></input>
          <div>
            {
              player.id
              ? <PlayerApp {...player} playerCount = {savedPlayers}/>
              : null
            }
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )

}
export default HomePage;
