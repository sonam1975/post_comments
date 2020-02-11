import React from 'react';
import WriteComment from './WriteComment.jsx';
import ClickButtons from './ClickButtons.jsx';
import Stat from './Stat.jsx';
import styled from 'styled-components';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            comment: ""
        };
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    componentDidMount() {
        $.ajax({
            type: "GET",
            url: "/songs",
            success: (song) => {
                this.setState({
                    value: song
                });
            }
        });
    }

    onKeyPress(event) {
        this.setState({
            comment: event
        })
    }

    render() {
        return (
            <div>
                <UserComment>
                    <Img src="https://soundclouduserphoto.s3-us-west-1.amazonaws.com/photo.jpg"></Img>
                    <WriteComment onKeyPress={this.onKeyPress} />
                </UserComment>
                <ButtonWithStat>
                    <ClickButtons />
                    <Stat value={this.state.value} />
                </ButtonWithStat>
            </div>
        )
    }
}

// Styled Components
const UserComment = styled.div`
    display: block;
    position: relative;
    background: #f2f2f2;
    border: 1px solid #e5e5e5;
    height: 42px;
    box-sizing: border-box;
    width: 822px;
    margin-bottom: 10px;

    @media only screen and (max-width: 1220px) {
        width: 662px;
    }
    @media only screen and (max-width: 1065px) {
        width: 562px;
    }
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    float: left;
`;

const ButtonWithStat = styled.div`
    min-height: 33px;
    display: block;
    width: 822px;
    position: relative;

    @media only screen and (max-width: 1220px) {
        width: 662px;
    }
    @media only screen and (max-width: 1065px) {
        width: 562px;
    }
`;

export default App;