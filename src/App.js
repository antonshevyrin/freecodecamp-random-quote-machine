import React, { Component } from 'react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import CopyToClipboard from 'react-copy-to-clipboard';
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
		this.tweetOut = this.tweetOut.bind(this);
		this.getCurrentFullQuote = this.getCurrentFullQuote.bind(this);
		this.getCurrentQuoteText = this.getCurrentQuoteText.bind(this);
		this.getCurrentQuoteAuthor = this.getCurrentQuoteAuthor.bind(this);
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

	getCurrentQuoteText() {
		if (this.state.availableQuotes.length > 0) {
			return this.state.availableQuotes[this.state.currentIndex].quoteText;
		}

		return '';
	}

	getCurrentQuoteAuthor() {
		if (this.state.availableQuotes.length > 0) {
			return this.state.availableQuotes[this.state.currentIndex].quoteAuthor;
		}

		return '';
	}

	getCurrentFullQuote() {
		const quoteText = this.getCurrentQuoteText();
		const quoteAuthor = this.getCurrentQuoteAuthor();
		return `"${quoteText}" ${quoteAuthor}`;
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
		this.state.currentIndex = newRandomIndex;
		this.setState({
			quoteText: this.getCurrentQuoteText(),
			quoteAuthor: this.getCurrentQuoteAuthor(),
		});
	}

	tweetOut() {
		window.open(`https://twitter.com/intent/tweet?text=${this.getCurrentFullQuote()}`);
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
						<CopyToClipboard text={this.getCurrentFullQuote()}>
							<button className="btn btn-default">
								<FontAwesome name="clipboard" />&nbsp;Copy
							</button>
						</CopyToClipboard>
						<button className="btn btn-default" onClick={this.tweetOut}>
							<FontAwesome name="twitter" />&nbsp;Tweet out
						</button>
					</div>
				</div>
			</div>
		</div>);
	}
}

export default App;
