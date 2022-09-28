import React from 'react';

const Setter = (initialValue) => {
  const [values, setValues] = React.useState(initialValue);

  return {
    values,
    setValues,
  };
};

export default Setter;
