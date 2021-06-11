import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './App.css';

const App = () => {
	return (
		<div>
			<Router>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/projects' component={Projects} />
				<Route exact path='/skills' component={Skills} />
				<Route exact path='/contact' component={Contact} />
			</Router>
		</div>
	);
};

export default App;
