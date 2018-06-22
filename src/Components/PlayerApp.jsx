import { connect } from 'react-redux';
import { savePlayer } from '../Actions';
import  Player  from './Player';
//ES LINT Code Cleaner
export default connect(
  (state) => {
    return({
    savedPlayers:state.savedPlayers
    })
  },
  (dispatch) => ({
      onClick: (player,playerCount) => {
        if (playerCount.length <= 4){
          dispatch(savePlayer(player))
        }
        else {
          alert("Remember to create pop-up message for not authenthicated user and a sign up pop for non authenthicated");
        }
      }
  })
)(Player)
