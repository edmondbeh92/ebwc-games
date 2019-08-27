import React from 'react';

export const Model = props => {

    return (
        <div className="container_iframe">
            <div className="iframe_wrapper">
                <iframe className="iframe_content" src={"https://sketchfab.com/models/ecdc1bd7b8be4d63ad698effa4579ef5/embed"}
                    frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>

                <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                    <a href={"https://sketchfab.com/3d-models/space-fighter-ecdc1bd7b8be4d63ad698effa4579ef5?utm_medium=embed&utm_source=website&utm_campaign=share-popup"}
                        target="_blank" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Space Fighter</a>
                    by <a
                        href={"https://sketchfab.com/edmondbeh92?utm_medium=embed&utm_source=website&utm_campaign=share-popup"}
                        target="_blank" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>edmondb</a>
                    on <a href={"https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"}
                        target="_blank" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Sketchfab</a>
                </p>
            </div>
        </div>
    )
}