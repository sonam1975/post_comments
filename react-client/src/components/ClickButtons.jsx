import React from 'react';

class ClickButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                
        };
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleRepostClick = this.handleRepostClick.bind(this);
        this.handleShareClick = this.handleShareClick.bind(this);
        this.handleNextUpClick = this.handleNextUpClick.bind(this);
        this.hanleMoreClick = this.handleMoreClick.bind(this);
    };

    handleLikeClick() {

    };

    handleRepostClick() {

    };

    handleShareClick() {

    };

    handleNextUpClick() {

    };

    handleMoreClick() {

    };

    render() {
        return (
            <div>
                <button onClick={this.handleLikeClick}>Like</button>
                <button onClick={this.handleRepostClic}>Repost</button>
                <button onClick={this.handleShareClick}>Share</button>
                <button onClick={this.handleNextUpClick}>Add to Next up</button>
                <button onClick={this.handleMoreClick}>More</button>
            </div>
        )
    }
}

export default ClickButtons;