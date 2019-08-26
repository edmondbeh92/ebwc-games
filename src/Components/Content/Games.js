import React from 'react';
import '../../style/iframe.css';

export const Games = () => (

    <div className='container text-center'>

        <br />
        <h3>
            This page contains game that I have worked on. The game is made with GameMaker Studio 1.4.
        </h3>

        <div>
            <div>
                <br /><br />
                <h2>GAME LIST: </h2>
                <h3>CELESTIAL RAID </h3>
            </div>
        </div>

        <div>
            <img id="CR_splash" src={require("../../images/splash.png")} alt="Celestial_Raid_Banner" /> <br /> <br />
        </div>

        <div>
            <div>
                <h3>
                    This was my first project made using GameMaker Studio 1.4. It is
                    a vertical shmup featuring 6 missions with 6 bosses, 60 fps gameplay,
                    and a few ship upgrades. It is available in both Windows PC and Android.
                    <a href="https://ebwc-games.itch.io/celestial-raid" target="_blank" rel="noopener noreferrer">
                        Play
                    </a>
                </h3>
            </div>
        </div>

        <div className="container_iframe">
            <div className="iframe_wrapper">
                <iframe className="iframe_content" id="CR_video" src="https://www.youtube.com/embed/EKzkaFqvT4Y"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>

        <div>

            <h3>
                GALLERY:
                </h3>

        </div>

        <div>
            <img src={require("../../images/CS_pic1.png")} />
            <img src={require("../../images/CS_pic2.png")} />
            <img src={require("../../images/CS_pic3.png")} />
            <img src={require("../../images/CS_pic4.png")} />
            <img src={require("../../images/CS_pic5.png")} />
        </div>


    </div>

)