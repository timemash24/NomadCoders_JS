const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();
  const eve = new Date(date.getFullYear(), 11, 25, 0, 0, 0);
  const remain = eve.getTime() - Date.now();

  const day = String(Math.floor(remain / (1000 * 60 * 60 * 24)));
  const hour = String(Math.floor((remain / (1000 * 60 * 60)) % 24));
  const min = String(Math.floor((remain / (1000 * 60)) % 60));
  const sec = String(Math.floor((remain / 1000) % 60));

  clockTitle.innerText = `${day}d ${hour.padStart(2, "0")}h ${min.padStart(
    2,
    "0"
  )}m ${sec.padStart(2, "0")}s`;
}

getClock();
setInterval(getClock, 1000);
