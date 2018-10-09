import React, { Component } from 'react';
import './AddBucketForm.css';
import Input from '../UI/Input/Input';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.titleValue || '',
      text: this.props.textValue || '',
    };
  }

  componentDidMount() {}

  onChangeHander = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      onChangeHander,
      state: { title, text },
      props: { className, titlePlaceholder, textPlaceholder },
    } = this;

    return (
      <section className={`${className}`}>
        <form className='AddBucketForm' onSubmit={e => e.preventDefault()}>
          <Input
            type="text"
            element="input"
            className="TitleField"
            name="title"
            onChange={onChangeHander}
            value={title}
            placeholder={titlePlaceholder}
          />
          <Input
            element="textarea"
            cols="5"
            className="TextField"
            name="text"
            onChange={onChangeHander}
            value={text}
            placeholder={textPlaceholder}
          />
          <Input element="button" className="AddFormButton dark button">Add</Input>
        </form>
      </section>
    );
  }
}
