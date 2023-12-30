import React from 'react';
import ComponentB from './componentB';
import ComponentC from './componentC';

const ComponentA = () => {
  return (
    <div>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default ComponentA;