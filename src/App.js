import React from 'react';
import './App.css';


window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img')  // $('img')[0]
          img.onload = imageIsLoaded
          img.src = URL.createObjectURL(this.files[0]) // set src to blob url
      }
  })
})

function imageIsLoaded(e) {
}

export default function App() {
  return (
    <div className="App">
      <input type='file' />
      <br/>
      <br/>
      <img alt="upload" width={800} />
    </div>
  )
}
