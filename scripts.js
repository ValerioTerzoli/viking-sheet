function addToggleCounters(array, obj){
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
                if(!(obj === undefined)) obj.value = i;
            }
            else {
                array.forEach((element, j) => {
                    element.classList.toggle("active", j <= i);
                    if(!(obj === undefined)) obj.value = i + 1;
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
let HP = {
    name: "HP",
    value: 0
};
const healthCounters = [...document.querySelectorAll("#healthContainer li")];
addToggleCounters(healthCounters, HP);
//armor bar
const armorCounters = [...document.querySelectorAll("#armorContainer li")];
addToggleCounters(armorCounters);
//statsBig
const strengthCounters = [...document.querySelectorAll("#strengthCounters li")];
const knowledgeCounters = [...document.querySelectorAll("#knowledgeCounters li")];
const tenacityCounters = [...document.querySelectorAll("#tenacityCounters li")];
const confidenceCounters = [...document.querySelectorAll("#confidenceCounters li")];
const litheCounters = [...document.querySelectorAll("#litheCounters li")];
let statsBig = [
    {name: "Strength",
    value: 0},
    {name: "Knowledge",
    value: 0},
    {name: "Tenacity",
    value: 0},
    {name: "Confidence",
    value: 0},
    {name: "Lithe",
    value: 0}
];
statsBig.forEach((obj) => {
    switch (obj.name) {
        case "Strength":
            addToggleCounters(strengthCounters, obj);
            break;
        case "Knowledge":
            addToggleCounters(knowledgeCounters, obj);
            break;
        case "Tenacity":
            addToggleCounters(tenacityCounters, obj);
            break;
        case "Confidence":
            addToggleCounters(confidenceCounters, obj);
            break;
        case "Lithe":
            addToggleCounters(litheCounters, obj);
            break;
    }

})

//statsSmall
let statsSmall = [
    {name: "Precision",
    value: 0},
    {name: "Athletics",
    value: 0},

];



//precision bar
let precision = {
    name: "Precision",
    value: 0
};
const precisionCounters = changeOrder("precisionCounters");
addToggleCounters(precisionCounters, precision);
//athletics bar
let athletics = {
    name: "Athletics",
    value: 0
};
const athleticsCounters = changeOrder("athleticsCounters");
addToggleCounters(athleticsCounters, athletics);
//brawl bar
let brawl = {
    name: "Brawl",
    value: 0
};
const brawlCounters = changeOrder("brawlCounters");
addToggleCounters(brawlCounters, brawl);
//convince bar
let convince = {
    name: "Convince",
    value: 0
};
const convinceCounters = changeOrder("convinceCounters");
addToggleCounters(convinceCounters, convince);
//empathy bar
let empathy = {
    name: "Empathy",
    value: 0
};
const empathyCounters = changeOrder("empathyCounters");
addToggleCounters(empathyCounters, empathy);
//hide bar
let hide = {
    name: "Hide",
    value: 0
};
const hideCounters = changeOrder("hideCounters");
addToggleCounters(hideCounters, hide);
//intimidate bar
let intimidate = {
    name: "Intimidate",
    value: 0
};
const intimidateCounters = changeOrder("intimidateCounters");
addToggleCounters(intimidateCounters, intimidate);
//awareness bar
let awareness = {
    name: "Awareness",
    value: 0
};
const awarenessCounters = changeOrder("awarenessCounters");
addToggleCounters(awarenessCounters, awareness);
//performance bar
let performance = {
    name: "Performance",
    value: 0
};
const performanceCounters = [...document.querySelectorAll("#performanceCounters li")];
addToggleCounters(performanceCounters, performance);
//survival bar
let survival = {
    name: "Survival",
    value: 0
};
const survivalCounters = [...document.querySelectorAll("#survivalCounters li")];
addToggleCounters(survivalCounters, survival);
//sailing bar
let sailing = {
    name: "Sailing",
    value: 0
};
const sailingCounters = [...document.querySelectorAll("#sailingCounters li")];
addToggleCounters(sailingCounters, sailing);
//lore bar
let lore = {
    name: "Lore",
    value: 0
};
const loreCounters = [...document.querySelectorAll("#loreCounters li")];
addToggleCounters(loreCounters, lore);
//craftsmanship bar
let craftsmanship = {
    name: "Craftsmanship",
    value: 0
};
const craftsmanshipCounters = [...document.querySelectorAll("#craftsmanshipCounters li")];
addToggleCounters(craftsmanshipCounters, craftsmanship);
//guile bar
let guile = {
    name: "Guile",
    value: 0
};
const guileCounters = [...document.querySelectorAll("#guileCounters li")];
addToggleCounters(guileCounters, guile);
//combat bar
let combat = {
    name: "Combat",
    value: 0
};
const combatCounters = [...document.querySelectorAll("#combatCounters li")];
addToggleCounters(combatCounters, combat);
//insight bar
let insight = {
    name: "Insight",
    value: 0
};
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



//dice roller
const display = document.getElementById("display");
const displayFinal = document.getElementById("displayFinal");

let exploded = 0;
function rollDice(n){
    let total = 0;
    for(let i = 0;i < n; i++) {
        const currentRoll = Math.floor(Math.random() * 10) + 1;
        total += currentRoll;
        if(!(i == n - 1)) display.textContent += `${currentRoll} + `;
        else display.textContent += `${currentRoll}`;
        if(currentRoll == 10) exploded++;
    }
    return total;
}

function rollWithStats(statOne, statTwo) {
    display.textContent = `${statOne.name}: `;
    let total = rollDice(statOne.value);
    display.textContent += `/n${statTwo.name}: `;
    total += rollDice(statTwo.value);
    if(!(exploded == 0)) {
        display.textContent += `/NExploded: `;
        total += rollDice(exploded);
        exploded = 0;
    }
    displayFinal.textContent = `Increments: ${Math.floor(total / 10)}`;
}
