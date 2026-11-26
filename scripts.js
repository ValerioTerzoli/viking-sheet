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

function changeOrder(string) {
    const arrOne = [...document.querySelectorAll("#" + string + " li")].splice(5);
    const arrTwo = [...document.querySelectorAll("#" + string + " li")].splice(0, 5);
    return [...arrOne, ...arrTwo];
}



//HP bar
let HP = {value: 0};
const healthCounters = [...document.querySelectorAll("#healthContainer li")];
addToggleCounters(healthCounters, HP);
//armor bar
const armorCounters = [...document.querySelectorAll("#armorContainer li")];
addToggleCounters(armorCounters);
//precision bar
let precision = {value: 0};
const precisionCounters = changeOrder("precisionCounters");
addToggleCounters(precisionCounters, precision);
//athletics bar
let athletics = {value: 0};
const athleticsCounters = changeOrder("athleticsCounters");
addToggleCounters(athleticsCounters, athletics);
//brawl bar
let brawl = {value: 0};
const brawlCounters = changeOrder("brawlCounters");
addToggleCounters(brawlCounters, brawl);
//convince bar
let convince = {value: 0};
const convinceCounters = changeOrder("convinceCounters");
addToggleCounters(convinceCounters, convince);
//empathy bar
let empathy = {value: 0};
const empathyCounters = changeOrder("empathyCounters");
addToggleCounters(empathyCounters, empathy);
//hide bar
let hide = {value: 0};
const hideCounters = changeOrder("hideCounters");
addToggleCounters(hideCounters, hide);
//intimidate bar
let intimidate = {value: 0};
const intimidateCounters = changeOrder("intimidateCounters");
addToggleCounters(intimidateCounters, intimidate);
//awareness bar
let awareness = {value: 0};
const awarenessCounters = changeOrder("awarenessCounters");
addToggleCounters(awarenessCounters, awareness);
//strength bar
let strength = {value: 0};
const strengthCounters = [...document.querySelectorAll("#strengthCounters li")];
addToggleCounters(strengthCounters, strength);
//knowledge bar
let knowledge = {value: 0};
const knowledgeCounters = [...document.querySelectorAll("#knowledgeCounters li")];
addToggleCounters(knowledgeCounters, knowledge);
//tenacity bar
let tenacity = {value: 0};
const tenacityCounters = [...document.querySelectorAll("#tenacityCounters li")];
addToggleCounters(tenacityCounters, tenacity);
//confidence bar
let confidence = {value: 0};
const confidenceCounters = [...document.querySelectorAll("#confidenceCounters li")];
addToggleCounters(confidenceCounters, confidence);
//lithe bar
let lithe = {value: 0};
const litheCounters = [...document.querySelectorAll("#litheCounters li")];
addToggleCounters(litheCounters, lithe);
//performance bar
let performance = {value: 0};
const performanceCounters = [...document.querySelectorAll("#performanceCounters li")];
addToggleCounters(performanceCounters, performance);
//survival bar
let survival = {value: 0};
const survivalCounters = [...document.querySelectorAll("#survivalCounters li")];
addToggleCounters(survivalCounters, survival);
//sailing bar
let sailing = {value: 0};
const sailingCounters = [...document.querySelectorAll("#sailingCounters li")];
addToggleCounters(sailingCounters, sailing);
//lore bar
let lore = {value: 0};
const loreCounters = [...document.querySelectorAll("#loreCounters li")];
addToggleCounters(loreCounters, lore);
//craftsmanship bar
let craftsmanship = {value: 0};
const craftsmanshipCounters = [...document.querySelectorAll("#craftsmanshipCounters li")];
addToggleCounters(craftsmanshipCounters, craftsmanship);
//guile bar
let guile = {value: 0};
const guileCounters = [...document.querySelectorAll("#guileCounters li")];
addToggleCounters(guileCounters, guile);
//combat bar
let combat = {value: 0};
const combatCounters = [...document.querySelectorAll("#combatCounters li")];
addToggleCounters(combatCounters, combat);
//insight bar
let insight = {value: 0};
const insightCounters = [...document.querySelectorAll("#insightCounters li")];
addToggleCounters(insightCounters, insight);






// --- SAVE ---
document.getElementById("save").addEventListener("click", () => {
    if (confirm("Save?")) {
    const data = {};

    // Collect active counts for every counter group
    const groups = [
        ["health", healthCounters],
        ["armor", armorCounters],
        ["precision", precisionCounters],
        ["athletics", athleticsCounters],
        ["brawl", brawlCounters],
        ["convince", convinceCounters],
        ["empathy", empathyCounters],
        ["hide", hideCounters],
        ["intimidate", intimidateCounters],
        ["awareness", awarenessCounters],
        ["strength", strengthCounters],
        ["knowledge", knowledgeCounters],
        ["tenacity", tenacityCounters],
        ["confidence", confidenceCounters],
        ["lithe", litheCounters],
        ["performance", performanceCounters],
        ["survival", survivalCounters],
        ["sailing", sailingCounters],
        ["lore", loreCounters],
        ["craftsmanship", craftsmanshipCounters],
        ["guile", guileCounters],
        ["combat", combatCounters],
        ["insight", insightCounters],
    ];

    groups.forEach(([key, counters]) => {
        data[key] = counters.filter(c => c.classList.contains("active")).length;
    });

    // Textareas
    const textareas = document.querySelectorAll("#text textarea");
    data["text_0"] = textareas[0].value;
    data["text_1"] = textareas[1].value;

    // Shield / reflex inputs
    data["shieldValue"] = document.getElementById("shieldValue").value;
    data["shieldCurrent"] = document.querySelector("#shieldDurabilityContainer #current").value;
    data["shieldMax"] = document.querySelector("#shieldDurabilityContainer #max").value;
    data["reflexCurrent"] = document.querySelector("#reflexContainer #current").value;
    data["reflexMax"] = document.querySelector("#reflexContainer #max").value;

    localStorage.setItem("pongersSheet", JSON.stringify(data));
}});

// --- RESTORE (run after all counters are initialized) ---
function restore() {
    const raw = localStorage.getItem("pongersSheet");
    if (!raw) return;
    const data = JSON.parse(raw);

    const groups = [
        ["health", healthCounters],
        ["armor", armorCounters],
        ["precision", precisionCounters],
        ["athletics", athleticsCounters],
        ["brawl", brawlCounters],
        ["convince", convinceCounters],
        ["empathy", empathyCounters],
        ["hide", hideCounters],
        ["intimidate", intimidateCounters],
        ["awareness", awarenessCounters],
        ["strength", strengthCounters],
        ["knowledge", knowledgeCounters],
        ["tenacity", tenacityCounters],
        ["confidence", confidenceCounters],
        ["lithe", litheCounters],
        ["performance", performanceCounters],
        ["survival", survivalCounters],
        ["sailing", sailingCounters],
        ["lore", loreCounters],
        ["craftsmanship", craftsmanshipCounters],
        ["guile", guileCounters],
        ["combat", combatCounters],
        ["insight", insightCounters],
    ];

    groups.forEach(([key, counters]) => {
        const count = data[key] || 0;
        counters.forEach((c, i) => c.classList.toggle("active", i < count));
        // Also update the value object if you have one
    });

    // Textareas
    const textareas = document.querySelectorAll("#text textarea");
    if (data["text_0"]) textareas[0].value = data["text_0"];
    if (data["text_1"]) textareas[1].value = data["text_1"];

    // Inputs
    if (data["shieldValue"]) document.getElementById("shieldValue").value = data["shieldValue"];
    if (data["shieldCurrent"]) document.querySelector("#shieldDurabilityContainer #current").value = data["shieldCurrent"];
    if (data["shieldMax"]) document.querySelector("#shieldDurabilityContainer #max").value = data["shieldMax"];
    if (data["reflexCurrent"]) document.querySelector("#reflexContainer #current").value = data["reflexCurrent"];
    if (data["reflexMax"]) document.querySelector("#reflexContainer #max").value = data["reflexMax"];
}

restore();   

// --- RESET ---
function reset() {
    const groups = [
        healthCounters, armorCounters, precisionCounters,
        athleticsCounters, brawlCounters, convinceCounters,
        empathyCounters, hideCounters, intimidateCounters,
        awarenessCounters, strengthCounters, knowledgeCounters,
        tenacityCounters, confidenceCounters, litheCounters,
        performanceCounters, survivalCounters, sailingCounters,
        loreCounters, craftsmanshipCounters, guileCounters,
        combatCounters, insightCounters,
    ];

    groups.forEach(counters => {
        counters.forEach(c => c.classList.remove("active", "hover"));
    });

    // Reset value objects
    [HP, precision, athletics, brawl, convince, empathy,
     hide, intimidate, awareness, strength, knowledge,
     tenacity, confidence, lithe, performance, survival,
     sailing, lore, craftsmanship, guile, combat, insight
    ].forEach(obj => obj.value = 0);

    // Reset inputs
    const inputs = document.querySelectorAll("#sheet input[type='number']");
    inputs.forEach(input => input.value = "");

    // Reset textareas
    document.querySelectorAll("#text textarea").forEach(ta => ta.value = "");

    // Clear saved data
    localStorage.removeItem("pongersSheet");
}

document.getElementById("reset").addEventListener("click", () => {
    if (confirm("Reset all values?")) reset();
});