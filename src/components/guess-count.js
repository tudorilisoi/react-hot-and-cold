import React from 'react';

export default function GuessCount(props) {
    return (
        <div className="form-item">
            This is guess #: {props.count}
        </div>
    );
}