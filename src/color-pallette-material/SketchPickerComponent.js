import React from 'react';
import { GithubPicker } from 'react-color';

class Component extends React.Component {
    state = {
        // White background by default
        background: '#fff'
    };

    // When the color is changed, this will fire and set the new color to state
    handleChangeComplete = (color, e) => {
        console.log(color)
        this.setState({ background: color.hex });
        console.log(this.focus)
        if (e.code === "Enter") {
            console.log('The color you picked is ', this.state.background)
        }
    };

    render() {
        return (
            <div>
                <GithubPicker
                    color={this.state.background}
                    onChangeComplete={this.handleChangeComplete}
                    tabIndex={'-1'}
                />
                <div style={
                    {
                        height: '50px',
                        width: '50px',
                        alignContent: 'center',
                        backgroundColor: this.state.background
                    }
                }>
                </div>
            </div>

        );
    }
}

export default Component;