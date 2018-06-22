import { connect } from 'react-redux';
import { toggleView } from '../actions';
import  PlayerList  from './PlayerList';

export default connect(
  (state) => {
    return({
      teamId:state.teamId,
      teamRoster:state.teamRoster
    })
  },(dispatch) => ({

  })
)(PlayerList)
