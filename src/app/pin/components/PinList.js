import React, { Component } from 'react';
import { Link } from 'react-router';
import { Table } from 'react-bootstrap';
import { PinDetail } from 'pin/components/PinDetail';

export class PinList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const pins = this.props.pins.map(pin => (
      <div className="col-md-4 col-sm-6" key={pin.id} >
        <PinDetail {...pin}></PinDetail>
      </div>
    ));
    return (
      <div className="row">
        {pins}
      </div>
    );
  }
}
