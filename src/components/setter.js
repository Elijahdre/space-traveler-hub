import React from 'react';

const setter = () => {
  const [values, setvalues] = React.useState({});

  return {
    values,
    setvalues
  }
}

export default setter