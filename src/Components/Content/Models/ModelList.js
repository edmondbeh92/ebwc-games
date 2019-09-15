import React from 'react';
import { ModelCard } from './ModelCard';

export const ModelList = props => {

    const modelTags = props.data.map(model => <ModelCard key={model.title} data={model} />)

    if (props.loading) {
        return (
            <div className='list'>
                <div className='lds-dual-ring mx-auto'></div>
            </div>
        )
    }
    else {
        return (
            <div className='list'>
                {modelTags}
            </div>
        )
    }
}