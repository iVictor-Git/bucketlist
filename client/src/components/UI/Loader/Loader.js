import React from 'react';
import { Dimmer, Loader as SLoader, Segment } from 'semantic-ui-react';
import Icon from '../Icon/Icon';
import BucketListTitleBar from '../../BucketListTitleBar/BucketListTitleBar';
import './Loader.css';

const Loader = ({ className }) => (
  <Segment>
    <Dimmer active>
      <SLoader />
    </Dimmer>

    <div className={className}>
      <BucketListTitleBar title="Loading" hearts={0} />
      <Icon
        className="Wireframe"
        source="https://react.semantic-ui.com/images/wireframe/paragraph.png"
      />
      <Icon
        className="Wireframe"
        source="https://react.semantic-ui.com/images/wireframe/paragraph.png"
      />
    </div>
  </Segment>
);

export default Loader;
