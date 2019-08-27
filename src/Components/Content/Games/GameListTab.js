import React, { useState, useEffect } from 'react';

export const GameListTab = props => {

    const [gameId, setGameId] = useState(null);

    return (
        <h4 className='text-light text-left py-1 px-3' onClick={() => setGameId(props.id)}>
            {props.name}
        </h4>
    )
}