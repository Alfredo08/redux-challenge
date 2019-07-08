import React from 'react';
import {connect} from 'react-redux';

import {changeName} from '../actions';

export class NameForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        console.log(this.props);
        this.props.dispatch(
            changeName(this.firstNameInput.value, this.lastNameInput.value)
        );
        e.target.reset();
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        ref={input => (this.firstNameInput = input)}
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        ref={input => (this.lastNameInput = input)}
                    />
                    <button>Submit</button>
                </form>
                <h1> Hello there {this.props.firstName} {this.props.lastName}</h1>
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => ({
    firstName: state.firstName,
    lastName : state.lastName
});


export default connect(mapStateToProps)(NameForm);
