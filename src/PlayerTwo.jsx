import React from 'react'

class PlayerTwo extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <p>
                    <label>Player Two</label>
                </p>
                <p>
                    <label>Name {this.props.name}</label>
                </p>
                <p>
                    <label>Played number of times:</label>
                    <label>0</label>
                    <button 
                        type="button" 
                        onClick={this.props.handler}
                        disabled={this.props.isActive ? "diasbled" : ""}
                    >
                        {this.props.isActive ? "This user is playing now" : "Play"}
                    </button>
                </p>
            </div>
        );
    }
}

export default PlayerTwo