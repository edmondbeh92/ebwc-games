import React, { useState, useEffect } from 'react';
import { ModelList } from './ModelList';
import { ModelContent } from './ModelContent';
import '../../../style/iframe.css';


export const Models = () => {

    const [modelList, setModelList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [chosen, setChosen] = useState(null);

    const model_list = [
        [
            'https://sketchfab.com/oembed?url=https://sketchfab.com/models/'
        ],
        [
            {
                id: 0,
                api: 'space-fighter-ecdc1bd7b8be4d63ad698effa4579ef5'
            },
            {
                id: 1,
                api: 'sci-fi-buggy-5544aed2e26e4e9c8b81495c4cc009e3'
            },
            {
                id: 2,
                api: 'sci-fi-ship-red-striker-13660b4c032c4e56aec28657c5d1c46d'
            },
            {
                id: 3,
                api: 'sci-fi-ship-blue-blitz-e75d802607104848945ce5f0648d0e81'
            },
            {
                id: 4,
                api: 'sci-fi-hovercraft-40b2d1aa95134e76ba9c7b894cb62f4f'
            },
            {
                id: 5,
                api: 'gaia-sophia-blaster-master-zero-2-fd47149fa4de46e4b8d7ca5a8b9f6939'
            },
        ]
    ]

    useEffect(() => {
        fetchModel();
    }, []);

    const fetchModel = async () => {
        const data = await Promise.all(
            model_list[1].map(model => fetch(model_list[0] + model.api)
                .then(response => response.json())
            )
        )
        setModelList(data);
        setIsLoading(false);
    }

    return (
        <div>
            <ModelList data={modelList} loading={isLoading} />
            <ModelContent data={chosen} />
        </div>
    )
}