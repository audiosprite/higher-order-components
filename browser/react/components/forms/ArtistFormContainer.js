
import StatefulForm from './Form';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        
    }
};
 
const mapDispatchToProps = function(dispatch){
    return {
        handleSubmit: function(formInput){
            const artistSearch = {
                name: formInput
            }
            const action = lookForArtist(artistSearch);
            dispatch(action);
        }
    }
}

const statefulReduxComponentCreator = connect(null, mapDispatchToProps);
const ArtistFormContainer = statefulReduxComponentCreator(StatefulForm);
export default ArtistFormContainer;