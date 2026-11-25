let HP;

const healthCounters = [...document.querySelectorAll("li")].toReversed();
healthCounters.forEach((counter, i) => {
    counter.addEventListener("mouseover", () => {
        healthCounters.forEach((element, j) => element.classList.toggle("hover", j <= i));
    });
    counter.addEventListener("mouseout", () => {
        healthCounters.forEach((element) => element.classList.remove("hover"))
    });
    counter.addEventListener("click", () => {
        healthCounters.forEach((element, j) => {
            element.classList.toggle("active", j <= i);
            HP = i;
        });
    })
});