import React from 'react';

import Navigation from './navigation';

export default function Header(props) {
    return (
        <div>
            <Navigation onNewGame={props.onNewGame}/>
            <h1>Hot and Cold</h1>
        </div>

    );
}