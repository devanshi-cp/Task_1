// InputField.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../redux/actions';

const InputField = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(updateValue(value));
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Input Field:</label>
      <input type="text" onChange={handleChange} style={styles.input} />
    </div>
  );
};

const styles = {
  container: {
    // border: '5px solid',
    margin: 'auto',
    marginTop: '15vh',
    width: '30%',
    padding: '10px',
    
  },
  label: {
    marginRight: '10px',
    fontSize: '16px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
};

export default InputField;
