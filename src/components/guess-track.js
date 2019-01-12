import React from 'react';

export default function GuessTrack(props) {
    return (
        <div className="form-item history">
            <p>Guess History</p>
            <p>{props.history}</p>
        </div>
    );
}