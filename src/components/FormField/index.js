import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  type, name, label, value, onChange,
}) {
  const fieldID = `id_${name}`;
  return (
    <div>
      <label htmlFor={fieldID}  >
        {label}
        :
        <input
          id={fieldID}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: 'text',
  onChange: () => {},
};

FormField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
