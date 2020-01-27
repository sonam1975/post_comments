import React from 'react';
import WriteComment from './WriteComment.jsx';
import ClickButtons from './ClickButtons.jsx';
import {makeFakeImage} from '../../../database/fakeImage.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            comment: ""
        };
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(event) {
        this.setState({
            comment: event
        })
    }

    render() {
        console.log(this.state.comment);
        console.log(makeFakeImage);
        return (
            <div>
                <WriteComment onKeyPress={this.onKeyPress} />
                <ClickButtons />
            </div>
        )
    }
}

export default App;