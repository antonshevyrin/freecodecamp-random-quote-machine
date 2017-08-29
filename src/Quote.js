import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Quote.css';

const Quote = ({ quoteText, quoteAuthor }) => (
	<div className="Quote">
		<blockquote className="blockquote mb-0">
			<p>
				<FontAwesome className="fa-quote-left" name="leftQuote" />&nbsp;
				{quoteText}&nbsp;
				<FontAwesome className="fa-quote-right" name="rightQuote" />
			</p>
			<footer className="blockquote-footer">{quoteAuthor}</footer>
		</blockquote>
	</div>
);

Quote.propTypes = {
	quoteText: React.PropTypes.string.isRequired,
	quoteAuthor: React.PropTypes.string.isRequired,
};

export default Quote;
