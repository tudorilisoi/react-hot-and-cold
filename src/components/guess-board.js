import React from 'react';

import Header from './header'
import GuessForm from './guess-form';

class Toggler extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false }
    }

    toggle() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        const { visible } = this.state
        if (!visible) {
            return null
        }
        return (
            <div>
                Wooot?
            </div>
        )
    }
}

export default class GuessBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWhat: false,
            winningGuess: Math.floor(Math.random() * 100) + 1,
            textInput: '',
            currentGuess: null,
            history: [],
            status: 'Make your guess!',
            count: 1,
        }
    }

    setTextInput(text) {
        this.setState({ textInput: text });
    }

    setCurrentGuess(guess) {

        this.setState({ currentGuess: guess });

        const difference = Math.abs(guess - this.state.winningGuess)

        if (difference >= 50) {
            this.setState({ status: "You're ice cold..." })
        } else if (difference >= 30) {
            this.setState({ status: "You're cold.." })
        } else if (difference >= 10) {
            this.setState({ status: "You're warm." })
        } else if (difference >= 1) {
            this.setState({ status: "You're hot!" })
        } else {
            this.setState({ status: "You got it!" })
        }
    }

    setCount() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        });
    }

    setHistory(guess) {
        this.setState({ history: [...this.state.history, ' ' + guess] })
    }

    handleButtonClick(event, guess) {
        event.preventDefault();

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
            count: 1,
        });
    }
    toggleWhat = () => {
        this.setState({ showWhat: !this.state.showWhat })
    }

    toggleWhatComponent = () => {
        this.whatRef && this.whatRef.toggle()
        // if(this.whatRef){
        //     this.whatRef.toggle()
        // }
    }

    render() {
        return (
            <div className="guess-board">
                <Header onNewGame={() => this.restartGame()} />
                <button onClick={this.toggleWhat}>What?</button>
                <button onClick={this.toggleWhatComponent}>Pardon me?</button>
                <GuessForm
                    status={this.state.status}
                    textInput={this.state.textInput}
                    onChange={(text) => this.setTextInput(text)}
                    onSubmit={(event) => this.handleButtonClick(event, this.state.textInput)}
                    count={this.state.count}
                    history={this.state.history}
                />
                {this.state.showWhat ? (<div>Nothing, really...</div>) : null}
                <Toggler ref={ref => this.whatRef = ref} />
            </div>
        );
    }
}