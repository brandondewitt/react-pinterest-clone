import React, { Component } from 'react';
import {reduxForm} from 'redux-form';

@reduxForm({
  form: 'pin',
  fields: ['id', 'description', 'image']
})
export class PinForm extends Component {
  render() {
    const { fields: { id, description, image }, handleSubmit, onDelete, initialValues } = this.props;
    let deleteClass = ['btn', 'btn-danger'];
    if (!onDelete) {
      deleteClass.push('hide');
    }
    return (
      <div>
        <div className='form-group'>
          <label>Image</label>
          <input className='form-control' type='text' {...image}/>
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input className='form-control' type='text' {...description}/>
        </div>

        <div className='row'>
          <div className='col-sm-2'>
            <button className='btn btn-primary' onClick={handleSubmit}>Save</button>
          </div>
          <div className='col-sm-2'>
            <button className={deleteClass.join(' ')} onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
