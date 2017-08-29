import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './Quote';

/* eslint-disable spaced-comment, no-console */
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteText: '',
			quoteAuthor: '',
			quotesAreLoaded: false,
			availableQuotes: [],
		};

		this.setRandomQuote = this.setRandomQuote.bind(this);
	}

	componentDidMount() {
		this.request = axios.get('./quotes.json').then((result) => {
			this.setState({
				quotesAreLoaded: true,
				availableQuotes: result.data.quotes,
			});
			this.setRandomQuote();
		});
	}

	componentWillUnmount() {
		this.request.abort();
	}

	setRandomQuote() {
		const randomIndex = Math.floor(this.state.availableQuotes.length * Math.random());
		this.setState({
			quoteText: this.state.availableQuotes[randomIndex].quoteText,
			quoteAuthor: this.state.availableQuotes[randomIndex].quoteAuthor,
		});
	}

	render() {
		return (<div className="App">
			<Quote quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor} />
			<button onClick={this.setRandomQuote}>New quote</button>
		</div>);
	}
}

export default App;
