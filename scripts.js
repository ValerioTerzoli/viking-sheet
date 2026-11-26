//HP bar
let HP;
const healthCounters = [...document.querySelectorAll("#healthContainer li")].toReversed();
healthCounters.forEach((counter, i) => {
    counter.addEventListener("mouseover", () => {
        healthCounters.forEach((element, j) => element.classList.toggle("hover", j <= i));
    });
    counter.addEventListener("mouseout", () => {
        healthCounters.forEach((element) => element.classList.remove("hover"))
    });
    counter.addEventListener("click", () => {
        const isLastHealth =
            counter.classList.contains("active") &&
            (i === healthCounters.length - 1 || !healthCounters[i + 1].classList.contains("active"));
        if(isLastHealth){
            healthCounters[i].classList.remove("active");
            HP = i;
            console.log(HP);
        }
        else {
            healthCounters.forEach((element, j) => {
                element.classList.toggle("active", j <= i);
                HP = i + 1;
                console.log(HP);
            });
        }
    })
});

//Armor bar
const armorCounters = [...document.querySelectorAll("#armorContainer li")];
armorCounters.forEach((counter, i) => {
    counter.addEventListener("mouseover", () => {
        armorCounters.forEach((element, j) => element.classList.toggle("hover", j <= i));
    });
    counter.addEventListener("mouseout", () => {
        armorCounters.forEach((element) => element.classList.remove("hover"))
    });
    counter.addEventListener("click", () => {
        const isLastArmor =
            counter.classList.contains("active") &&
            (i === armorCounters.length - 1 || !armorCounters[i + 1].classList.contains("active"));
        if(isLastArmor) armorCounters[i].classList.remove("active")
        else {
            armorCounters.forEach((element, j) => element.classList.toggle("active", j <= i));
        }
    });
});