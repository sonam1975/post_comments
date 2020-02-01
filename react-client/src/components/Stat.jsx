import React from 'react';
import styled from 'styled-components';
import play from '../../../img/play.png';
import heart from '../../../img/heart.png';
import repost from '../../../img/repost.png';

class Stat extends React.Component {
    constructor(props) {
        super(props);
    }
    
    formatter(num) {
        return new Intl.NumberFormat('en-GB', { notation: "compact" , compactDisplay: "short" }).format(num);
    }

    render() {
        if (this.props.value.length > 0) {
            var playCount = this.formatter(this.props.value[0].playCount);
            var likeCount = this.formatter(this.props.value[0].likeCount);
            var repostCount = this.formatter(this.props.value[0].repostCount);
        }
        return (
            <GroupData>
                <PlayCountData>
                    <Img src={play}></Img>
                    <Num>{playCount}</Num>
                </PlayCountData>
                <LikeData>
                    <Img src={heart}></Img> 
                    <Num>{likeCount}</Num>
                </LikeData>
                <RepostData>
                    <Img src={repost}></Img>
                    <Num>{repostCount}</Num>
                </RepostData>
            </GroupData>
        )
    }
}

// Styled Components
const GroupData = styled.div`
    vertical-align: middle;
    float: right;
`;

const PlayCountData = styled.div`
    margin: 0 0 0 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    height: 26px;
`;

const LikeData = styled.div`
    margin: 0 0 0 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    height: 26px;
    cursor: pointer;
`;

const RepostData = styled.div`
    margin: 0 0 0 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    height: 26px;
    cursor: pointer;
`;

const Num = styled.p`
    font-size: 12px;
    line-height: 16px;
    font-weight: 100;
    color: #999;

    ${RepostData}:hover &, ${LikeData}:hover & {
        color: #333;
    }
`;

const Img = styled.img`
    height: 16px;
    filter: invert(61%) sepia(0%) saturate(0%) hue-rotate(256deg) brightness(99%) contrast(95%);
`;

export default Stat;