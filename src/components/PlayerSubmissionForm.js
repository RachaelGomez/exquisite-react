import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const setDefault = () => {
    let defaultFields = {}
    props.fields.forEach((field) => {
      if (field.key) {
        defaultFields[field.key] = '';

      }
    });
    return defaultFields;
  }
const [formFields, setFormFields] = useState(setDefault());

const onInputChange = (event) => {
  console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
  // Duplicate formFields into new object
  const newFormFields = {
    ...formFields,
  }
  

  newFormFields[event.target.name] = event.target.value;
  setFormFields(newFormFields);
}

const onFormSubmit = event => {
  event.preventDefault();

  props.sendSubmission(formFields);

  setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
  });
  
};

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          
        {
            props.fields.map((field, index) => {

              if (typeof field === 'object') {
                return(
                  <input
                    key={ index }
                    value={ formFields[field.key] }
                    name={ field.key }
                    placeholder={ field.placeholder }
                    onChange={ onInputChange }
                    
                  />
                )
              } else {
                return(
                  <div key={ index }>
                    { field }
                  </div>
                )
              }
            })
          }
        

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
