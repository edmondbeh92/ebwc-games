import React, { useState } from 'react';
import renderHTML from 'react-render-html';
import '../../../style/other.css';

export const ModelContent = props => {

    if (props.data) {
        return (
            <div className='text-center text-light pt-2 content col-12 col-sm-9'>
                <h3>
                    {props.data.title}
                </h3>
                <div className='my-4'>
                    {renderHTML(props.data.html)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='content'>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor commodo. A lacus vestibulum sed arcu. Morbi enim nunc faucibus a pellentesque. Vitae justo eget magna fermentum iaculis eu. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Feugiat in fermentum posuere urna nec tincidunt praesent. Sem integer vitae justo eget magna fermentum iaculis eu non. Sed blandit libero volutpat sed cras. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Enim eu turpis egestas pretium aenean pharetra. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Adipiscing diam donec adipiscing tristique risus nec feugiat. Lorem ipsum dolor sit amet consectetur adipiscing.
                    Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Pulvinar mattis nunc sed blandit. Massa id neque aliquam vestibulum. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Diam maecenas sed enim ut sem viverra aliquet eget. Ultrices sagittis orci a scelerisque purus semper eget duis at. Laoreet non curabitur gravida arcu. Etiam tempor orci eu lobortis elementum nibh. Id neque aliquam vestibulum morbi blandit cursus risus at. Nunc scelerisque viverra mauris in.
                    Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Fames ac turpis egestas integer eget aliquet nibh praesent. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Auctor eu augue ut lectus arcu bibendum at. Non sodales neque sodales ut etiam. Vel fringilla est ullamcorper eget nulla. In massa tempor nec feugiat nisl pretium fusce id. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Elit pellentesque habitant morbi tristique. Arcu cursus vitae congue mauris. Dui vivamus arcu felis bibendum ut tristique et egestas. Neque viverra justo nec ultrices. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Pharetra vel turpis nunc eget lorem dolor sed viverra. Adipiscing elit duis tristique sollicitudin nibh sit. Morbi non arcu risus quis varius quam. Velit ut tortor pretium viverra suspendisse potenti.
                </h3>
            </div>
        )
    }
}