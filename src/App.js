import React, { Component } from 'react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import './App.css';
import Quote from './Quote';

/* eslint-disable spaced-comment, no-console */
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteText: '',
			quoteAuthor: '',
			currentIndex: 0,
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
		// try to avoid same quote again
		const maxAttempts = 10;
		let attempt = 1;
		let newRandomIndex;
		do {
			newRandomIndex = Math.floor(this.state.availableQuotes.length * Math.random());
			attempt += 1;
		} while (newRandomIndex === this.currentIndex && attempt <= maxAttempts);
		this.currentIndex = newRandomIndex;
		this.setState({
			quoteText: this.state.availableQuotes[this.currentIndex].quoteText,
			quoteAuthor: this.state.availableQuotes[this.currentIndex].quoteAuthor,
		});
	}

	render() {
		return (<div className="App container">
			<div className="Quote">
				<Quote quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor} />
				<div className="Controls navbar-fixed-bottom">
					<button className="btn btn-default" onClick={this.setRandomQuote}>
						<FontAwesome name="refresh" />&nbsp;New quote
					</button>
					<div className="btn-toolbar">
						<button className="btn btn-default">
							<FontAwesome name="clipboard" />&nbsp;Copy
						</button>
						<button className="btn btn-default">
							<FontAwesome name="twitter" />&nbsp;Tweet out
						</button>
					</div>
				</div>
			</div>
		</div>);
	}
}

export default App;
