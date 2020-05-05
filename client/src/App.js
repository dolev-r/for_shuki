import React from 'react';
import { ExcelFile } from './components/ExcelFile'
import { FileUploader } from './FileUploader'


const backend_url = "http://192.168.1.142:5000/api"

async function postData(data = {}) {
  // Default options are marked with *
  
  const response = await fetch(backend_url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  
  return response.json(); // parses JSON response into native JavaScript objects
}



export default class App extends React.Component
{
  componentDidMount()
  {
    console.log(postData({"a": 3}));
  }
  render()
  {
    return (
      <div>
        <ExcelFile/>
        <ExcelFile/>
      </div>
    );
  }
}