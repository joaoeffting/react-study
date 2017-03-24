import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Todo from './components/TodoList/';
import './index.css';
import './assets/footer.css';

ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Todo} />
        </Route>
    </Router>,
  document.getElementById('root')
);
