import React from 'react';
import { GameListTab } from './GameListTab'
import '../../../style/other.css'

export const GameList = props => {

    const gameTags = props.ids_names.map(id_name => <GameListTab key={id_name.id} id={id_name.id} name={id_name.name} />)

    return (
        <div className='col-12 col-sm-3 list'>
            {gameTags}
        </div>
    )
}