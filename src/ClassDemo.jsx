import React from "react";

export class ColorChange extends React.Component{
    constructor(props) {
        super(props);
        this.state = props;
    }

    changeColor =
        () => {
            this.setState({favColor:"blue"})
        }

    render() {
        return (
            <>
                <h1>Colorchange class</h1>
                <p style={{color:this.state.favColor}}>My fav color is {this.state.favColor}</p>
                <button type={"button"} onClick={this.changeColor}>Change Color</button>
            </>
        );
    }
}