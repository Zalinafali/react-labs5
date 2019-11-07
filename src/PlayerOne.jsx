import React from 'react'

class PlayerOne extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <p>
                    <label>Player One</label>
                </p>
                <p>
                    <label>Name {this.props.name}</label>
                </p>
                <p>
                    <label>Played number of times:</label>
                    <label>0</label>
                    <button type="button">Play</button>
                </p>
            </div>
        );
    }
}

export default PlayerOne