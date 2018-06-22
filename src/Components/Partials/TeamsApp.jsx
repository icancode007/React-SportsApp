import { connect } from 'react-redux';
import { searchForTeam } from '../../Actions';
import  Teams  from './Teams';

export default connect(
  (state) => {
    return({
    teamstats:state.teamstats
    })
  },(dispatch) => ({
      loadData: event => searchForTeam(dispatch)
  })
)(Teams)
