import React from 'react';

import Header from './header'
import GuessFeedback from './guess-feedback';
import GuessInput from './guess-input';
import GuessButton from './guess-button';
import GuessCount from './guess-count';
import GuessTrack from './guess-track';

export default class GuessBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winningGuess: Math.floor(Math.random() * 100) + 1,
            textInput: '',
            currentGuess: null,
            history: [],
            status: 'Make your guess!',
            count: null,
        }
    }

    setTextInput(text) {
        this.setState({textInput: text});
    }

    setCurrentGuess(guess) {

        this.setState({currentGuess: guess});

        const difference = Math.abs(guess - this.state.winningGuess)

        if (difference >= 50) {
            this.setState({status: "You're ice cold..."})
          } else if (difference >= 30) {
            this.setState({status: "You're cold.."})
          } else if (difference >= 10) {
            this.setState({status: "You're warm."})
          } else if (difference >= 1) {
            this.setState({status: "You're hot!"})
          } else {
            this.setState({status: "You got it!"})
          }
    }

    setCount() {
        this.setState((prevState) => {
            return { count: prevState.count + 1}
        });
    }

    setHistory(guess) {
        this.setState({history: [...this.state.history, ' ' + guess]})
    }

    handleButtonClick(guess) {
        if (isNaN(guess)) {
            this.setState({ status: 'Please enter a valid number' });
            return;
          }
        
        this.setCount();
        this.setCurrentGuess(guess);
        this.setHistory(guess);
    }

    restartGame() {
        this.setState({
            winningGuess: Math.floor(Math.random() * 100) + 1,
            textInput: '',
            currentGuess: null,
            history: [],
            status: 'Make your guess!',
            count: null,
        });
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.restartGame()}/>
                <GuessFeedback status={this.state.status} />
                <GuessInput textInput={this.state.textInput} onChange={(text) => this.setTextInput(text)} />
                <GuessButton onClick={() => this.handleButtonClick(this.state.textInput)}/>
                <GuessCount count={this.state.count} />
                <GuessTrack history={this.state.history}/>
            </div>
        );
    }
}