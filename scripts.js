//Function
function addToggleCounters(array, n){
    array.forEach((counter, i) => {
        counter.addEventListener("mouseenter", () => {
            array.forEach((element, j) => element.classList.toggle("hover", j <= i));
        });
        counter.addEventListener("mouseleave", () => {
            array.forEach((element) => element.classList.remove("hover"))
        });
        counter.addEventListener("click", () => {
            const isLastActive =
                counter.classList.contains("active") &&
                (i === array.length - 1 || !array[i + 1].classList.contains("active"));
            if(isLastActive){
                array[i].classList.remove("active");
                if(!(n === undefined)) n.value = i;
            }
            else {
                array.forEach((element, j) => {
                    element.classList.toggle("active", j <= i);
                    if(!(n === undefined)) n.value = i + 1;
                });
            }
        })
    });
}


//HP bar
let HP = {value: 0};
const healthCounters = [...document.querySelectorAll("#healthContainer li")].toReversed();
addToggleCounters(healthCounters, HP);
//Armor bar
const armorCounters = [...document.querySelectorAll("#armorContainer li")];
addToggleCounters(armorCounters);
//Precision bar
let precision = 0;
const precisionCountersOne = [...document.querySelectorAll("#precisionCounters li")].splice(5);
const precisionCountersTwo = [...document.querySelectorAll("#precisionCounters li")].splice(0, 5);
const precisionCounters = [...precisionCountersOne, ...precisionCountersTwo];
addToggleCounters(precisionCounters, precision);





