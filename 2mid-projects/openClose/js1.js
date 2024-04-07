const but = document.querySelector('button')
const text = document.querySelector('.hide')
const videoContainer = document.querySelector('.video-container')

but.addEventListener('click', function() {
  text.classList.toggle('hide');
  videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';

  if (text.classList.contains('hide')) {
    but.textContent = "open";
    document.body.style.backgroundColor = "#f0f0f0"; /* Placeholder background color */
  } else {
    but.textContent = "close";
    document.body.style.backgroundColor = "initial"; /* Revert to original background */
  }
});