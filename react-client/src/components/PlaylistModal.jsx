import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('playlistModal');

class PlaylistModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'Public'
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('You have selected:', this.state.selectedOption);
    }

    render() {
        return ReactDOM.createPortal(
            <ModalBackground >
            <CloseButton src="data:image/png;base64,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" onClick={this.props.onClose} ></CloseButton>
                <OuterContainer>
                    <Wrapper>
                    
                        <BackgroundStyle >
                            <H2>
                                Create a playlist
                            </H2>
                            <PlaylistTitleForm><Text>Playlist title</Text><Span>*</Span>
                                <PlaylistInput type="text">
                                </PlaylistInput>
                            </PlaylistTitleForm>
                            
                            <PrivacyRadioButton>
                                <PrivacyText>Privacy:</PrivacyText>
                                <RadioForm onSubmit={this.handleFormSubmit}>
                                    <PublicPlaylistSelected>
                                        <TextSelection>
                                            <RadioInput type="radio" value="Public" checked={this.state.selectedOption === 'Public'} onChange={this.handleOptionChange} />
                                            Public
                                        </TextSelection>
                                    </PublicPlaylistSelected>
                                    <PrivatePlaylistSelected>
                                        <TextSelection>
                                            <RadioInput type="radio" value="Private" checked={this.state.selectedOption === 'Private'} onChange={this.handleOptionChange} />
                                            Private
                                        </TextSelection>
                                    </PrivatePlaylistSelected><SaveButton type="submit" >Save</SaveButton>
                                </RadioForm>
                            </PrivacyRadioButton>
                        </BackgroundStyle>
                        
                    </Wrapper>
                </OuterContainer>
            </ModalBackground>,
            modalRoot,
        );
    }
}

// Styled Components
const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    justify-content: center;
    background-color: hsla(0,0%,94.9%,.9);
    transition: .4s;
`;

const OuterContainer = styled.div`
    margin: 76px 0 30px;
    top: 0;



`;

const Wrapper = styled.div`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(232px, auto);
    justify-items: stretch;
    align-items: stretch;
    justify-content: center;
`;

const PlaylistTitleForm = styled.form`
    margin: 20px 0;
`;

const PlaylistInput = styled.input`
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;

    &:focus {
        outline: none !important;
        border:1px solid #999;
    }
`;

const BackgroundStyle = styled.div`
    
    padding: 16px 25px;
    background-color: white;
    borderRadius: 2px;
    display: inline-block;
    height: 232px;
    width: 500px;
    position: relative;
    boxShadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);  
`;

const CloseButton = styled.img`
    position: absolute;
    top: 14px;
    right: 20px;
    width: 18px;
    height: 18px;
    border: none;
    cursor: pointer;
    z-index: 10;
    font-size: 16px;
`;

const H2 = styled.h2`
    line-height: 1.6;
    border-bottom: 1px solid #e5e5e5;
    margin-top: 0;
`;

const Text = styled.p`
    font-size: 12px;
    margin-bottom: 6px;
    display: inline-block;
`;

const Span = styled.span`
    color: #cf0000;
    display: inline-block;
    font-size: 12px;
    padding-left: 3px;
`;

const PrivacyRadioButton = styled.div`
    padding-left: 6px;
    line-height: 26px;
`;

const RadioForm = styled.form`
    display: inline;
`;

const PrivacyText = styled.span`
    display: inline;
    font-size: 12px;
    vertical-aligns: center;
`;

const PublicPlaylistSelected = styled.div`
    display: inline;
`;

const PrivatePlaylistSelected = styled.div`
    display: inline;
`;

const RadioInput = styled.input`  
    display: inline-flex;
    margin-bottom: 3px;
    cursor: pointer;
    vertical-align: middle;
    

    ${TextSelection}:hover & {
        border: 2px solid yellow;
    }
`;

const TextSelection = styled.label`
    cursor: pointer;
    display: inline;
    font-size: 12px;
`;

const SaveButton = styled.button`
    float: right;
    right: 0;
    background-color: #f50;
    border-color: #f50;
    color: #fff;
    height: 26px;
    padding: 2px 11px 2px 10px;
    cursor: pointer;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #e5e5e5;
    vertical-align: baseline;
`;

export default PlaylistModal;