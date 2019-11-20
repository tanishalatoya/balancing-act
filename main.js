var closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', closeUserWelcome);

function closeUserWelcome() {
  var userWelcomeSection = document.querySelector('.section-div-user-welcome');

  userWelcomeSection.classList.add('display-hidden');
}
