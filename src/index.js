import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter } from 'react-router-dom';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpAaVtdX2NLfUNzT2dedV90ZCQ7a15RRnVfQV1mSXtWd0dhXH9bcA==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRGQmdWfFN0RnNcdVp3flRCcC0sT3RfQF5jSn5WdkBmWH1cdXZURg==;ORg4AjUWIQA/Gnt2VVhkQlFacldJWXxNYVF2R2BJelR0c19HZEwgOX1dQl9gSX1Tc0VmXH5ccnFWRWA=;MTI1NjQ2NkAzMjMwMmUzNDJlMzBJMGt3S1BmdW1nUzhxUUpMbzFFUnljUVo2eFdRNTFrcVFoQi9mb1BXNGNzPQ==;MTI1NjQ2N0AzMjMwMmUzNDJlMzBHQXgydTE5SUtPSGZPTmhKeC9vVTh2UVdBTjNiMC83ZWdMdUtGeU9xUVBjPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmdWekx0RWFab1t6cFJMYVhBNQtUQF1hSn5QdkBjXHpfcnZQTmdZ;MTI1NjQ2OUAzMjMwMmUzNDJlMzBsV1ZHNmUrOElWZllPUCtBUWpqZFRKQVZ6STRXNUVnVjIvVGFCRDVTUDJBPQ==;MTI1NjQ3MEAzMjMwMmUzNDJlMzBiK1JwZ3VwbElFV2tjbWpidTJaSmg1bU9TLzRLSnFGeDBDeUk2djludlEwPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJWXxNYVF2R2BJelR0c19HZEwgOX1dQl9gSX1Tc0VmXH5ccnJRRWE=;MTI1NjQ3MkAzMjMwMmUzNDJlMzBXR1A3RU04RnNneVk1eEF3cjQwOGdZQlQ1Q0dBYjlQa29xSEVmeTVBSW1vPQ==;MTI1NjQ3M0AzMjMwMmUzNDJlMzBBN3JLT3QwamxYcGY3T3Jrd3lHWDFTWXFYZ3hOKzM1ZXdTWFN2SUxvZHNJPQ==;MTI1NjQ3NEAzMjMwMmUzNDJlMzBsV1ZHNmUrOElWZllPUCtBUWpqZFRKQVZ6STRXNUVnVjIvVGFCRDVTUDJBPQ==');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
