import React, { useState } from 'react';
import { GameList } from './GameList';
import { GameContent } from './GameContent';
import '../../../style/iframe.css';

export const Games = () => {

    const [selectGame, setSelectGame] = useState(null);

    const gameList = [
        {
            id: 1,
            name: 'Celestial Raid',
            engine: 'GameMaker Studio 1.4',
            splash_url: '../../../images/splash.png',
            description: 'A 60fps vertical shmup with 6 missions, each with their own bosses. Ships have a few upgrades. Available on PC or Android.',
            game_link: 'https://ebwc-games.itch.io/celestial-raid',
            youtube_link: 'https://www.youtube.com/embed/EKzkaFqvT4Y',
            img_url:
                [
                    '../../../images/CS_pic1.png',
                    '../../../images/CS_pic2.png',
                    '../../../images/CS_pic3.png',
                    '../../../images/CS_pic4.png',
                    '../../../images/CS_pic5.png'
                ]
        },
        {
            id: 2,
            name: 'Top-down shooter'
        },
        {
            id: 3,
            name: 'rpg'
        }
    ]

    const games_id_name = gameList.map(game => ({ id: game.id, name: game.name }));

    return (
        <div className='container d-flex flex-row-reverse flex-wrap space-between'>
            <GameList ids_names={games_id_name} />
            <GameContent selectedGame={gameList[0]} />
        </div>
    );
}