import React, {component} from 'react';


class ErrorBoundry extends component {
	constructor (props){
		super(props);
		this.state ={
			hasError: false
		}

	}
componentDidCatch (error, info){
	this.setState({hasError: true})
}

	render () {
		if (this.state.hasError) {
			return <h1>Ooops</h1>
		}
		return this.porps.children;
	}
}

export default ErrorBoundry;