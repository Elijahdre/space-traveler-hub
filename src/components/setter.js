import React from 'react';

const Setter = (initialValue) => {
  const [values, setvalues] = React.useState(initialValue);

  return {
    values,
    setvalues,
  };
};

export default Setter;
