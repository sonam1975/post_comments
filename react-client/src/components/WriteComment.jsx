import React from 'react';
import styled from 'styled-components';

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
                <Input placeholder="Write a comment" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </form>
            </div>
        )
    }
}

// Styled Components
const Input = styled.input`
    position: absolute;
    width: 746px;
    height: 26px;
    padding: 0 9px;
    cursor: pointer;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    float: left;
    top: 50%;
    right: 7px;
    transform: translate(0, -50%);
    font-size: 14px;

    &:focus {
        outline: none !important;
        border:1px solid #999;
    }

    @media only screen and (max-width: 1220px) {
        width: 586px;
    }
    @media only screen and (max-width: 1065px) {
        width: 486px;
    }
`;

export default WriteComment;