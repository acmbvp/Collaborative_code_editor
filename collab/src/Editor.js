import React, {Component} from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';
import Fire from './Fire';

var database = Fire.database();

class Editor extends Component
{
  constructor(props)
  {
    super(props);

    this.state ={
    	code : ""
    }
  }

componentDidMount()
{
	database.ref('/code').on('value',function(snapshot){
    	
    	let val = snapshot.val();
    	console.log(val);
    	this.setState({
    		code:val
    	})
    	
    })
	
}
	handlechange(newValue)
    {
    
    database.ref('/code').set(newValue);
      
      }
	render()
	{
		return(
			<div>
			<h1> Collaborative Editor </h1>
			<h3> A workplace for you </h3>
			<AceEditor
			mode='java'
			theme='github'
			value = {this.state.code}
			onChange={(data)=>this.handlechange(data)}
		    name="UNIQUE_ID_OF_DIV"
		    editorProps={{$blockScrolling: true}}
			/>

			</div>
			)
	}

}
export default Editor;