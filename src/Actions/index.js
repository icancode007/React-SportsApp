import NBA from 'nba';
export const SEARCH_FOR_PLAYER = 'SEARCH_FOR_PLAYER';
export const SHOW_PLAYER_SEARCH_RESULT='SHOW_PLAYER_SEARCH_RESULT';
export const SHOW_TEAM_SEARCH_RESULT='SHOW_TEAM_SEARCH_RESULT';
export const SAVE_PLAYER = 'SAVE_PLAYER';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const LOAD_PLAYER_LIST = 'LOAD_PLAYER_LIST';
export const SHOW_PLAYER_LIST = 'SHOW_PLAYER_LIST';
export const SHOW_COMPARED_PLAYER_DATA = 'SHOW_COMPARED_PLAYER_DATA';
export const SHOW_PROFILE_PLAYER_DATA = 'SHOW_PROFILE_PLAYER_DATA';
export const TOGGLE_COMPARE = 'TOGGLE_COMPARE';
export const SHOW_TEAM_DATA = 'SHOW_TEAM_DATA';
export const SHOW_OPPOSITE_TEAM_DATA = 'SHOW_OPPOSITE_TEAM_DATA';
export const LOAD_ALPHA_SEARCH_LIST = 'LOAD_ALPHA_SEARCH_LIST';

//NAVBAR TEAM STATS
export const searchForTeam = (dispatch) => {
  console.log(NBA);
  NBA.stats.teamStats().then(function(resp){
    dispatch(showTeamSearchResult(resp))
  })
}
export const showTeamSearchResult = (teamstats) => ({
  type:SHOW_TEAM_SEARCH_RESULT,
  teamstats
})

//PLAYER SEARCH
export const searchForPlayer = (dispatch, query) => {
  nbaApi(dispatch,query)
  return({
    type:SEARCH_FOR_PLAYER,
    query
  })
}
const nbaApi = (dispatch, searchString) =>{
  let player = NBA.findPlayer(searchString)
  if (player) {
    let playerId = player.playerId
    NBA.stats.playerInfo({PlayerID: playerId}).then(function(data){
      dispatch(showPlayerSearchResult(playerId, data.commonPlayerInfo[0], data.playerHeadlineStats[0]))
    })
  }
}
export const showPlayerSearchResult = (id, info, stats)=>({
  type:SHOW_PLAYER_SEARCH_RESULT,
  id,
  info,
  stats
})

//SAVE_PLAYER
export const savePlayer = (player) => ({
  type:SAVE_PLAYER,
  player
})
//REMOVE_PLAYER
export const removePlayer= (playerId)=> ({
  type:REMOVE_PLAYER,
  playerId
})

//TOGGLE ROW/Column
export const toggleView = ()=> ({
  type:TOGGLE_VIEW
})

//TEAM ROSTERS
export const loadPlayerList  = (dispatch,teamId) => {
  nbaRosterList(dispatch,teamId)
  return({
    type:LOAD_PLAYER_LIST
  })
}

const nbaRosterList = (dispatch,team) => {
  NBA.stats.commonTeamRoster({TeamID: team}).then(function(roster){
      const playerIds = roster.commonTeamRoster.map(player => player.playerId);
      Promise.all(playerArr(playerIds)).then(data =>{
        objArr(data)
        dispatch(showPlayerList(dataContainer)
      )})
        //await Promise.all(playerArr(playerIds))
        //const data = await Promise.all(playerArr(playerIds))
        //wrap it in a try catch

  })
  const playerArr = (arrOfIds) => {
    let statsPromises = arrOfIds.map( item => NBA.stats.playerInfo({PlayerID: item}))
    return statsPromises;
  }
  let dataContainer = []
  const objArr = data => {
    data.forEach(item =>{ let obj = {id:item.commonPlayerInfo[0].personId,info:item.commonPlayerInfo[0],stats:item.playerHeadlineStats[0]}
      dataContainer.push(obj)
    })
  }
}

export const showPlayerList = (data) =>{
  return({
    type:SHOW_PLAYER_LIST,
    data
  })
}
//GET TEAM'S INFO
export const getTeamInfo = (dispatch,teamid) => {
  NBA.stats.teamInfoCommon({TeamID:teamid}).then(res => {
    dispatch(shoveTeamData(res.teamInfoCommon[0],res.teamSeasonRanks[0]))
  })
}
export const shoveTeamData = (teamData,teamSeason)=>({
    type:SHOW_TEAM_DATA,
    teamData,
    teamSeason
})
//GET OPPOSITE TEAM'S INFO

export const getOppsiteTeamRoster = (dispatch,team) => {
  NBA.stats.commonTeamRoster({TeamID: team}).then(function(roster){
      const playerIds = roster.commonTeamRoster.map(player => player.playerId);
      Promise.all(playerArr(playerIds)).then(data =>{
        objArr(data)
        dispatch(ShoveOppTeamData(dataContainer))})
  })
  const playerArr = (arrOfIds) => {
    let statsPromises = arrOfIds.map( item => NBA.stats.playerInfo({PlayerID: item}))
    return statsPromises;
  }
  let dataContainer = []
  const objArr = data => {
    data.forEach(item =>{ let obj = {id:item.commonPlayerInfo[0].personId,info:item.commonPlayerInfo[0],stats:item.playerHeadlineStats[0]}
      dataContainer.push(obj)
    })
  }
}
export const ShoveOppTeamData = (oppteamData)=>({
  type:SHOW_OPPOSITE_TEAM_DATA,
  oppteamData
})
//PLAYER SEASONS AND HIGHLIGHTS
export const getProfilePlayerData = (dispatch,id) => {
    NBA.stats.playerProfile({PlayerID:id}).then(function(response){
        dispatch(showProfilePlayerData(response.seasonTotalsRegularSeason,response.careerTotalsRegularSeason))
    })
  }

export const showProfilePlayerData = (infopl, statspl)=>({
  type:SHOW_PROFILE_PLAYER_DATA,
  infopl,
  statspl
})

export const getComparedPlayeData = (dispatch,query) => {
  let player = NBA.findPlayer(query)
  if(player){
    NBA.stats.playerProfile({PlayerID:player.playerId}).then(function(response){
      dispatch(showComparedPlayerData(response.seasonTotalsRegularSeason,response.careerTotalsRegularSeason,player.playerId))
    })
  }
}

export const showComparedPlayerData = (infopl,statspl,playerIdent) => ({
  type:SHOW_COMPARED_PLAYER_DATA,
  infopl,
  statspl,
  playerIdent
})

export const toggleCompare = () => ({
  type:TOGGLE_COMPARE
})
//PLAYERS ALPHABET SEARCH LIST
export const loadAlphaSearch = (dispatch,alphaCharacter) => {
  let allPlayersList = NBA.players;
  let response = allPlayersList.filter(playersSubList => playersSubList.lastName.charAt(0) === alphaCharacter.toUpperCase());
  console.log(response)
  dispatch(listOutAlphaSelect(response));
}
export const listOutAlphaSelect = (subList) => ({
  type:LOAD_ALPHA_SEARCH_LIST,
  subList
})
