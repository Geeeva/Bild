import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import './Modal.css';
 
class YouTubeModal extends Component {
    state = {
      open: false,
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
 
  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <button className="Modal" onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0FzMZ3jNoco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
      </React.Fragment>
    );
  }
}

export default YouTubeModal;