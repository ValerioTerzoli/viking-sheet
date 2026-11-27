function addToggleCounters(obj){
    const array = obj.counters;
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
                if(!(obj.value === undefined)) obj.value = i;
            }
            else {
                array.forEach((element, j) => {
                    element.classList.toggle("active", j <= i);
                    if(!(obj.value === undefined)) obj.value = i + 1;
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
    value: 0,
    counters: [...document.querySelectorAll("#healthContainer li")]
};
addToggleCounters(HP);

//armor bar

let armor = {
    name: "Armor",
    counters: armorCounters = [...document.querySelectorAll("#armorContainer li")]
};
addToggleCounters(armor);

//statsBig

let statsBig = [
    {name: "Strength",
    value: 0,
    counters: [...document.querySelectorAll("#strengthCounters li")]},
    {name: "Knowledge",
    value: 0,
    counters: [...document.querySelectorAll("#knowledgeCounters li")]},
    {name: "Tenacity",
    value: 0,
    counters: [...document.querySelectorAll("#tenacityCounters li")]},
    {name: "Confidence",
    value: 0,
    counters: [...document.querySelectorAll("#confidenceCounters li")]},
    {name: "Lithe",
    value: 0,
    counters: [...document.querySelectorAll("#litheCounters li")]}
];

statsBig.forEach((obj) => addToggleCounters(obj));

//statsSmall

let statsSmall = [
    {name: "Precision",
    value: 0,
    counters: changeOrder("precisionCounters")},
    {name: "Athletics",
    value: 0,
    counters: changeOrder("athleticsCounters")},
    {name: "Brawl",
    value: 0,
    counters: changeOrder("brawlCounters")},
    {name: "Convince",
    value: 0,
    counters: changeOrder("convinceCounters")},
    {name: "Empathy",
    value: 0,
    counters: changeOrder("empathyCounters")},
    {name: "Hide",
    value: 0,
    counters: changeOrder("hideCounters")},
    {name: "Intimidate",
    value: 0,
    counters: changeOrder("intimidateCounters")},
    {name: "Awareness",
    value: 0,
    counters: changeOrder("awarenessCounters")},
    {name: "Performance",
    value: 0,
    counters: [...document.querySelectorAll("#performanceCounters li")]},
    {name: "Survival",
    value: 0,
    counters: [...document.querySelectorAll("#survivalCounters li")]},
    {name: "Sailing",
    value: 0,
    counters: [...document.querySelectorAll("#sailingCounters li")]},
    {name: "Lore",
    value: 0,
    counters: [...document.querySelectorAll("#loreCounters li")]},
    {name: "Craftsmanship",
    value: 0,
    counters: [...document.querySelectorAll("#craftsmanshipCounters li")]},
    {name: "Guile",
    value: 0,
    counters: [...document.querySelectorAll("#guileCounters li")]},
    {name: "Combat",
    value: 0,
    counters: [...document.querySelectorAll("#combatCounters li")]},
    {name: "Insight",
    value: 0,
    counters: [...document.querySelectorAll("#insightCounters li")]}
];

statsSmall.forEach((obj) => addToggleCounters(obj));

// Unified list of all counter groups from the object declarations
const allGroups = [
    { key: "health", obj: HP },
    { key: "armor", obj: armor },
    ...statsBig.map((obj, i) => ({ key: obj.name.toLowerCase(), obj })),
    ...statsSmall.map((obj, i) => ({ key: obj.name.toLowerCase(), obj })),
];

// --- SAVE ---
document.getElementById("save").addEventListener("click", () => {
    if (confirm("Save?")) {
        const data = {};

        allGroups.forEach(({ key, obj }) => {
            data[key] = obj.counters.filter(c => c.classList.contains("active")).length;
        });

        const textareas = document.querySelectorAll("#text textarea");
        data["text_0"] = textareas[0].value;
        data["text_1"] = textareas[1].value;

        data["shieldValue"] = document.getElementById("shieldValue").value;
        data["shieldCurrent"] = document.querySelector("#shieldDurabilityContainer #current").value;
        data["shieldMax"] = document.querySelector("#shieldDurabilityContainer #max").value;
        data["reflexCurrent"] = document.querySelector("#reflexContainer #current").value;
        data["reflexMax"] = document.querySelector("#reflexContainer #max").value;

        localStorage.setItem("pongersSheet", JSON.stringify(data));
    }
});

// --- RESTORE ---
function restore() {
    const raw = localStorage.getItem("pongersSheet");
    if (!raw) return;
    const data = JSON.parse(raw);

    allGroups.forEach(({ key, obj }) => {
        const count = data[key] || 0;
        obj.counters.forEach((c, i) => c.classList.toggle("active", i < count));
        obj.value = count;
    });

    const textareas = document.querySelectorAll("#text textarea");
    if (data["text_0"]) textareas[0].value = data["text_0"];
    if (data["text_1"]) textareas[1].value = data["text_1"];

    if (data["shieldValue"]) document.getElementById("shieldValue").value = data["shieldValue"];
    if (data["shieldCurrent"]) document.querySelector("#shieldDurabilityContainer #current").value = data["shieldCurrent"];
    if (data["shieldMax"]) document.querySelector("#shieldDurabilityContainer #max").value = data["shieldMax"];
    if (data["reflexCurrent"]) document.querySelector("#reflexContainer #current").value = data["reflexCurrent"];
    if (data["reflexMax"]) document.querySelector("#reflexContainer #max").value = data["reflexMax"];
}

restore();

// --- RESET ---
function reset() {
    allGroups.forEach(({ obj }) => {
        obj.counters.forEach(c => c.classList.remove("active", "hover"));
        obj.value = 0;
    });

    document.querySelectorAll("#sheet input[type='number']").forEach(input => input.value = "");
    document.querySelectorAll("#text textarea").forEach(ta => ta.value = "");

    localStorage.removeItem("pongersSheet");
    window.location.reload(true);
}

document.getElementById("reset").addEventListener("click", () => {
    if (confirm("Reset all values?")) reset();
});   



//dice roller
const display = document.getElementById("display");
const displayFinal = document.getElementById("displayFinal");
const newApproachCheckbox = document.getElementById("newApproach");

let exploded = 0;
function rollDice(n){
    let total = 0;
    if(n == 0) display.innerHTML += "0";
    else {
        for(let i = 0;i < n; i++) {
            const currentRoll = Math.floor(Math.random() * 10) + 1;
            const currentRollPrint = currentRoll === 10 ? '<span style="color:rgb(48, 222, 48)">10</span>' : `${currentRoll}`;
            total += currentRoll;
            if(!(i == n - 1)) display.innerHTML += `${currentRollPrint} + `;
            else display.innerHTML += `${currentRollPrint}`;
            if(currentRoll == 10) exploded++;
        }
    }
    return total;
}

function rollExploded() {
    let total = 0;
    let currentExploded = exploded;
    for(let isFirst = true;!(exploded == 0);isFirst = false) {
        if(!isFirst) display.innerHTML += " + ";
        total += rollDice(currentExploded);
        exploded = exploded - currentExploded;
        currentExploded = exploded;
    }
    return total;
}

function rollWithStats(statOne, statTwo) {
    display.innerHTML = `${statOne.name}: `;
    let total = rollDice(statOne.value);
    display.innerHTML += `\n${statTwo.name}: `;
    total += rollDice(statTwo.value);
    if(HP.value <= 24) {
        let adrenaline = 1;
        if(HP.value <=12) adrenaline++;
        if(HP.value <=6) adrenaline++;
        display.innerHTML += `\nAdrenaline: `;
        total += rollDice(adrenaline);
    }
    if(newApproachCheckbox.checked) {
        display.innerHTML += `\nNew Approach: `;
        total += rollDice(1);
    }
    if(!(exploded == 0)) {
        display.innerHTML += `\nExploded: `;
        total += rollExploded();
    }
    displayFinal.innerHTML = `Total: ${total}`;
    displayFinal.innerHTML += `\nIncrements: ${Math.floor(total / 10)}`;
}

function getStat(array, string) {
    array.find((element) => element.name === string);
}

let currentBigStat = statsBig[0];
document.getElementById("statOne").addEventListener("change", (e) => currentBigStat = statsBig.find((element) => element.name === e.target.value));

let currentSmallStat = statsSmall[0];
document.getElementById("statTwo").addEventListener("change", (e) => currentSmallStat = statsSmall.find((element) => element.name === e.target.value));

document.getElementById("rollBtn").addEventListener("click", () => rollWithStats(currentBigStat, currentSmallStat)); 
