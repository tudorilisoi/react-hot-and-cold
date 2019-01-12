import React from 'react';

export default function GuessButton(props) {
    return (
        <button type="submit" onClick={props.onClick}>Guess</button>
    );
}