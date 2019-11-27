var closeBtn = document.querySelector('#close-btn');
var navigation = document.querySelector('.nav-ul-icons');

closeBtn.addEventListener('click', closeUserWelcome);
navigation.addEventListener('click', changeDisplay);

function closeUserWelcome() {
  var userWelcomeSection = document.querySelector('.section-div-user-welcome');

  userWelcomeSection.classList.add('display-hidden');
}

function changeDisplay(event) {
  var dashboard = document.querySelector('#dashboard');
  var mainDisplay = document.querySelector('main');
  var profile = document.querySelector('#profile');
  var transactions = document.querySelector('#transactions');
  var transactionsDisplay = document.querySelector('.transactions-display');

  if (event.target.id === 'transactions') {
    transactions.classList.add('left-teal-highlight');
    dashboard.classList.remove('left-teal-highlight');
    profile.classList.remove('left-teal-highlight')
    mainDisplay.classList.add('display-hidden');
    // profile.classList.add('display-hidden');
    transactionsDisplay.classList.remove('display-hidden');

  } else if (event.target.id === 'dashboard') {
    transactions.classList.remove('left-teal-highlight');
    dashboard.classList.add('left-teal-highlight');
    profile.classList.remove('left-teal-highlight')
    mainDisplay.classList.remove('display-hidden');
    // profile.classList.add('display-hidden');
    transactionsDisplay.classList.add('display-hidden');

  } else {
    profile.classList.add('left-teal-highlight');
    transactions.classList.remove('left-teal-highlight');
    dashboard.classList.remove('left-teal-highlight');
    mainDisplay.classList.add('display-hidden');
    profile.classList.remove('display-hidden');
    transactionsDisplay.classList.add('display-hidden');
  }
}
