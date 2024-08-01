document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.dynamic-text');
    const texts = ['Student', 'Developer', 'Traveler', 'Creator'];
    let index = 0;

    function changeText() {
        const text = texts[index];
        textElement.innerHTML = text.split('').map((char, i) => 
            `<span style="animation-delay:${i * 0.2}s">${char}</span>`
        ).join('');
        index = (index + 1) % texts.length;
        setTimeout(changeText, 4000);
    }

    changeText();
});


// script.js


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}