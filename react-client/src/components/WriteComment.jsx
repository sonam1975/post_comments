import React from 'react';

class WriteComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onKeyPress(this.state.comment);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                <input placeholder="Write a comment" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </form>
            </div>
        )
    }
}

export default WriteComment;