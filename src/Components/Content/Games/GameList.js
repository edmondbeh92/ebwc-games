import React from 'react';
import { GameListTab } from './GameListTab'
import '../../../style/other.css'

export const GameList = props => {

    const gameTags = props.ids_names.map(id_name => <GameListTab id={id_name.id} name={id_name.name} />)

    return (
        <div className='d-flex flex-column gamelist'>
            {gameTags}
        </div>
    )
}