import React from 'react'

const IndividualReview = ({ headline, byline, link, summary_short}) => {
    console.log()
    return (
    <div key={headline} className="review">
            <header>
                <a href={link.url} className="review-link">{headline}</a><br/>
                <div className="author">{byline}</div>
            </header>
        <blockquote className="summary">{summary_short}</blockquote>
    </div>
    )  
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(IndividualReview)}</div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews