import React, { Component } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import css from './Modal.module.css';



class ModalWindow extends Component {
  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Modal
        isOpen={true}
        onRequestClose={this.props.onClose}
        contentLabel="Modal"
        className={css.modal}
        style={{
          content: {
            margin: 'auto',
          },
        }}
      >
        
        <div className={css.overlay} onClick={this.handleBackDropClick}>
          <div className={css.modal}>
            <img className={css.imagemodal} src={this.props.largeImageURL} alt="" />
            <button className={css.closeButton} onClick={this.props.onClose}>
              <AiOutlineClose size={22} />
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalWindow;