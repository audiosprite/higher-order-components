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
            this.setState({input: event.target.value})
        }
        handSubmitWithStatefulReactComponent (event){
            event.preventDefault();
            const formInpupt = this.state.input;
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

const mapDispatchToProps = function(dispatch){
    return {
        handleSubmit: function(formInput){
            const artistSearch = {
                id: formInput,
                title: formInput
            }
            const action = lookForArtist(artistSearch);
            dispatch(action);
        }
    }
}

const statefulReduxComponentCreator = connect(null, mapDispatchToProps);

const StatefulForm = FormDecorator(form);
cont FormContainer = statefulReduxComponentCreator(StatefulForm);
export default FormContainer;

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