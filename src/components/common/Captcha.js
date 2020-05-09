import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const sitekey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const Captcha = ({ input, label, type, meta: { touched, error } }) => {
	return (
	    <div className={`field ${touched && error ? 'error' : ''}`}>
	   		<label>{label}</label>
		    <ReCAPTCHA
		      sitekey={sitekey}
		      onChange={response => input.onChange(response)}
		    />
		   	{touched && error && (
	          <span className='ui pointing red basic label'>{error}</span>
	        )}
	    </div>
	);
};

export default Captcha;
