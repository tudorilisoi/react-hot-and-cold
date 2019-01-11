import React from 'react';

export default function GuessInput(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.id} 
            value={props.textInput} 
            onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    );
}