import React from 'react';
import { SketchPicker } from 'react-color';

class Component extends React.Component {
    state = {
        // White background by default
        background: '#fff'
    };

    // When the color is changed, this will fire and set the new color to state
    handleChangeComplete = (color) => {
        console.log(color.hex)
        this.setState({ background: color.hex });
    };

    render() {
        return <SketchPicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
        />;
    }
}

export default Component;