export const changeTime = () => {
  const date = document.querySelector('[data-time]').textContent;
  const time = document.querySelector('[data-changeTime]');
  const res = `${date} ${time.textContent}`;
  let sec = (new Date(Date.parse(res)).getTime());
  
  setInterval(() => {
    sec += 1000;
    const dateTime = new Date(sec).toString().substring(16, 25);
    console.log(dateTime);
    let tempTime = dateTime;
    time.textContent = tempTime;
  }, 1000);
};
