import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component
{
	render()
	{
		return(

			<div>
				 <h1>Home</h1>
			      <br />
			      <Link to="/login">Login Here </Link>
			      <br />
			      <Link to="/aceEditor">Welcome to Ace Editor </Link>
		
			  </div>

			  )
	}

}
export default Home;