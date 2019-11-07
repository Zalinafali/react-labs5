import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {oneName: '', twoName: ''};
      } 

    render(){
        return(
            <div>
                <p>
                    <PlayerOne name = {this.state.oneName}/>
                </p>
                <p>
                    <PlayerTwo name = {this.state.twoName}/>
                </p>
                <p>
                    <p>
                        <label>Set name of Player One:</label>
                        <input type='text' 
                            id='one'
                            value={this.state.one} 
                            onChange={e => this.setState({oneName: e.target.value})}
                        />
                    </p>
                    <p>
                        <label>Set name of Player Two:</label>
                        <input type='text' 
                            id='two' 
                            value={this.state.two} 
                            onChange={e => this.setState({twoName: e.target.value})}/>
                    </p>
                </p>
            </div>
        );
    }

}

export default GameAdmin