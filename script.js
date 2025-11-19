let progress = 0;
const h2 = document.querySelector("h2");
const inner = document.querySelector(".inner");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  const userTime = 50 + Math.floor(Math.random() * 50);
  const time = setInterval(function () {
    progress++;
    h2.innerHTML = progress + "%";
    inner.style.width = progress + "%";
  }, userTime);

  setTimeout(function () {
    clearInterval(time);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
    console.log("Your file will be Downloaded in", userTime / 10, "seconds");
  }, userTime * 100);
});
