import React, { Component } from 'react';
import './AddBucketForm.css';
import Input from '../UI/Input/Input';

import gql from 'graphql-tag';
import {Mutation} from 'react-apollo'
import {Redirect} from 'react-router-dom';

import {GET_BUCKETLISTS} from '../../graphql/queries/index';

const ADD_BUCKETLIST = gql`
mutation AddBucketList($input: BucketListInput!)
  {
  addBucketList(input: $input) {
    hearts
    title
    text
    id
    owner {
      id
      firstName
      lastName
    }
  }
}
`

class AddBucketForm extends Component {
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

  handleSubmit = (event) => (addBucketList) => {
    event.preventDefault()
    addBucketList({variables: {
      input: {
        title: this.state.title,
        text: this.state.text,
        ownerId: "5bbc1ff1feb54c0236573b13"
      }
    }})
  }

  render() {
    const {
      onChangeHander,
      state: { title, text },
      props: { className, titlePlaceholder, textPlaceholder },
    } = this;

    return (
      <Mutation 
      mutation={ADD_BUCKETLIST}
      // This bit of code will update the cache to include the new mutation, use cache.readQuery to run a query
      // use write query to run a query and data to update the data field
      update={(cache, { data: { addBucketList } }) => {
        const {bucketlists} = cache.readQuery({ query: GET_BUCKETLISTS });
        cache.writeQuery({
          query: GET_BUCKETLISTS,
          data: { bucketlists: bucketlists.concat([addBucketList]) }
        });
      }}
      >
      {(addBucketList, {data, loading, error}) => (
      <section className={`${className}`}>
        <form className='AddBucketForm' onSubmit={e => this.handleSubmit(e)(addBucketList)}>
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

        {!loading && data && <Redirect to={`/bucket/${data.addBucketList.id}`} />}
      </section>
      )}
      </Mutation>

    );
  }
}

export default AddBucketForm;