
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likesToddy:0,
        dislikesToddy:0,

        likesNescau:0,
        dislikesNescau:0,

        handleLikeToddy:() => {
            this.setState((prevState) => ({
                likesToddy: prevState.likesToddy + 1
            }));
        },

        handleDislikeToddy:() => {
            this.setState((prevState) => ({
                dislikesToddy: prevState.dislikesToddy + 1
            }));
        },
        handleLikeNescau:() => {
            this.setState((prevState) => ({
                likesNescau: prevState.likesNescau + 1
            }));
        },

        handleDislikeNescau:() => {
            this.setState((prevState) => ({
                dislikesNescau: prevState.dislikesNescau + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>Toddy</p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLikeToddy}>
                Curtir ({this.state.likesToddy})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislikeToddy}>
                Não Curtir ({this.state.dislikesToddy})
            </button>
        </div>
        <p>Total Ratings: ({this.state.likesToddy + this.state.dislikesToddy})</p>
     </div>

     <div className='content-rating'>
        <p>Nescau</p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLikeNescau}>
                Curtir ({this.state.likesNescau})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislikeNescau}>
                Não Curtir ({this.state.dislikesNescau})
            </button>
        </div>
        <p>Total Ratings: ({this.state.likesNescau + this.state.dislikesNescau})</p>
     </div>
     </>
    );
  }
}

export default ContentRating;
