import React from 'react';
import WriteComment from './WriteComment.jsx';
import ClickButtons from './ClickButtons.jsx';
import Stat from './Stat.jsx';
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
        if (this.state.value.length > 0) {
            var image = this.state.value[0].userImageURL;
        }

        return (
            <div>
                <img src={image}></img>
                <WriteComment onKeyPress={this.onKeyPress} />
                <ClickButtons />
                <Stat value={this.state.value} />
            </div>
        )
    }
}

export default App;