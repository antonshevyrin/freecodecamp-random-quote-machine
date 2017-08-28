import React, { Component } from 'react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import './Quote.css';

class Quote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteText: '',
			quoteAuthor: '',
			quotesAreLoaded: false,
			availableQuotes: [],
		};
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
		return (
			<div className="Quote">
				<blockquote className="blockquote mb-0">
					<p>
						<FontAwesome className="fa-quote-left" name="leftQuote" />&nbsp;
						{this.state.quoteText}&nbsp;
						<FontAwesome className="fa-quote-right" name="rightQuote" />
					</p>
					<footer className="blockquote-footer">{this.state.quoteAuthor}</footer>
				</blockquote>
			</div>
		);
	}
}

export default Quote;
