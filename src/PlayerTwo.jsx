import React from 'react'

class PlayerTwo extends React.Component{
    render(){
        return(
            <div>
                <p>
                    <label>Player Two</label>
                </p>
                <p>
                    <label>Name</label>
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

export default PlayerTwo