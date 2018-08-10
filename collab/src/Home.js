import React, {Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Editor from './Editor';
import Login from './Login';
class Home extends Component
{
	render()
	{
		return(

			<div>
				<Router>
			     <div>
			    
			     <Route exact path ='/login' component={Login}/>
			     <Route exact path='/aceEditor' component={Editor} />
			     </div>
			     </Router>
		
			  </div>

			  )
	}

}
export default Home;