import { connect } from 'react-redux';
import { removePlayer } from '../Actions';
import  SavedRow  from './SavedRow';


export default connect(
  null,
  (dispatch) => ({
      removePlayer: event => dispatch(removePlayer(event.target.dataset.playerId))
  })
)(SavedRow)
