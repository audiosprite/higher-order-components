import React from 'react';
import { connect } from 'react-redux';


class Form extends React.Component {
 render () {
   return (
     <form className="form-group" onSubmit={this.props.handleSubmit}>
       <label htmlFor="post">Search Artists:</label>
       <input className="form-control" name="post" type="text" onChange={this.props.handleChange} />
       <button type="submit" className="btn btn-default">Post</button>
     </form>
   )
 }
}

function FormDecorator (InnerComponent){
    return class StatefulForm extends React.Component{
        constructor(props){
            super(props);
            this.state={input: ''}
            this.handleChange = this.handleChange.bind(this);
            this.handSubmitWithStatefulReactComponent = this.handSubmitWithStatefulReactComponent.bind(this);
        }
        handleChange (event){
            console.log('event', event.target.value);
            this.setState({input: event.target.value});
            console.log('state', this.state.input);
            
        }
        handSubmitWithStatefulReactComponent (event){
            event.preventDefault();
            const formInput = this.state.input;
            this.props.handleSubmit(formInput);
        }

        render(){
            return (
                <InnerComponent 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            )
        }
    }
}





const StatefulForm = FormDecorator(Form);
export default StatefulForm;


//making a POST with fetch

// return fetch('/api/playlists', {
//     method: 'POST',
//     body: JSON.stringify(someData),
//     headers: new Headers({
//         'Content-Type': 'application/json'
//     })
// })
// .then(res => res.json())
// .then(playlist => console.log(playlist))