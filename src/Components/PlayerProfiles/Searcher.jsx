import React from 'react';
const Searcher = ({clickLetter, alphaSearch}) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return(
    <div>
      <div id="alphabetOrder" onClick={clickLetter}>
        <div className='col'>
          <div className='d-flex justify-content-between'>
          {
             alphabet.map((letter,index)=>{
               return(
                <div className='p-2' key={index} value={letter} id="alphaOrder">
                  {letter}
                </div>
                )
              })
          }
        </div>
        </div>
      </div>
      <div className='container'>
        <div className='d-flex flex-wrap' id='searchContent'>
              {
                alphaSearch.length > 0 ?
                  alphaSearch.map((player,index)=>{
                      return(
                          <a className = "p-2 btn btn-secondary" href={`/player/${player.playerId}`} key={index} >
                            {player.firstName} {player.lastName}
                          </a>
                      )
                    }
                  ) : <p> Nothing yet</p>
              }
        </div>
      </div>

    </div>
      )
}
export default Searcher;
