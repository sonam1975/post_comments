import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('playlistModal');

class PlaylistModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ReactDOM.createPortal(
            <ModalBackground 

            
            onClick={this.props.onClose}>
                <BackgroundStyle>

                    <h2>
                        Hello, there!
                    </h2>
                    <hr />
                    <button onClick={this.props.onClose} >Close</button>
                </BackgroundStyle>
            </ModalBackground>,
            modalRoot,
        );
    }
}

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: hsla(0,0%,94.9%,.9);
`;

const BackgroundStyle = styled.div`
    padding: 20;
    background-color: red;
    borderRadius: 2px;
    display: inline-block;
    minHeight: 300px;
    margin: 1rem;
    position: relative;
    minWidth: 300px;
    boxShadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    justifySelf: center;
    
`;

export default PlaylistModal;