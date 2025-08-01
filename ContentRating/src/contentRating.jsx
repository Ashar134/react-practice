import React, { Component } from 'react';
import './components/style.css'; 

class ContentRating extends Component {
    
    constructor() {
        super();

        // Initialize state with likes and dislikes
        this.state = {
            likes: 0,
            dislikes: 0,


            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1
                }));
            },

            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1
                }));
            }
        }
    }


    render() {
        return (
            <>
                <div className='content-rating'>
                    <p>
                        Learning React is fun!
                    </p>
                    <div className='rating-buttons'>
                        <button className="like-button" onClick={this.state.handleLike}>
                            Like ({this.state.likes})
                        </button>
                        <button className="dislike-button" onClick={this.state.handleDislike}>
                            Dislike ({this.state.dislikes})
                        </button>
                    </div>
                </div>

            </>
        );
    }
}

export default ContentRating;

