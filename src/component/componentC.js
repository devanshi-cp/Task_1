// DisplayValue.js
import React from 'react';
import { useSelector } from 'react-redux';

const DisplayValue = () => {
  const storedValue = useSelector((state) => state.value);

  return (
    <div style={styles.container}>
      <label style={styles.label}>Display Value:</label>
      <div style={styles.display}>{storedValue}</div>
    </div>
  );
};

const styles = {
  container: {
    // border: '5px solid',
    margin: 'auto',
    marginTop: '15vh',
    width: '50%',
    padding: '10px',
  },
  label: {
    marginRight: '10px',
    fontSize: '16px',
  },
  display: {
    khgydfszxmarginTop: '10px',
    padding: '8px',
    fontSize: '16px',
    border: '3px solid',
    borderRadius: '4px',
    
  },
};

export default DisplayValue;
