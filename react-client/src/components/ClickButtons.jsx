import React from 'react';
import styled from 'styled-components';
import PlaylistModal from './PlaylistModal.jsx';

class ClickButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            liked: false,
            reposted: false,
            addNextUp: false,
            showMenu: false,
            showPlaylistModal: false
        };
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleRepostClick = this.handleRepostClick.bind(this);
        this.handleShareClick = this.handleShareClick.bind(this);
        this.handleNextUpClick = this.handleNextUpClick.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleShowPlaylistModal=this.handleShowPlaylistModal.bind(this);
        this.handleClosePlaylistModal = this.handleClosePlaylistModal.bind(this);
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
    };

    handleShowPlaylistModal() {
        this.setState({
            showPlaylistModal: true,
            showMenu: false
        });
    }

    handleClosePlaylistModal = () => this.setState({showPlaylistModal: false});

    render() {
        return (
            <GroupButtons>
                {this.state.liked ? 
                    <LikeButtonClicked type="button" onClick={this.handleLikeClick}>
                        <span className="icon"><ImgClicked src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACLCAQAAABbj8qaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAR4KJQwgdeMyAAAAAW9yTlQBz6J3mgAAAtdJREFUeNrt3MtqFEEUxvEzmoBjwEQhMhE1oCTiBQKBKMiIC6N4QQSDq6BEA5KIGFwJKvhWvoBPoRv3im4ku8Bxk2QxTmf6Vl+11f9f78/hfNRUdc8kbQYAAAAAAAAAAAAAAAAAAAAAAAAAwP/nvfe95+bmXZ/3ZV/3MlVe+LLPedfNzXve94+lqiRgZTeEYddW7lBeZtaY8NV2RXs5M4q9azpXIFMj69xvR7CPRgaxdx280h7krHIk/VjP5o7U3PxOZiBLhercTTrYQlFkx7FYuM5SqrEeLRyFufnTf+K4VarOSoqxni8VhbkNhPGqpjoJeF0+isE46qqTgEqhXt2Po1epzu2UYq24TvfX2Kea6iRhqnIYF93MrFu5zmZCsVZfYV7LOvXjqYS6VUek/sRP11In9LQdTag3/IumUSOmPqSZ4qumTU7PAq9VUag/NG1y+h64vijUZvkVuH4rQ/0TuL4o1HFNm5xCH/+iUGc0bRoytCjUK5o2OfUC1xeF+ll0P5zPYuD6umGb9HCYxs1/u8hCXYs96b6bwTso97qmbADBZxZ+/Od0rQ5wUtBDeyo3Ya0KJpYeVBeUzYa6JOmivn+MvVYl84pvqe5p2w3YFPWRP+lM+091y13z9k00bYzHxyhbwJjtyGaN8ET1Rt/STBhpJP16fhMtcD2MfUAqnJFGOiuONNqHYsK3VZ1sWzxlxJ1mzHcUXSLspnG3b8HfiniECWOfiaFjjTJf5C+p34UtH3vJxLIR6MTvtOEmKttamFjbbj2xSBuz63S8riT096WDGvNral23PieiR9qgUM2sM1m5xDn7HT3SxpmttJP2OZ6Gu1Y60udEmm21RKDjBDra4UKR5nvdAmwyd6TXiTS/hVyRviXSYkb9P+sxAi3nVGakC0Ra3vBvBj4QaVUzrNEQHu8GOtbed6OFMXfAC5UAAAAAAAAAAAAAAAAAAAAAAACANPwFT8rj0sCqCiMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMzBUMTA6Mzc6MTIrMDA6MDA14DCXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTMwVDEwOjM3OjEyKzAwOjAwRL2IKwAAAABJRU5ErkJggg==" /></span><TextClicked className="text">Liked</TextClicked>
                    </LikeButtonClicked>
                    :
                    <LikeButton type="button" onClick={this.handleLikeClick}>
                        <span className="icon"><Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACLCAQAAABbj8qaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkAR4KJQwgdeMyAAAAAW9yTlQBz6J3mgAAAtdJREFUeNrt3MtqFEEUxvEzmoBjwEQhMhE1oCTiBQKBKMiIC6N4QQSDq6BEA5KIGFwJKvhWvoBPoRv3im4ku8Bxk2QxTmf6Vl+11f9f78/hfNRUdc8kbQYAAAAAAAAAAAAAAAAAAAAAAAAAwP/nvfe95+bmXZ/3ZV/3MlVe+LLPedfNzXve94+lqiRgZTeEYddW7lBeZtaY8NV2RXs5M4q9azpXIFMj69xvR7CPRgaxdx280h7krHIk/VjP5o7U3PxOZiBLhercTTrYQlFkx7FYuM5SqrEeLRyFufnTf+K4VarOSoqxni8VhbkNhPGqpjoJeF0+isE46qqTgEqhXt2Po1epzu2UYq24TvfX2Kea6iRhqnIYF93MrFu5zmZCsVZfYV7LOvXjqYS6VUek/sRP11In9LQdTag3/IumUSOmPqSZ4qumTU7PAq9VUag/NG1y+h64vijUZvkVuH4rQ/0TuL4o1HFNm5xCH/+iUGc0bRoytCjUK5o2OfUC1xeF+ll0P5zPYuD6umGb9HCYxs1/u8hCXYs96b6bwTso97qmbADBZxZ+/Od0rQ5wUtBDeyo3Ya0KJpYeVBeUzYa6JOmivn+MvVYl84pvqe5p2w3YFPWRP+lM+091y13z9k00bYzHxyhbwJjtyGaN8ET1Rt/STBhpJP16fhMtcD2MfUAqnJFGOiuONNqHYsK3VZ1sWzxlxJ1mzHcUXSLspnG3b8HfiniECWOfiaFjjTJf5C+p34UtH3vJxLIR6MTvtOEmKttamFjbbj2xSBuz63S8riT096WDGvNral23PieiR9qgUM2sM1m5xDn7HT3SxpmttJP2OZ6Gu1Y60udEmm21RKDjBDra4UKR5nvdAmwyd6TXiTS/hVyRviXSYkb9P+sxAi3nVGakC0Ra3vBvBj4QaVUzrNEQHu8GOtbed6OFMXfAC5UAAAAAAAAAAAAAAAAAAAAAAACANPwFT8rj0sCqCiMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMzBUMTA6Mzc6MTIrMDA6MDA14DCXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTMwVDEwOjM3OjEyKzAwOjAwRL2IKwAAAABJRU5ErkJggg==" /></span><Text className="text">Like</Text>
                    </LikeButton>
                }
                {this.state.reposted ?
                    <RepostButtonClicked type="button" onClick={this.handleRepostClick}>
                        <span className="icon"><ImgClicked src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACMCAAAAAAmKgZLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHgooGfgGeZQAAAABb3JOVAHPoneaAAABmUlEQVR42u3cMUoDQRSH8XeWURATg1ewUC9hJ6S3FWxsrBQiaJPKQhC9goV4FItF4ilcUwm7cV5mZ/6bxe8jVSDkxyMzDBNYq6pqYRvfomZWVr8G0dLaN8KP7VuwDrZvwBoNYFkREREREREREREREdHmNps13wrxJkfTFzk1hCb2yoGtG11K/1NZjjAZG8ZvYmob9tqJDU9iapfJbr+LqW3YGyd270tM7TLZczW1y2TLbwaNTTR5so9yavpuMNVTkyd73AM1FbvfB7UNu6rfn+qFugZWZP3zGOXFaqyRE58TK7FGD6c+rMLqOEe7sKq1leP7sGLFihUrVqxYsWLFihUrVqz/05rrHkRhzXW/JLFmurfTWPPch4qsWe6ZVdYc9/cpjePrOtx6sWWpduCwhrkPW5hqJx5ruPdgS1Nt7rJ6Jlucah8+a7iLYctTzc6c2MhkFVSrRjkmK6GavW51n6yIavbgtK7eDWTUerK73SYrpJp9Xux0wEqpPz2fHk7SfgZyKhERERERERERERERkbghPVt5UM8C/wbp5IfBIYx4wgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMS0zMFQxMDo0MDoyNSswMDowMLUvBwAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDEtMzBUMTA6NDA6MjUrMDA6MDDEcr+8AAAAAElFTkSuQmCC" /></span><TextClicked className="text">Reposted</TextClicked>
                    </RepostButtonClicked>
                    :
                    <RepostButton type="button" onClick={this.handleRepostClick}>
                        <span className="icon"><Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACMCAAAAAAmKgZLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHgooGfgGeZQAAAABb3JOVAHPoneaAAABmUlEQVR42u3cMUoDQRSH8XeWURATg1ewUC9hJ6S3FWxsrBQiaJPKQhC9goV4FItF4ilcUwm7cV5mZ/6bxe8jVSDkxyMzDBNYq6pqYRvfomZWVr8G0dLaN8KP7VuwDrZvwBoNYFkREREREREREREREdHmNps13wrxJkfTFzk1hCb2yoGtG11K/1NZjjAZG8ZvYmob9tqJDU9iapfJbr+LqW3YGyd270tM7TLZczW1y2TLbwaNTTR5so9yavpuMNVTkyd73AM1FbvfB7UNu6rfn+qFugZWZP3zGOXFaqyRE58TK7FGD6c+rMLqOEe7sKq1leP7sGLFihUrVqxYsWLFihUrVqz/05rrHkRhzXW/JLFmurfTWPPch4qsWe6ZVdYc9/cpjePrOtx6sWWpduCwhrkPW5hqJx5ruPdgS1Nt7rJ6Jlucah8+a7iLYctTzc6c2MhkFVSrRjkmK6GavW51n6yIavbgtK7eDWTUerK73SYrpJp9Xux0wEqpPz2fHk7SfgZyKhERERERERERERERkbghPVt5UM8C/wbp5IfBIYx4wgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMS0zMFQxMDo0MDoyNSswMDowMLUvBwAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDEtMzBUMTA6NDA6MjUrMDA6MDDEcr+8AAAAAElFTkSuQmCC" /></span><Text className="text">Repost</Text>
                    </RepostButton>
                }
                <ShareButton type="button" onClick={this.handleShareClick}>
                    <span className="icon"><Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACLCAAAAADU7V3NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHgoqEyrl8ggAAAABb3JOVAHPoneaAAACKElEQVR42u3aTUsCURTGcT/LWQS9MdKyRdFaN+4KhALBIIoWGb2sq0Ugtg9sEbS60KYgxmUQLfoC2pdJLZlR53huXT0zl57/cuae5tfM1SDN5RBCCCGEEEIIIYQQ+u/dpA2wj/yxkj9W8sdK/ljJHyv5YyV/rOSPlfyxkj9WSsd6t1uk8WrjCz9bt1ene+WtbpSG9ZgSK4yue9gmLh1rmLeSmjJNSsNqmGsHQ6vqyyQ0e2vIXfo9tugpkKAa1rzFha8toLO31pjLxjfqvp101lSLx1/NhrTJXDb2jpqRe8resWhFIyPSXDH5urGbmhUpB4kWVLIizSX7ojqjpqWdi/u3sVkFqUg9H3KWGh+JsxpSkboQO3/WZmZVpBL1OTp7xM7qSCXqweDcJj+rJJWoKz+nLvlZLalE/T6x2OJn1aQC9bF/fLXDz+pJBWq9d3hjwqyiVKAedo+uT5jVlArUEtF8m59VlQrUNaIXflZXKlDn6MTux5jUqRM26rCU7NbNkvpqKU2fWrGVpk+1lvpBNS6/pirVOD0RTapx2zyKVOO4z/Woxm3zKFKN2+ZRpBq3zaNJncJ7MqigggoqqKCCmgGqSwrUwnSkBXeJmO2HkkJVBWrTndmrqUCd0mbVkLIfsv+qmrvDJpvvTwgF7gqrQndqqERlv2ZjncY/Vwf31WkPBGr3tJ/Da0vpFRXLVP/wd6tQVXz2CCGEEEIIIYQQQgghhBBCyI++AM21hWcvPGIxAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTMwVDEwOjQyOjA2KzAwOjAwwhfK3QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0zMFQxMDo0MjowNiswMDowMLNKcmEAAAAASUVORK5CYII=" /></span><Text className="text">Share</Text>
                </ShareButton>
                {this.state.addNextUp ?
                    <NextUpButtonClicked type="button" onClick={this.handleNextUpClick}>
                        <span className="icon"><ImgClicked src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACJCAAAAAByEkfFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHgorFzSTB1AAAAABb3JOVAHPoneaAAABC0lEQVR42u3WsQ3CMBRF0czyS9iDedywFQ3zULMHAhEUgi2MbH8/k3t6pCv8kniaAAAAoO/YOyCbHS69E3JLbXfu3ZBbajbGAu6lYyzgUTrEAuxJfwFzqf4CXqXyC7AF7QUsS7UX8FYqvQBb0V3AulR3AR+lsguwCM0FxEo1FxAtlVxAovTUuyuzdJjTD72jMkv3gicfLZU8+Vhp8P1fvkj/tvXJVyttfvK1SkPjzlqlHs98lVKXZ75GaXDorFHq9bYvLnV725eWBqfO0lLP73xRqet3vqQ0OHYCAIAt+fWGkrqtUEoppZRSSiml+qUAAGA7xrmhUEoppZRSSimlAAAAAAAAAAAA+AvXG3RvXmLyzAfTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTMwVDEwOjQzOjIzKzAwOjAwPciJOQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0zMFQxMDo0MzoyMyswMDowMEyVMYUAAAAASUVORK5CYII=" /></span><TextClicked className="text">Added</TextClicked>
                    </NextUpButtonClicked>
                    :
                    <NextUpButton type="button" onClick={this.handleNextUpClick}>
                        <span className="icon"><Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACJCAAAAAByEkfFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHgorFzSTB1AAAAABb3JOVAHPoneaAAABC0lEQVR42u3WsQ3CMBRF0czyS9iDedywFQ3zULMHAhEUgi2MbH8/k3t6pCv8kniaAAAAoO/YOyCbHS69E3JLbXfu3ZBbajbGAu6lYyzgUTrEAuxJfwFzqf4CXqXyC7AF7QUsS7UX8FYqvQBb0V3AulR3AR+lsguwCM0FxEo1FxAtlVxAovTUuyuzdJjTD72jMkv3gicfLZU8+Vhp8P1fvkj/tvXJVyttfvK1SkPjzlqlHs98lVKXZ75GaXDorFHq9bYvLnV725eWBqfO0lLP73xRqet3vqQ0OHYCAIAt+fWGkrqtUEoppZRSSiml+qUAAGA7xrmhUEoppZRSSimlAAAAAAAAAAAA+AvXG3RvXmLyzAfTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTMwVDEwOjQzOjIzKzAwOjAwPciJOQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0zMFQxMDo0MzoyMyswMDowMEyVMYUAAAAASUVORK5CYII=" /></span><Text className="text">Add to Next up</Text>
                    </NextUpButton>
                }
                <MoreDropDown>
                    {this.state.showMenu ?
                        <MoreButtonClicked type="button" onClick={this.showMenu}>
                            <span className="icon"><ImgClicked src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACICAAAAAC5TpRgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHwU1NYZSWTMAAAABb3JOVAHPoneaAAAAxklEQVR42u3XwQnDMAwF0Mxi8A6ZJjNkGc+QZTqD6aGD9FZK40PBgiDy3vUfJBxiS8trSeH1uLqDvz2vbgAAAAAAAAAAALiZ3ra11nVrPToN7nMvH3uPTIMdtXypR1warJUfLSqNPtFycsSkwXo9V6s9Io22l4E9Io0+0jLU59NobVytzafRtnG1bT6Nto6rrfNptDquVufT+3aa5+vn+aPy3FJ5bv48r2miCSXP1Jdokk60nSTa+JY8WzQAAAAAAAAAAMDJG5eTE9C2mCWmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTMxVDA1OjUzOjUzKzAwOjAw2MucFAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0zMVQwNTo1Mzo1MyswMDowMKmWJKgAAAAASUVORK5CYII=" /></span><TextClicked className="text">More</TextClicked>
                        </MoreButtonClicked>
                        :
                        <MoreButton type="button" onClick={this.showMenu}>
                            <span className="icon"><Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACICAAAAAC5TpRgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHwU1NYZSWTMAAAABb3JOVAHPoneaAAAAxklEQVR42u3XwQnDMAwF0Mxi8A6ZJjNkGc+QZTqD6aGD9FZK40PBgiDy3vUfJBxiS8trSeH1uLqDvz2vbgAAAAAAAAAAALiZ3ra11nVrPToN7nMvH3uPTIMdtXypR1warJUfLSqNPtFycsSkwXo9V6s9Io22l4E9Io0+0jLU59NobVytzafRtnG1bT6Nto6rrfNptDquVufT+3aa5+vn+aPy3FJ5bv48r2miCSXP1Jdokk60nSTa+JY8WzQAAAAAAAAAAMDJG5eTE9C2mCWmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTMxVDA1OjUzOjUzKzAwOjAw2MucFAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0zMVQwNTo1Mzo1MyswMDowMKmWJKgAAAAASUVORK5CYII=" /></span><Text className="text">More</Text>
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
                                <DropDownSelection type="button" onClick={this.handleShowPlaylistModal} ><Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACLBAAAAADp/Us7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAAPOjI+owAAAAd0SU1FB+QBHgosBhFisWUAAAABb3JOVAHPoneaAAAAT0lEQVRo3u3UsQkAIAxFQWfJ/kMK9oqIooa7NvB+l1IAADKJRlFR8ZdidPSuioqK7xdn7GwpKiqeL8bQ+r6iouK9IpDPD79HUVERAAAgnwqS/bWxyzXVHAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMS0zMFQxMDo0NDowNiswMDowMM8JupoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDEtMzBUMTA6NDQ6MDYrMDA6MDC+VAImAAAAAElFTkSuQmCC" /><InnerText className="text">Add to playlist</InnerText></DropDownSelection>
                                <DropDownSelection href="#"><Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAB3CAAAAAAxjG2pAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+QBHgouMZvpdugAAAABb3JOVAHPoneaAAAFNUlEQVR42u1aa29UVRSd33LaaUsxKq/wCClSSkHAiCk2VBsKAYs0wUBoCFMRKlYQEwhYEEOFUKNUpUCtPMRGTUXARClaKxRBhoI/xO51zZzHvWPPdO+Jfjjr29qzz7rr9rz3bSoVEBAQEBAQEBAQEBAQEBAQ8B/jEFdgrGjWmtSrTIV5S4tkrUUptZ6lUKVUfVGs7VSENTxrSjUXwVo3rKkzbIVOcWu3yyD8FkdjIyRKf5L2VsXu0XGsgMhsYWsZqNZyZWZCplHU2i1ozmDr/BKNjM8kvVWTYsUwX+gsvM0UtNYJxcMSUh38KWWjMvayY58W0PxPk8wnrbSYtf141x4zVK0+9m5evcBkvRBrl/L2BKktNCMN44GTfo0fzXcm5kJSqxSydhBvOmBE9iBy3Kdxdhal7jUiX6LxuzLeniatOiNwBuqVd3waj1Qg+YIRqqXANBFr30J8xIhEi9Q3fs0vIHmqEbmCyNcS3jaT0gtGYHthK8re2OCfQYFNEt6mOIeHB6UU2OAv0Ej5ZY90oA0BAWuX8drG2Gom/lTBb7dF8+8geZrvbRfpzNH8JoSPxRN7M/U1NfWZ3vgv+9BkVAemEn+F7w2zarfmrxGf7mZlo4MKkMm6v8JLRvNNMieHFB73veZPEu92krqUhS7n507HS7TjZ1NM9Dur+A/Ey52kjHKQcRJKKDjk8HNcb1gBWjRvJ752Amsxc3UU26/5auJvc73hjH9U8znxLu1SCbC79SiFFmveIXLjWmofQe7gwVZGViXCGk2jCOkl7gOi7Ht0hb3PYytdYmVkkr3ZvTqXQl/k6FmRswieczNHjxHdGs9IgJWEoXEiRwfjGZP19jBHMVCsE3VvPm/WItxmT4bfJbzdc0S2OFMjb5c6nXqAIq3OK9/neRsiDWNbbrSnxjjq83mzqjKnnKUHC9yvPG9XSWOu5s8St45eNfm81ZhZOOyu0ByX6Os8b9gGjJ1+OfFLhXu76HibTfwazxv6tETztcQ/MjP8+rQ7qU9v8by5a20r0YNmBmMu/MHzNgaRuzmOq2qbmeG3huyw15Dolf/ieYteUA+ME0Sb4xkJsJLWU0TfaK9KrG+pNInozaaf6Dwrw3/P6s/Rc0QruN4WkcqHOXofzx01M3z2+tsI6bX2OFF2NW8Dqbyj+TPE37dSfM9IxjKJU+FGrjeoGKVUnC1ftHMmPluuoli75i8T38f11kcqRklq0Fnwks0lnskHNU/bw2+ywLOuaI47k1uH97nLGGWHyyLT9J9a3g7Nm53nRPC4Axr3UVQtqvjetpKOUbO8gefviifmvzu/oZwuRUFkG9/baQj/pgNNGIEP/BUeYnQ16MAwJHv8FfIC4/g9ze+iVvOcv8AyTJ97OnA4aT5NCjhOrjQC2O/Vdt/2LcrtwZUUaJLwhv3Fqg2iLqQ+8Wt+SLn70wgifRLeIiurjMB5iJcN+TSOlgt13gjVJc70yWE31M1adFS0et6n8fVyZ0tIDaDxHhlv0Sq+yIzQ8XeBX+PB8dYvmQHU8Mv9Gk8MHAztjx219nXg3zCQtt4iWpNel/L2GKvGLCvW4N+837qH4oaV5h55NXD4UAckpLC2SX5ri65sZT/zhYZR+xH98ozrpcS3FOyk6itJb6l1SuQUjcK2W/ZkY7qE6hoVn1QC+BFzVXVwNN6ERKnXflIQjsQ3nwIRfT5M+mzCRiu3Vy/hT7+5CNai6+A6jkBfif0dVhIN3LL75/aXdVGw/wuj53HRvAUEBAQEBAQEBAQEBAQEBPyv8Deb7K0Z5vXUwgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMS0zMFQxMDo0Njo0OSswMDowMLn+FLQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDEtMzBUMTA6NDY6NDkrMDA6MDDIo6wIAAAAAElFTkSuQmCC" /><InnerText className="text">Station</InnerText></DropDownSelection>
                            </MoreContent>
                        )
                        : (
                            null
                        )
                    }
                    {this.state.showPlaylistModal ? (
                        <PlaylistModal onClose={this.handleClosePlaylistModal}  />
                    ) : null }
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
