import React from 'react';
import styled from 'styled-components';
import heart from '../../../img/heart.png';
import repost from '../../../img/repost.png';
import share from '../../../img/share.png';
import nextUp from '../../../img/addToList.png';
import more from '../../../img/more.png';

class ClickButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            liked: false,
            reposted: false,
            addNextUp: false,
            moreBtn: false
        };
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleRepostClick = this.handleRepostClick.bind(this);
        this.handleShareClick = this.handleShareClick.bind(this);
        this.handleNextUpClick = this.handleNextUpClick.bind(this);
        this.handleMoreClick = this.handleMoreClick.bind(this);
    };

    handleLikeClick() {
        this.setState(state => ({
            liked: !state.liked
        }));
        console.log(this.state.liked);
    };

    handleRepostClick() {
        this.setState(state => ({
            reposted: !state.reposted
        }));
        console.log(this.state.reposted);
    };

    handleShareClick() {

    };

    handleNextUpClick() {
        this.setState(state => ({
            addNextUp: !state.addNextUp
        }));
    };

    handleMoreClick() {
        this.setState(state => ({
            moreBtn: !state.moreBtn
        }));
        console.log(this.state.moreBtn);
    };

    render() {
        return (
            <GroupButtons>
                {this.state.liked ? 
                    <LikeButtonClicked type="button" onClick={this.handleLikeClick}>
                        <span className="icon"><ImgClicked src={heart} /></span><TextClicked className="text">Liked</TextClicked>
                    </LikeButtonClicked>
                    :
                    <LikeButton type="button" onClick={this.handleLikeClick}>
                        <span className="icon"><Img src={heart} /></span><Text className="text">Like</Text>
                    </LikeButton>
                }
                {this.state.reposted ?
                    <RepostButtonClicked type="button" onClick={this.handleRepostClick}>
                        <span className="icon"><ImgClicked src={repost} /></span><TextClicked className="text">Reposted</TextClicked>
                    </RepostButtonClicked>
                    :
                    <RepostButton type="button" onClick={this.handleRepostClick}>
                        <span className="icon"><Img src={repost} /></span><Text className="text">Repost</Text>
                    </RepostButton>
                }
                <ShareButton type="button" onClick={this.handleShareClick}>
                    <span className="icon"><Img src={share} /></span><Text className="text">Share</Text>
                </ShareButton>
                {this.state.addNextUp ?
                    <NextUpButtonClicked type="button" onClick={this.handleNextUpClick}>
                        <span className="icon"><ImgClicked src={nextUp} /></span><TextClicked className="text">Added</TextClicked>
                    </NextUpButtonClicked>
                    :
                    <NextUpButton type="button" onClick={this.handleNextUpClick}>
                        <span className="icon"><Img src={nextUp} /></span><Text className="text">Add to Next up</Text>
                    </NextUpButton>
                }
                {this.state.moreBtn ?
                    <MoreButtonClicked type="button" onClick={this.handleMoreClick}>
                        <span className="icon"><ImgClicked src={more} /></span><TextClicked className="text">More</TextClicked>
                    </MoreButtonClicked>
                    :
                    <MoreButton type="button" onClick={this.handleMoreClick}>
                        <span className="icon"><Img src={more} /></span><Text className="text">More</Text>
                    </MoreButton>
                }            
            </GroupButtons>
        )
    }
}

// Styled Components
const GroupButtons = styled.div`
    float: left;
    vertical-align: middle;
    display: inline-block;
`;

const LikeButton = styled.button`
    width: 66px;
    height: 26px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #e5e5e5;

    &:hover {
        border: 1px solid #bfbfbf;
    }
    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const LikeButtonClicked = styled.button`
    width: 76px;
    height: 26px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #ff5500;

    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const RepostButton = styled.button`
    width: 86px;
    height: 26px;
    border: 1px solid #e5e5e5;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #e5e5e5;

    &:hover {
        border: 1px solid #bfbfbf;
    }
    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const RepostButtonClicked = styled.button`
    width: 100px;
    height: 26px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #ff5500;

    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const ShareButton = styled.button`
    width: 76px;
    height: 26px;
    border: 1px solid #e5e5e5;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #e5e5e5;

    &:hover {
        border: 1px solid #bfbfbf;
    }
    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const NextUpButton = styled.button`
    width: 136px;
    height: 26px;
    border: 1px solid #e5e5e5;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #e5e5e5;

    &:hover {
        border: 1px solid #bfbfbf;
    }
    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const NextUpButtonClicked = styled.button`
    width: 136px;
    height: 26px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #ff5500;

    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const MoreButton = styled.button`
    width: 72px;
    height: 26px;
    border: 1px solid #e5e5e5;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #e5e5e5;

    &:hover {
        border: 1px solid #bfbfbf;
    }
    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const MoreButtonClicked = styled.button`
    width: 72px;
    height: 26px;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    margin: 0 5px 0 0;
    border: 1px solid #ff5500;

    &:focus {
        outline: none !important;
    }

    @media only screen and (max-width: 1220px) {
        width: 30px;
        height: 26px;
        span.icon {display:inline-block};
        span.text {display:none};
    };
`;

const ImgClicked = styled.img`
    height: 21px;
    filter: invert(39%) sepia(100%) saturate(2820%) hue-rotate(360deg) brightness(103%) contrast(110%);
`;

const Img = styled.img`
    height: 21px;
`;

const TextClicked = styled.span`
    margin-right: 6px;
    color: #ff5500;
`;

const Text = styled.span`
    margin-right: 6px;
`;

export default ClickButtons;