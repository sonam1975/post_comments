import React from 'react';

class Stat extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.value.length > 0) {
            var playCount = this.props.value[0].playCount;
            var likeCount = this.props.value[0].likeCount;
            var repostCount = this.props.value[0].repostCount;
        }
        return (
            <div>
                <ul>
                    <li>{playCount}</li>
                    <li>{likeCount}</li>
                    <li>{repostCount}</li>
                </ul>
            </div>
        )
    }
}

export default Stat;