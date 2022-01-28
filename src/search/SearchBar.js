import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Navigation from "./../Navigation"
import { connect } from 'react-redux';
import CustomGoogleAutocomplete from './google/CustomGoogleAutocomplete';

class SearchBar extends React.Component {
    renderCustomAutocomplete = ({ label, meta, input, id }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <CustomGoogleAutocomplete input={input} meta={meta} id={id} />
            </div>
        );
    };

    onSubmit = (formvalues) => {
        // this makes the call to parent component App.js
        this.props.onSubmit(formvalues);
    };
    render() {
        return (
            <><Navigation/>

                <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <div>
                        <Field
                            name="search_field"
                            component={this.renderCustomAutocomplete}
                            label="Search for a city around the world"
                            placeholder="Search for a place in the world?"
                            id="search"
                        />
                    </div>
                </form>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};
SearchBar = connect(mapStateToProps)(SearchBar);

export default reduxForm({
    form: 'SearchForm'
})(SearchBar);
