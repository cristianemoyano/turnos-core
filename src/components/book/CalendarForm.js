import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import moment from "moment";


import MomentUtils from '@date-io/moment';
import "moment/locale/es";

moment.locale("es");


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
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={`field ${touched && error ? 'error' : ''}`}>
            <KeyboardDatePicker
              {...inputProps}
              {...others}

              value={value ? new Date(value) : null}
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
    </MuiPickersUtilsProvider>
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
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={`field ${touched && error ? 'error' : ''}`}>
            <KeyboardTimePicker
              {...inputProps}
              {...others}
              value={value ? new Date(value) : null}
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
    </MuiPickersUtilsProvider>
  );
};

const TextField = ({ input, label, meta: { touched, error } }) => {
return (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
    <input {...input} autoComplete='off' placeholder='Name event..' />
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
    const btnText = `${this.props.initialValues ? 'Save' : 'Save'}`;
    return (
      <div className='ui segment'>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <Field name='name' component={TextField} validate={[ required ]}/>
          <Field name='date' component={DateField} label='Date' />
          <Field name='time' component={TimeField} label='Time' />

          <button className='ui primary button'>{btnText}</button>
        </form>
      </div>
    );
  }
}

CalendarForm = reduxForm({
  form: 'calendarForm',
  touchOnBlur: false,
})(CalendarForm);


CalendarForm = connect(
  state => ({
    initialValues: {
      'date': new Date(),
      'time': new Date(),
    }
  }),
  null
)(CalendarForm)


export default CalendarForm