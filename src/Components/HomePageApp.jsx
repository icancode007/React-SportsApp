import { connect } from 'react-redux';
import { searchForPlayer, toggleView } from '../Actions';
import  HomePage  from './HomePage';

export default connect(
  (state) => {
    return({
      query: state.query,
      player: state.playerSearchResult,
      savedPlayers: state.savedPlayers,
      isDislayingAsRows:state.isDislayingAsRows
    })
  },(dispatch) => ({
      onChange: event => dispatch(searchForPlayer(dispatch,event.target.value)),
      onClick: event => dispatch(toggleView())
  })
)(HomePage)
