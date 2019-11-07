import React from 'react'

class PlayerOne extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
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
                    <label>{this.state.counter}</label>
                    <button 
                        type="button" 
                        onClick={() => {
                            this.props.handler();
                            this.setState(oldstate => ({
                                counter: oldstate.counter + 1
                            }));
                        }}
                        disabled={this.props.isActive ? "diasbled" : ""}
                    >
                        {this.props.isActive ? "This user is playing now" : "Play"}
                    </button>
                </p>
            </div>
        );
    }
}

export default PlayerOne