
  const field = document.querySelector('#field');
  const ball = document.querySelector('#ball');
  const fieldCoordinates = field.getBoundingClientRect();
  
  field.addEventListener('click', moveTheBall);

  function moveTheBall(ev) {
  const halfSize = ball.offsetWidth / 2;
  console.log(Math.max(halfSize, ev.clientX - fieldCoordinates.x) + 'px')
  ball.style.left = `${Math.max(halfSize, ev.clientX - fieldCoordinates.x - halfSize)}px`;
  ball.style.top = `${Math.max(halfSize, ev.clientY - fieldCoordinates.y - halfSize)}px`
  }
