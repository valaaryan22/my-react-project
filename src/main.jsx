// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>

//       <App />
//   </StrictMode>,

// )
// // json-server --watch db.json
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <App />
  </StrictMode>,

)
// json-server --watch db.json