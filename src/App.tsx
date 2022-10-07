import React, { ReactElement } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

function App(): ReactElement {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Code below will be normalized. */}
      <h1>Hello World</h1>
    </React.Fragment>
  );
}

export default App;
