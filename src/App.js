import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './Home';
import Editor from './Editor';
import Login from './Login';

class App extends Component {
  render() {
    return (
        <Router>
		     <div>
		         <Route exact path ='/' component={Home}/>
			     <Route exact path ='/login' component={Login}/>
			     <Route exact path='/aceEditor' component={Editor} />
		     </div>
	     </Router>
    );
  }
}

export default App;

