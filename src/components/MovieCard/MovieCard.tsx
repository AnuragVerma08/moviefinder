import React, { Component } from 'react';
import './MovieCard.scss';
import { MovieCardProps } from '../MovieCard/MovieCardProps';
import StarRatingComponent from 'react-star-rating-component';
import { MovieCardStates } from '../MovieCard/MovieCardStates';

class MovieCard extends Component<MovieCardProps, MovieCardStates> {

    constructor(props: Readonly<MovieCardProps>) {
        super(props);
        this.state = {
            rating: props.cardData.rating,
        };
    };

    onStarClick(nextValue) {
        this.setState({ rating: nextValue });
    }

    render() {
        const { cardData } = this.props;
        const { rating } = this.state;
        return (
            <div className="card-container">
                <div className='slideme'>
                    <img className='movie-image' src={cardData.imageUrl} alt={cardData.title} />
                    <div className="movie-info">
                        <div className='movie-title'>{cardData.title}</div>
                        <div className='movie-subtitle'>{cardData.subtitle}</div>
                        <div className='movie-description'>{cardData.description}</div>
                    </div>
                    <div className="rating-comp">
                        <div className="rate-box">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                emptyStarColor={'#ccc'}
                                value={rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                            <div className="rating-num">{rating}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;