import React, { Component } from 'react';
import * as PinActions from 'pin/actions';
import { connect } from 'react-redux';
import { PinForm } from 'PinForm';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import { PinDetail } from 'pin/components/PinDetail';

const pinSelector = (state) => ({
  pin: state.pin.listItem,
  q: state.router.location.query.q
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, PinActions, {pushState}), dispatch);

@connect(pinSelector, mapDispatchToProps)
export class Edit extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { findById, params } = this.props;
    findById(params.id);
  }
  onSubmit(pin) {
    const { dispatch, update, pushState} = this.props;
    update(pin)
      .then(() => pushState(null, '/'));
  }
  onDelete(id) {
    const { dispatch, destroy, pushState} = this.props;
    destroy(id)
      .then(() => pushState(null, '/'));
  }
  render() {
    let { pin } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <PinForm initialValues={pin} onDelete={this.onDelete.bind(this, pin.id)} onSubmit={this.onSubmit.bind(this)} />
        </div>
        <div className="col-md-6">
          <PinDetail {...pin} />
        </div>
      </div>
    );
  }
}
