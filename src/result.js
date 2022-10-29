import React from 'react'
import './App.css'
import Rating from '@mui/material/Rating';

export default function Result() {
  return (
    <div className='result'>
      <a href='/' className='exit-btn'>❌</a>
    <div className='result_container'>
      <span>Your Result:</span>
      <p>Test time: 00:02:44, avrage users 00:10:14</p>
      <br/>
      <p><span>Your IQ is 80.</span> This corresponds to a below avrage level IQ. In tis test you have <span>3 correct</span> </p>
      <p><span>aswers from 5.</span> This is not a very good result for your <span>age 11.</span></p>
      <br/>
      <span> Buccle Hit</span>
      <p>Play Popular Games online in your Browser, No installation Required</p>
      <br/>
      
      <p>Please note that the first four questions of thr test were only the practice questions and they</p>
      <p>do not count towards the final result.</p>
    </div>
    <div className='rating'>
    <Rating name="half-rating" defaultValue={4.3} precision={0.5} />
    <p>4.3</p>
    </div>
    </div>
  )
}
