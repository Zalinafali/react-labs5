import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component{

    render(){
        return(
            <div>
                <p>
                    <PlayerOne/>
                </p>
                <p>
                    <PlayerTwo/>
                </p>
                <p>
                    <p>
                        <label>Set name of Player One:</label>
                        <input type='text' id='one'/>
                    </p>
                    <p>
                        <label>Set name of Player Two:</label>
                        <input type='text' id='two'/>
                    </p>
                </p>
            </div>
        );
    }

}

export default GameAdmin