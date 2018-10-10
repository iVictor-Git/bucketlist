import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import AddBucketForm from '../AddBucketForm/AddBucketForm';
import AddBucketListItemButton from '../AddBucketListButton/AddBucketListItemButton';
import Backdrop from '../UI/Backdrop/Backdrop';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState, _) => {
      return {
        show: !prevState.show,
      };
    });
  };

  render() {
    const { show } = this.state;
    const modalClassName = 'Modal '.concat(show ? 'Show' : 'Hide');
    return (
      <section>
        <AddBucketListItemButton onClick={this.toggleModal} />
        <Backdrop show={show} toggleModal={this.toggleModal} />
        <Modal className={modalClassName} title="Add a Bucketlist">
          <AddBucketForm
            className="AddBucketForm"
            titlePlaceholder="Title"
            textPlaceholder="Description"
          />
        </Modal>
      </section>
    );
  }
}
