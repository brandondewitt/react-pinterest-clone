import React, { Component } from 'react';
import * as PinActions from 'pin/actions';
import { connect } from 'react-redux';
import { PinForm } from 'PinForm';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import { reset as resetForm } from 'redux-form';

const pinSelector = (state) => ({
  pin: state.pin.listItem,
  q: state.router.location.query.q
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, PinActions, {pushState, resetForm}), dispatch);

@connect(pinSelector, mapDispatchToProps)
export class Create extends Component {
  constructor() {
    super();
  }
  onSubmit(pin) {
    const { dispatch, create, pushState, resetForm } = this.props;
    create(pin)
      .then(() => resetForm('pin'))
      .then(() => pushState(null, '/'));
  }
  render() {
    return (
      <div>
        <PinForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}
