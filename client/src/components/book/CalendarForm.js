import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import Message from '../common/Message'
import moment from "moment";

const DateField = props => {
  const {
    meta: { submitting, error, touched },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;

  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };

  return (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <KeyboardDatePicker
          {...inputProps}
          {...others}
          autoOk
          value={value ? new Date(value) : new Date()}
          disabled={submitting}
          onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
          error={error && touched}
          onChange={onChange}
          placeholder="10/10/2018"
          format="L"
          minDate={new Date()}
        />
      {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
    </div>
  );
};


const TimeField = props => {
  const {
    meta: { submitting, error, touched },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;

  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };

  return (
    <div className={`field ${touched && error ? 'error' : ''}`}>
        <KeyboardTimePicker
          {...inputProps}
          {...others}
          value={value ? new Date(value) : new Date()}
          disabled={submitting}
          onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
          error={error && touched}
          onChange={onChange}
          ampm={false}
          format="h:mm a"
          mask="__:__ _M"
          placeholder="08:00 AM"
        />
      {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
    </div>
  );
};


const TextField = ({ input, label, meta: { touched, error }, placeholder }) => {
return (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
    <input {...input} autoComplete='off' placeholder={placeholder} autofocus />
    {touched && error && (
      <span className='ui pointing red basic label'>{error}</span>
    )}
  </div>
);
};

const required = value => value ? undefined : 'Required'

class CalendarForm extends Component {

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const {
        events: { error },
        pristine,
        submitting
    } = this.props;

    const btnText = `${this.props.initialValues ? 'Save' : 'Save'}`;

    let maxDate = moment().add(14, 'days');  

    return (
      <div className='ui segment'>
        {error && (
            <div>
              <Message title='Ops!' message={error.data} type='negative'/>
            </div>
        )}
        <form
          onSubmit={this.props.handleSubmit.bind(this.onSubmit)}
          className='ui form error'
        >
          <Field
            name='name'
            component={TextField}
            validate={[ required ]}
            placeholder='Añade un título'
        />
        <div class="two fields">
          <Field
            name='date'
            component={DateField}
            maxDate={maxDate}
            label='Fecha'
            inputVariant='outlined'
            />
          <Field
            name='time'
            component={TimeField}
            label='Hora'
            inputVariant='outlined'
        />
        </div>
        <Field
            name='description'
            component={TextField}
            placeholder='Añade una descripción'
        />

          <button className='ui primary button' disabled={pristine || submitting}>{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Please enter at least 1 character';
  }

  return errors;
};

const mapStateToProps = state => ({
    events: state.events
});

CalendarForm = connect(
    mapStateToProps,
)(CalendarForm);

export default reduxForm({
  form: 'calendarForm',
  touchOnBlur: false,
  validate
})(CalendarForm);