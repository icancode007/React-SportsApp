import { connect } from 'react-redux';
import { getProfilePlayerData,getComparedPlayeData,toggleCompare} from '../../Actions'
import  PlayerProfile from './PlayerProfile';

export default connect(
  (state) => {
    return {
      PlayerProfileInfo: state.playerProfileInfo,
      ComparedPlayerInfo: state.comparedPlayerInfo,
      isDisplayingCompareBox: state.isDisplayingCompareBox
    };
  },(dispatch) => ({
    serveId: id => getProfilePlayerData(dispatch,id),
    onEnter: event => {
      if(event.key === 'Enter'){
        getComparedPlayeData(dispatch,event.target.value)
      }
    },
    toggleCompareField: event => dispatch(toggleCompare())
  })
)(PlayerProfile)
