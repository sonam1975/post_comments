import React from 'react';
import styled from 'styled-components';


class ClickButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            liked: false,
            reposted: false,
            addNextUp: false,
            showMenu: false
        };
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleRepostClick = this.handleRepostClick.bind(this);
        this.handleShareClick = this.handleShareClick.bind(this);
        this.handleNextUpClick = this.handleNextUpClick.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    };

    closeMenu() {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, ()=> {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return (
            <GroupButtons>
                {this.state.liked ? 
                    <LikeButtonClicked type="button" onClick={this.handleLikeClick}>
                        <span className="icon"><ImgClicked src="./img/heart.png" /></span><TextClicked className="text">Liked</TextClicked>
                    </LikeButtonClicked>
                    :
                    <LikeButton type="button" onClick={this.handleLikeClick}>
                        <span className="icon"><Img src="./img/heart.png" /></span><Text className="text">Like</Text>
                    </LikeButton>
                }
                {this.state.reposted ?
                    <RepostButtonClicked type="button" onClick={this.handleRepostClick}>
                        <span className="icon"><ImgClicked src="./img/repost.png" /></span><TextClicked className="text">Reposted</TextClicked>
                    </RepostButtonClicked>
                    :
                    <RepostButton type="button" onClick={this.handleRepostClick}>
                        <span className="icon"><Img src="./img/repost.png" /></span><Text className="text">Repost</Text>
                    </RepostButton>
                }
                <ShareButton type="button" onClick={this.handleShareClick}>
                    <span className="icon"><Img src="./img/share.png" /></span><Text className="text">Share</Text>
                </ShareButton>
                {this.state.addNextUp ?
                    <NextUpButtonClicked type="button" onClick={this.handleNextUpClick}>
                        <span className="icon"><ImgClicked src="./img/addToList.png" /></span><TextClicked className="text">Added</TextClicked>
                    </NextUpButtonClicked>
                    :
                    <NextUpButton type="button" onClick={this.handleNextUpClick}>
                        <span className="icon"><Img src="./img/addToList.png" /></span><Text className="text">Add to Next up</Text>
                    </NextUpButton>
                }
                <MoreDropDown>
                    {this.state.showMenu ?
                        <MoreButtonClicked type="button" onClick={this.showMenu}>
                            <span className="icon"><ImgClicked src="./img/more.png" /></span><TextClicked className="text">More</TextClicked>
                        </MoreButtonClicked>
                        :
                        <MoreButton type="button" onClick={this.showMenu}>
                            <span className="icon"><Img src="./img/more.png" /></span><Text className="text">More</Text>
                        </MoreButton>
                    }
                    {
                        this.state.showMenu ?
                        (
                            <MoreContent className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <DropDownSelection ><Img src="./img/addToPlayList.png" /><InnerText className="text">Add to playlist</InnerText></DropDownSelection>
                                <DropDownSelection href="#"><Img src="./img/Station.png" /><InnerText className="text">Station</InnerText></DropDownSelection>
                            </MoreContent>
                        )
                        : (
                            null
                        )
                    }
                </MoreDropDown>
            </GroupButtons>

        )
    }
}


// ####################### Styled Components ################################################################
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
        background-color: white;
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

/* The container <div> - needed to position the drop down content */
const MoreDropDown = styled.div`
    display: inline-block;
    position: relative;
`;

/* More Button Dropdown Content (Hidden by default) */
const MoreContent = styled.div`

    position: absolute;
    overflow: auto;
    z-index: 1;
`;

const DropDownSelection = styled.button`
    text-decoration: none;
    display: block;
    display: flex;
    min-width: 145px;
    min-height: 32px;
    align-items: center;
    cursor: pointer;
    background-color: white;
    border: 1px solid #e5e5e5;

    &:hover {
        background-color: #f1f1f1;
    }
    &:focus {
        outline: none !important;
    }
`;

const InnerText = styled.span`
    text-indent: 5px;
    color: #333;
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


// Reference
// Dropdown Menu - https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
