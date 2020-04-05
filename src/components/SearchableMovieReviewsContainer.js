import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
        + `api-key=${NYT_API_KEY}`;

export class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSearch = event => this.setState({ searchTerm: event.target.value})

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(revs => this.setState({ reviews: revs.results }))
    }
    
    render() {
        return (
            <div className="searched-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie Reviews</label>
                    <input id="search-input" type="text" onChange={this.handleSearch}/>
                        <button type="submit">Submit</button>
                </form>
                <h2>Results:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer


