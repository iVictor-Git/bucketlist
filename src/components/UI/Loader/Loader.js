import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import Icon from '../Icon/Icon';
import BucketListTitleBar from '../../BucketListTitleBar/BucketListTitleBar';
import './Loader.css';

export default () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <div className='BucketListPreview'>
      <BucketListTitleBar title='Loading' hearts={0} />
      <Icon className='Wireframe' source='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      <Icon className='Wireframe' source='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </div>

  </Segment>
)
