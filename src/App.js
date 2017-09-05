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
		return (<div className="App container">
			<div className="Quote">
				<Quote quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor} />
				<div className="Controls navbar-fixed-bottom">
					<button className="btn btn-default" onClick={this.setRandomQuote}>
						<FontAwesome className="fa-refresh" />&nbsp;New quote
					</button>
					<div className="btn-toolbar">
						<button className="btn btn-default">
							<FontAwesome className="fa-clipboard" />&nbsp;Copy
						</button>
						<button className="btn btn-default">
							<FontAwesome className="fa-twitter" />&nbsp;Tweet out
						</button>
					</div>
				</div>
			</div>
		</div>);
	}
}

export default App;
