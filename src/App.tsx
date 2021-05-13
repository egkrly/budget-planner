import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header/index';
import HomePage from './pages/HomePage/index';

function App() {
  return (
	<Router>
		<div className="container">
			<Header></Header>
			<Switch>
				<Route path="/home">
					<HomePage></HomePage>
				</Route>
				<Route path="/">
					<HomePage></HomePage>
				</Route>
			</Switch>
		</div>
	</Router>
  );
}

export default App;
