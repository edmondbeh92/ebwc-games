import React, { useState, useEffect } from 'react';

export const GameListTab = props => {

    const [gameId, setGameId] = useState(null);

    return (
        <button className='bg-color-three text-secondary text-left py-1 px-3' onClick={() => setGameId(props.id)}>
            {props.name}
        </button>
    )
}