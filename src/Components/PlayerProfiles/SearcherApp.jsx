import { connect } from 'react-redux';
import Searcher from './Searcher';
import {loadAlphaSearch} from '../../Actions'
export default connect(
  (state) => {
    return{
        alphaSearch: state.alphaSearch
    }
  },(dispatch) => ({
    clickLetter: event => {
      let val = event.target.getAttribute('value')
      if (val !== null) loadAlphaSearch(dispatch,val)
    }
  })
)(Searcher)
