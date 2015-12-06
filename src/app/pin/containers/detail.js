import React, { Component } from 'react';
import * as PinActions from 'pin/actions';
import { connect } from 'react-redux';
import { PinDetail } from 'PinDetail';

const pinSelector = (state) => {
  return {
    pin: state.pin.listItem
  };
};

@connect(pinSelector, PinActions)
export class Detail extends Component {
  constructor() {
    super();
    // this.state = {};
  }
  componentDidMount() {
    const { findById, params } = this.props;
    findById(params.id);
  }
  render() {
    let { pin } = this.props;
    return (
      <div>
        <PinDetail pin={pin} />
      </div>
    );
  }
}
