const typed = new Typed(".multi-text", {
  strings: [
    "Top Computer Science",
    "Top Marketing & Business",
    "Top Data Science",
    "Top Math & Logic",
  ],
  typeSpeed: 200,
  backSpeed: 200,
  typeDelay: 3000,
  loop: true,
});
function dynamicCount(div, startCount, endCount) {
  let count = startCount;
  const interval = 100;
  const intervalId = setInterval(() => {
    div.textContent = count + "+";
    console.log(`Counter ${div.id}: ${count}`);
    if (count >= endCount) {
      clearInterval(intervalId);
    }
    count++;
  }, interval);
}
window.onload = () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const startCount = parseInt(counter.getAttribute("data-start"), 10);
    const endCount = parseInt(counter.getAttribute("data-end"), 10);
    dynamicCount(counter, startCount, endCount);
  });
};
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
