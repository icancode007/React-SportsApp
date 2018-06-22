import {
  SEARCH_FOR_PLAYER,
  SHOW_PLAYER_SEARCH_RESULT,
  SAVE_PLAYER,TOGGLE_VIEW,
  REMOVE_PLAYER,
  SHOW_TEAM_SEARCH_RESULT,
  SHOW_PLAYER_LIST,
  SHOW_TEAM_DATA,
  SHOW_PROFILE_PLAYER_DATA,
  SHOW_COMPARED_PLAYER_DATA,
  TOGGLE_COMPARE,
  SHOW_OPPOSITE_TEAM_DATA,
  LOAD_ALPHA_SEARCH_LIST
} from '../Actions';

const initialState = {
  query: '',
  playerSearchResult: {},
  savedPlayers: [],
  isDislayingAsRows:false,
  teamstats:[],
  teamId:'',
  teamRoster:[],
  teamStats:[],
  teamInfo:[],
  oppTeamRoster:[],
  playerProfileInfo: {},
  comparedPlayerInfo:{},
  isDisplayingCompareBox:false,
  alphaSearch:[]
}

export default(state = initialState, action ) => {
  switch (action.type) {
    case SEARCH_FOR_PLAYER:
      return {
        ...state,
        query: action.query
      };
    case SHOW_PLAYER_SEARCH_RESULT:
      return {
        ...state,
        playerSearchResult: {
          id: action.id,
          info: action.info,
          stats: action.stats
        }
      };
    case SHOW_TEAM_SEARCH_RESULT:
        return {
          ...state,
          teamstats:action.teamstats
        }
    case SAVE_PLAYER:
      return {
        ...state,
        savedPlayers: [
          ...state.savedPlayers,
          action.player
        ]
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        savedPlayers: state.savedPlayers.filter(player =>
           player.id !== parseInt(action.playerId, 10)
         )
      }
    case TOGGLE_VIEW:
      return{
        ...state,
        isDislayingAsRows: !state.isDislayingAsRows
      }
    case SHOW_PLAYER_LIST:
      return{
        ...state,
        teamRoster: action.data
      }
    case SHOW_TEAM_DATA:
      return{
        ...state,
        teamStats: action.teamData,
        teamInfo: action.teamSeason
        }
    case SHOW_OPPOSITE_TEAM_DATA:
      return {
        ...state,
        oppTeamRoster: action.oppteamData
      }
    case SHOW_PROFILE_PLAYER_DATA:
      return{
        ...state,
        playerProfileInfo:{
          info:action.infopl,
          stats:action.statspl
        }
      }
    case SHOW_COMPARED_PLAYER_DATA:
      return{
        ...state,
        comparedPlayerInfo:{
          info:action.infopl,
          stats:action.statspl,
          comparedid:action.playerIdent
        }
      }
    case TOGGLE_COMPARE:
      return{
        ...state,
        isDisplayingCompareBox: !state.isDisplayingCompareBox
      }
    case LOAD_ALPHA_SEARCH_LIST:
      return{
        ...state,
        alphaSearch: action.subList

      }
    default:
      return state;
    }
}
