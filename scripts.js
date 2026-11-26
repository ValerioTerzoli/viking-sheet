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
//precision bar
let precision = 0;
const precisionCountersOne = [...document.querySelectorAll("#precisionCounters li")].splice(5);
const precisionCountersTwo = [...document.querySelectorAll("#precisionCounters li")].splice(0, 5);
const precisionCounters = [...precisionCountersOne, ...precisionCountersTwo];
addToggleCounters(precisionCounters, precision);
//athletics bar
let athletics = 0;
const athleticsCountersOne = [...document.querySelectorAll("#athleticsCounters li")].splice(5);
const athleticsCountersTwo = [...document.querySelectorAll("#athleticsCounters li")].splice(0, 5);
const athleticsCounters = [...athleticsCountersOne, ...athleticsCountersTwo];
addToggleCounters(athleticsCounters, athletics);
//brawl bar
let brawl = 0;
const brawlCountersOne = [...document.querySelectorAll("#brawlCounters li")].splice(5);
const brawlCountersTwo = [...document.querySelectorAll("#brawlCounters li")].splice(0, 5);
const brawlCounters = [...brawlCountersOne, ...brawlCountersTwo];
addToggleCounters(brawlCounters, brawl);
//convince bar
let convince = 0;
const convinceCountersOne = [...document.querySelectorAll("#convinceCounters li")].splice(5);
const convinceCountersTwo = [...document.querySelectorAll("#convinceCounters li")].splice(0, 5);
const convinceCounters = [...convinceCountersOne, ...convinceCountersTwo];
addToggleCounters(convinceCounters, convince);
//empathy bar
let empathy = 0;
const empathyCountersOne = [...document.querySelectorAll("#empathyCounters li")].splice(5);
const empathyCountersTwo = [...document.querySelectorAll("#empathyCounters li")].splice(0, 5);
const empathyCounters = [...empathyCountersOne, ...empathyCountersTwo];
addToggleCounters(empathyCounters, empathy);
//hide bar
let hide = 0;
const hideCountersOne = [...document.querySelectorAll("#hideCounters li")].splice(5);
const hideCountersTwo = [...document.querySelectorAll("#hideCounters li")].splice(0, 5);
const hideCounters = [...hideCountersOne, ...hideCountersTwo];
addToggleCounters(hideCounters, hide);
//intimidate bar
let intimidate = 0;
const intimidateCountersOne = [...document.querySelectorAll("#intimidateCounters li")].splice(5);
const intimidateCountersTwo = [...document.querySelectorAll("#intimidateCounters li")].splice(0, 5);
const intimidateCounters = [...intimidateCountersOne, ...intimidateCountersTwo];
addToggleCounters(intimidateCounters, intimidate);
//awareness bar
let awareness = 0;
const awarenessCountersOne = [...document.querySelectorAll("#awarenessCounters li")].splice(5);
const awarenessCountersTwo = [...document.querySelectorAll("#awarenessCounters li")].splice(0, 5);
const awarenessCounters = [...awarenessCountersOne, ...awarenessCountersTwo];
addToggleCounters(awarenessCounters, awareness);
//strength bar
let strength = 0;
const strengthCounters = [...document.querySelectorAll("#strengthCounters li")];
addToggleCounters(strengthCounters, strength);
//knowledge bar
let knowledge = 0;
const knowledgeCounters = [...document.querySelectorAll("#knowledgeCounters li")];
addToggleCounters(knowledgeCounters, knowledge);
//tenacity bar
let tenacity = 0;
const tenacityCounters = [...document.querySelectorAll("#tenacityCounters li")];
addToggleCounters(tenacityCounters, tenacity);
//confidence bar
let confidence = 0;
const confidenceCounters = [...document.querySelectorAll("#confidenceCounters li")];
addToggleCounters(confidenceCounters, confidence);
//lithe bar
let lithe = 0;
const litheCounters = [...document.querySelectorAll("#litheCounters li")];
addToggleCounters(litheCounters, lithe);






