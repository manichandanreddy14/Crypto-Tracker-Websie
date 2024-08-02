import React from 'react'
 import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
 import './styles.css'
 let mybutton = document.getElementById("myBtn");
function BackToTop() {
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  return (
    <div className='backToTop' id='myBtn' onClick={()=>topFunction()}>
    <ArrowUpwardIcon/>
    </div>
  )
}

export default BackToTop;
