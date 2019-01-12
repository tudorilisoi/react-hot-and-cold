import React from 'react';

export default function GuessFeedback(props) {
    return (
        <div className="form-item feedback">
            {props.status}
        </div>
    );
}