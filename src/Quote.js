import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Quote.css';

const Quote = ({ quoteText, quoteAuthor }) => (
	<blockquote className="blockquote mb-0">
		<p>
			<FontAwesome className="fa-quote-left" name="leftQuote" />&nbsp;
			{quoteText}&nbsp;
			<FontAwesome className="fa-quote-right" name="rightQuote" />
		</p>
		<footer className="blockquote-footer">{quoteAuthor}</footer>
	</blockquote>
);

Quote.propTypes = {
	quoteText: React.PropTypes.string.isRequired,
	quoteAuthor: React.PropTypes.string.isRequired,
};

export default Quote;
