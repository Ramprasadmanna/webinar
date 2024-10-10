// ----------- FAQ JS Functions --------- //

const faqsQuestion = document.querySelectorAll('.faqQuestion');

faqsQuestion.forEach(e => {
  e.addEventListener('click', () => {
    let element = e.nextElementSibling;
    let currentHeight = element.style.maxHeight;
    let isCollapsed = currentHeight === '' || currentHeight === '0px';
    console.log(element.scrollHeight);
    element.style.maxHeight = isCollapsed ? `${element.scrollHeight}px` : '0px';
    element.style.margin = isCollapsed ? '16px 0' : '0px';
  })

});

// PopUp Countdown Timer

const startPopUpCountdown = () => {
  let countdownTime = 15 * 60;

  const countdownInterval = setInterval(() => {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    // document.querySelector('.number.hours p').textContent = String(hours).padStart(2, '0');
    document.querySelector('.Timer .minutes').textContent = String(minutes).padStart(2, '0');
    document.querySelector('.Timer .seconds').textContent = String(seconds).padStart(2, '0');

    countdownTime--;

    if (countdownTime < 0) {
      clearInterval(countdownInterval);
      document.querySelector('.Timer .minutes').textContent = '00';
      document.querySelector('.Timer .seconds').textContent = '00';
    }
  }, 1000);
}

startPopUpCountdown();
