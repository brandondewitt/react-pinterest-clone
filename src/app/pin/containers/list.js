import React, { Component } from 'react';
import * as PinActions from 'pin/actions';
import { connect } from 'react-redux';
import { PinList } from 'PinList';
import { reset as resetForm } from 'redux-form';
import { bindActionCreators } from 'redux';

const pinSelector = (state) => {
  return {
    pins: state.pin.list
  };
};
const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, PinActions, {resetForm}), dispatch);

@connect(pinSelector, mapDispatchToProps)
export class List extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { find } = this.props;
    find();
  }
  onDelete(id) {
    const { destroy, find } = this.props;
    destroy(id)
      .then(find());
  }
  render() {
    let { pins } = this.props;
    return (
      <div>
        <PinList pins={pins} onDelete={::this.onDelete}/>
      </div>
    );
  }
}
