import React, { Component } from 'react';
import { Link } from 'react-router';

export class PinDetail extends Component {
  render() {
    let { id, description, image } = this.props;
    return (
      <Link to={`/${id}/edit`}>
        <div className='thumbnail'>
          <img src={image}/>
          <div className="caption">{description}</div>
        </div>
      </Link>
    );
  }
}
