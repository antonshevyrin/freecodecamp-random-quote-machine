import React, { Component } from 'react';
import axios from 'axios';

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
    this.request = axios.get('/quotes.json').then((result) => {
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
      <span>Some static quote - {this.state.quoteText}</span>
    );
  }
}

export default Quote;
