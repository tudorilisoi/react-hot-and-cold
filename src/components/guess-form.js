import React from 'react';

import GuestFeedback from './guess-feedback';
import GuessInput from './guess-input';
import GuessButton from './guess-button';
import GuessCount from './guess-count';
import GuessTrack from './guess-track';

import './guess-form.css'

export default function GuessForm(props) {
    return (
        <div className="guess-form">
            <GuestFeedback status={props.status}/>
            <form>
                <GuessInput textInput={props.textInput} onChange={props.onChange}/>
                <GuessButton onClick={props.onClick}/>
            </form>
            <GuessCount count={props.count}/>
            <GuessTrack history={props.history}/>
        </div>
    );
}