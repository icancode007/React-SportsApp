import React, { Component } from 'react';
import Profile from './Profile';
import Footer from '../Partials/Footer'
import SearcherApp from './SearcherApp';
class PlayerProfile extends Component{

componentDidMount(){
  let playerId = this.props.match.params.id;
    this.props.serveId(playerId)
    //let playerId = async this.props.match.params.id;

}

render(){
  let profileInfo = this.props.PlayerProfileInfo || {};
  let seasons = profileInfo.info || [];
  let totals = profileInfo.stats || [];
  let playerprofileimgurl = this.props.match.params.id;
  let comparedInfo = this.props.ComparedPlayerInfo || {};
  let comparedPlayerSeasons = comparedInfo.info || [];
  let comparedPlayerTotals = comparedInfo.stats || [];
  let comparedPlayerimgid = comparedInfo.comparedid;
  let toggleIt = this.props.isDisplayingCompareBox;
  return(
      <div className="divProfile">
        <div className=" container titleCont">
          <SearcherApp/>
          <h3> Player Stats</h3>
        </div>
          <div className="row">
            <div className="container">
                <Profile totals={totals} seasons={seasons} playerId ={playerprofileimgurl} />
                <div className="col">
                <button className="btn btn-danger" onClick={this.props.toggleCompareField} style={{"width":"inherit","fontFamily":"inherit" }} >
                  Compare With Other Players
                </button>
              </div>
                {toggleIt ?
                  <div className="card PlayerProfilecontainer">
                    <img className="card-img-top comparePlayerIcon" src={require('../../styles/compareplayer.png') } alt="Pulgares"/>
                      <div className="card-text">
                        <input className="form-control compareInput" placeholder="Search Player" onKeyPress={this.props.onEnter}></input>
                    </div>
                  </div>
                    : <div></div>
                  }
                  {
                  comparedPlayerSeasons.length > 0 ?
                    <div >
                      <Profile totals={comparedPlayerTotals} seasons={comparedPlayerSeasons} playerId = {comparedPlayerimgid} />
                    </div> : <div></div>
                }
            </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

    )
  }
}
export default PlayerProfile;
