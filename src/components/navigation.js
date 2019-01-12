import React from 'react';

import './navigation.css'

export default function Navigation(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#new" className="new" onClick={props.onNewGame}>New Game</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}