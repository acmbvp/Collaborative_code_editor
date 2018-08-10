import React, {Component} from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';
class Editor extends Component
{
	render()
	{
		return(
			<div>
			<h1> Collaborative Editor </h1>
			<h3> A workplace for you </h3>
			<AceEditor
			mode='java'
			theme='github'
			/>
			</div>
			)
	}

}
export default Editor;