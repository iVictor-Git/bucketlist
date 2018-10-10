import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import AddBucketForm from '../AddBucketForm/AddBucketForm';
import AddBucketListItemButton from '../AddBucketListButton/AddBucketListItemButton';
import Backdrop from '../UI/Backdrop/Backdrop';

import { Redirect, Link } from 'react-router-dom';
import Text from '../UI/Text/Text';

class DeleteModalControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleModal = () => {
    return <Redirect to="/" />;
  };

  render() {
    const { show } = this.state;
    const modalClassName = 'Modal '.concat(show ? 'Show' : 'Hide');
    return (
      <section>
        <Backdrop show={show} toggleModal={this.toggleModal} />
        <Modal className={modalClassName} title="All set!">
          <Text text="The bucketlist has been deleted!" />
          <Link to="/">Ok </Link>
        </Modal>
      </section>
    );
  }
}

export default DeleteModalControl;
