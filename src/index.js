import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers';
import App  from './Components/App';
// import HomePageApp from './components/HomePageApp';
// import TeamProfile from './components/TeamProfile';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,document.getElementById('root')
  );


render();
store.subscribe(render);

// const render = () => ReactDOM.render(
//     <Provider store={store}>
//      <TeamProfile />
//     </Provider>,document.getElementById('root')
//   );
