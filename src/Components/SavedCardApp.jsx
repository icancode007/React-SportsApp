import { connect } from 'react-redux';
import { removePlayer } from '../Actions';
import  SavedCard  from './SavedCard';

export default connect(
  (state) => {
    return({
      query: state.query,
      player: state.playerSearchResult,
      savedPlayers: state.savedPlayers,
      isDislayingAsRows:state.isDislayingAsRows
    })
  },(dispatch) => ({

      removePlayer: event => dispatch(removePlayer(event.target.dataset.playerId))
  })
)(SavedCard)
