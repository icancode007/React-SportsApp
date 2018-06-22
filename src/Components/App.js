import React  from 'react';
import NavBar from './Partials/NavBar';
import TeamsApp from './Partials/TeamsApp';
import HomePageApp from './HomePageApp';
import TeamProfileApp from './TeamProfiles/TeamProfileApp';
import PlayerProfileApp from './PlayerProfiles/PlayerProfileApp';

import {BrowserRouter,Switch, Route} from 'react-router-dom';

const App = ()=>(
    <BrowserRouter>
      <div>
          <NavBar />
          <TeamsApp />
          <Switch>
            <Route path="/" component={HomePageApp} exact />
            <Route path="/team/:id" component={TeamProfileApp} exact />
            <Route path="/player/:id" component={PlayerProfileApp} exact />
          </Switch>
      </div>
    </BrowserRouter>
)
export default App;
