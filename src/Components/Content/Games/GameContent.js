import React from 'react';

export const GameContent = props => {

    //const images = props.selectedGame.img_url.map(image => <img src={require(image)} alt='x' />);
    const image = props.selectedGame.splash_url;

    return (
        <div>
            <h1>{props.selectedGame.name}</h1>
            <p>Made with {props.selectedGame.engine}</p>
            <img src={require(image)} alt='x' />

            <h3>
                {props.selectedGame.description}
                <a href={props.selectedGame.game_link} target="_blank" alt='x' rel="noopener noreferrer">
                    Play
                    </a>
            </h3>

            <div className="container_iframe">
                <div className="iframe_wrapper">
                    <iframe className="iframe_content" id="CR_video" src={props.selectedGame.youtube_link}
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>

            <div>
                <h3>GALLERY:</h3>

            </div>
        </div>
    )
}