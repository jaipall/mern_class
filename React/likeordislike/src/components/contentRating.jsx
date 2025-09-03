import React, { Component } from "react";

class ContentRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <div className="content-rating">
          <p>
            {" "}
            This is a simple article about learning React. Do you like it ?
          </p>

          <div>
            <button className="rating-button" onClick={this.state.handleLike}>
              like ({this.state.likes})
            </button>

            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
