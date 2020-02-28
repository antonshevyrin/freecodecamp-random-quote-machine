import React, { Component } from "react";
import axios from "axios";
import FontAwesome from "react-fontawesome";
import CopyToClipboard from "react-copy-to-clipboard";
import "./App.css";
import Quote from "./Quote";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteText: "",
			quoteAuthor: "",
			currentIndex: 0,
			quotesAreLoaded: false,
			availableQuotes: []
		};

		this.setRandomQuote = this.setRandomQuote.bind(this);
		this.tweetOut = this.tweetOut.bind(this);
		this.getCurrentFullQuote = this.getCurrentFullQuote.bind(this);
		this.getQuoteText = this.getQuoteText.bind(this);
		this.getQuoteAuthor = this.getQuoteAuthor.bind(this);
	}

	componentDidMount() {
		this.request = axios.get("./quotes.json").then(result => {
			this.setState({
				quotesAreLoaded: true,
				availableQuotes: result.data.quotes
			});
			this.setRandomQuote();
		});
	}

	componentWillUnmount() {
		this.request.abort();
	}

	getQuoteText(quoteIndex) {
		const { availableQuotes } = this.state;
		if (availableQuotes.length > 0) {
			return availableQuotes[quoteIndex].quoteText;
		}

		return "";
	}

	getQuoteAuthor(quoteIndex) {
		const { availableQuotes } = this.state;
		if (availableQuotes.length > 0) {
			return availableQuotes[quoteIndex].quoteAuthor;
		}

		return "";
	}

	getCurrentFullQuote() {
		const { currentIndex } = this.state;
		const quoteText = this.getQuoteText(currentIndex);
		const quoteAuthor = this.getQuoteAuthor(currentIndex);
		return `"${quoteText}" ${quoteAuthor}`;
	}

	setRandomQuote() {
		// try to avoid same quote again
		const maxAttempts = 10;
		let attempt = 1;
		let newRandomIndex;
		const { availableQuotes } = this.state;
		do {
			newRandomIndex = Math.floor(availableQuotes.length * Math.random());
			attempt += 1;
		} while (
			newRandomIndex === this.currentIndex &&
			attempt <= maxAttempts
		);
		this.setState(state => ({
			...state,
			currentIndex: newRandomIndex,
			quoteText: this.getQuoteText(newRandomIndex),
			quoteAuthor: this.getQuoteAuthor(newRandomIndex)
		}));
	}

	tweetOut() {
		window.open(
			`https://twitter.com/intent/tweet?text=${this.getCurrentFullQuote()}`
		);
	}

	render() {
		const { quoteText, quoteAuthor } = this.state;
		return (
			<div className="App container">
				<div className="Quote">
					<Quote quoteText={quoteText} quoteAuthor={quoteAuthor} />
					<div className="Controls navbar-fixed-bottom">
						<button
							type="button"
							className="btn btn-default"
							onClick={this.setRandomQuote}
						>
							<FontAwesome name="refresh" />
							&nbsp;New quote
						</button>
						<div className="btn-toolbar">
							<CopyToClipboard text={this.getCurrentFullQuote()}>
								<button
									type="button"
									className="btn btn-default"
								>
									<FontAwesome name="clipboard" />
									&nbsp;Copy
								</button>
							</CopyToClipboard>
							<button
								type="button"
								className="btn btn-default"
								onClick={this.tweetOut}
							>
								<FontAwesome name="twitter" />
								&nbsp;Tweet out
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
