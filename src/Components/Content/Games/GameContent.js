import React from 'react';
import '../../../style/image.css';

export const GameContent = props => {

    const images = props.selectedGame.img_url.map(image => <img src={image} alt='x' className='game-images' />);

    return (
        <div className='text-center col-8'>
            <h1 className='text-light'>{props.selectedGame.name}</h1>
            <p className='text-light'>Made with {props.selectedGame.engine}</p>
            <img src={props.selectedGame.splash_url} alt='x' className='splash-img' />

            <h4 className='text-light'>
                {props.selectedGame.description}
                <br />
                <a
                    href={props.selectedGame.game_link}
                    target="_blank"
                    alt='x'
                    rel="noopener noreferrer"
                    className='btn btn-secondary btn-sm my-3'>
                    <strong>Play</strong>
                </a>
            </h4>

            <div className="container_iframe">
                <div className="iframe_wrapper">
                    <iframe className="iframe_content" id="CR_video" src={props.selectedGame.youtube_link}
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>

            <div>
                <h3>GALLERY:</h3>
                {images}
            </div>
        </div>
    )
}