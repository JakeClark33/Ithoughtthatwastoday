let data = {};
const dataStore = window.localStorage;
const dsKey = 'schedule';
const dateTimeEl = document.getElementById("currentDay");
const saveBtnEls = document.querySelectorAll('.saveBtn');

const renderTime = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    dateTimeEl.textContent = date.toLocaleString("en-US", options);

    setTimeout("renderTime()", 1000);
};

const renderColors = () => {
    const date = new Date();
    const hour = date.getHours();

    for (let i = 7; i < 19; i++) {
        const el = document.getElementById(`text-entry${i}`);

        console.log(hour);
        let color = 'lightgrey';

        if (hour === i) {
            color = 'red';
        } else if (hour < i) {
            color = 'green';
        }

        el.style.backgroundColor = color;
    }
}

const load = () => {
    data = JSON.parse(dataStore.getItem(dsKey));
    console.log(data);
    for (const [key, value] of Object.entries(data)) {
        const el = document.getElementById(`text-entry${key}`);
        el.textContent = value;
    }
}

const save = (event) => {
    const hour = event.target.parentElement.id;
    data[hour] = document.getElementById(`text-entry${hour}`).value;
    dataStore.setItem(dsKey, JSON.stringify(data));
    alert('Saved.');
}

const initiateDataStore = () => {
    const emptySchedule = {7: "",8: "",9: "",10: "",11: "",12: "",13: "",14: "",15: "",16: "",17: "",18: ""};
    if (!dataStore.getItem(dsKey)) dataStore.setItem(dsKey, JSON.stringify(emptySchedule));
}

const main = () => {
    initiateDataStore();
    renderTime();
    load();
    renderColors();
    
    saveBtnEls.forEach(el => {
        el.addEventListener('click', save);
    });
}

main();
