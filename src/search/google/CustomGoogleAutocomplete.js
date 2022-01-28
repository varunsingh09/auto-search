import React from 'react';

class CustomGoogleAutocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.onAddressChange = this.onAddressChange.bind(this);
        this.autocomplete = null;
    }

    componentDidMount() {
        this.autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById(this.props.id),
            { types: ['geocode'] }
        );
        this.autocomplete.addListener('place_changed', this.onAddressChange);
    }

    initialState() {
        return {
            formatted_address: ''
        };
    }

    onAddressChange(address) {
        const { input } = this.props;
        const { onChange } = input;
        let addressObject = this.autocomplete.getPlace();
        this.setState({
            formatted_address: addressObject.formatted_address
        });
        onChange(this.state.formatted_address);
    }

    render() {
        const input = {
            type: 'search',
            value: this.state.formatted_address,
            onchange: this.onAddressChange
        };
        return (
            <div>
                <input
                    id={this.props.id}
                    autoComplete="off"
                    placeholder="Enter City Name"
                    input={input}
                />
            </div>
        );
    }
}

export default CustomGoogleAutocomplete;
