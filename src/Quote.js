import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import "./Quote.css";

const Quote = ({ quoteText, quoteAuthor }) => (
	<blockquote className="blockquote mb-0">
		<p>
			<FontAwesome name="quote-left" />
			&nbsp;
			{quoteText}&nbsp;
			<FontAwesome name="quote-right" />
		</p>
		<footer className="blockquote-footer">{quoteAuthor}</footer>
	</blockquote>
);

Quote.propTypes = {
	quoteText: PropTypes.string.isRequired,
	quoteAuthor: PropTypes.string.isRequired
};

export default Quote;
