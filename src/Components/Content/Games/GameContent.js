import React from 'react';
import '../../../style/image.css';
import '../../../style/color.css';
import '../../../style/other.css';

export const GameContent = props => {

    const images = props.selectedGame.img_url.map(image => <img src={image} alt='x' className='game-images' />);

    return (
        <div className='content'>
            <img src={props.selectedGame.splash_url} alt='x' className='splash-img' />
            <p className='text-warning text-center'>Made with {props.selectedGame.engine}</p>
            <hr /><br />

            <h5 className='text-color-three pb-4'>
                {props.selectedGame.description}
                <br /><br />
                <div className='text-center'>
                    <a
                        href={props.selectedGame.game_link}
                        target="_blank"
                        alt='x'
                        rel="noopener noreferrer"
                        className='btn-play'>
                        <strong>PLAY</strong>
                    </a>
                </div>
            </h5>

            <div className="container_iframe mb-5">
                <div className="iframe_wrapper">
                    <iframe className="iframe_content" title="CR_video" src={props.selectedGame.youtube_link}
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>

            <div>
                <hr />
                <h3 className='text-color-three py-2'>Gallery</h3>
                <hr />
                {images}
            </div>
        </div>
    )
}