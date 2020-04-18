// flip img
export const flipImg = () => {
  document.querySelectorAll('.card-container').forEach(elem => {
    elem.addEventListener('click', (event) => {
      if (event.target.alt === 'rotate') {
        elem.classList.add('transform');
      }
    });
    elem.addEventListener('mouseleave', () => {
      elem.classList.remove('transform');
    });
  });
};
