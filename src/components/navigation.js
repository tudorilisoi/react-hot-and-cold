import React from 'react';

export default function Navigation(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#what">What?</a>
                    </li>
                    <li>
                        <a href="#new" onClick={props.onNewGame}>New Game</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}