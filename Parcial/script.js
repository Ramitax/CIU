const modalModify = document.getElementById('modify');
const modalCreate = document.getElementById('create');
const buttonChanges = document.getElementById('save-changes');
let indexOfTable = 2;

const addSeason = (index) => {
    const seasonMax = document.getElementById(`season-max${index}`);
    const seasonActually = document.getElementById(`season-actually${index}`);
    const percentage = document.getElementById(`percentage${index}`);
    const seasonMaxValue = parseFloat(seasonMax.innerHTML);
    const seasonActuallyValue = parseFloat(seasonActually.innerHTML);
    if( seasonActuallyValue < seasonMaxValue) {
        seasonActually.innerHTML=  seasonActuallyValue + 1;
        percentageAux = ( (seasonActuallyValue + 1) / seasonMaxValue) * 100;
        percentage.innerHTML = percentageAux.toFixed() + ' %';
    }
}

const subtractSeason = (index) => {
    const seasonMax = document.getElementById(`season-max${index}`);
    const seasonActually = document.getElementById(`season-actually${index}`);
    const percentage = document.getElementById(`percentage${index}`);
    const seasonMaxValue = parseFloat(seasonMax.innerHTML);
    const seasonActuallyValue = parseFloat(seasonActually.innerHTML);
    if( seasonActually.innerHTML > 0) {
        seasonActually.innerHTML =  seasonActuallyValue - 1;
        percentageAux = ( (seasonActuallyValue - 1) / seasonMaxValue) * 100;
        percentage.innerHTML = percentageAux.toFixed() + ' %';
    }
}

modalModify.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const index = button.getAttribute('data-index');
    const seasonName = document.getElementById(`season-name${index}`).innerHTML;
    const seasonMax = document.getElementById(`season-max${index}`).innerHTML;
    const seasonNameModify = document.getElementById(`serie-name-modify`);
    const seasonMaxModify = document.getElementById(`serie-seasons-modify`);
    buttonChanges.setAttribute('data-index', index);
    seasonNameModify.value = seasonName;
    seasonMaxModify.value = seasonMax;
})

modalCreate.addEventListener('show.bs.modal', function (event) {
    const seasonName = document.getElementById(`serie-name`);
    const seasonMax = document.getElementById(`serie-seasons`);
    seasonName.value = "";
    seasonMax.value = "";
})

const editSerie = () => {
    const index = buttonChanges.getAttribute('data-index');
    const seasonName = document.getElementById(`season-name${index}`);
    const seasonMax = document.getElementById(`season-max${index}`);
    const seasonActually = document.getElementById(`season-actually${index}`);
    const percentage = document.getElementById(`percentage${index}`);
    const seasonNameModify = document.getElementById(`serie-name-modify`);
    const seasonMaxModify = document.getElementById(`serie-seasons-modify`);
    if(seasonNameModify.value.trim() != '' &&  parseFloat(seasonMaxModify.value) > 0) {
        seasonName.innerHTML = seasonNameModify.value;
        seasonMax.innerHTML = parseInt(seasonMaxModify.value);
        seasonActually.innerHTML = '0';
        percentage.innerHTML = '0 %';
    } else {
        alert("Falta en nombre de la serie o la cantidad de temporadas");
    }
}

const search = () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const table = document.getElementById('main-table');
    let founded = false;
    if (searchInput.trim() != ''){
        for (let i = 1; i < table.rows.length; i++) {
            const cell = table.rows[i].getElementsByTagName("td");
            for (let j = 0; j < cell.length; j++) {
                if (cell[j].classList.contains("no-search")) { break }
                founded = (cell[j].innerHTML.toLowerCase().indexOf(searchInput) > -1)? true : false;
            }
            table.rows[i].style.display = founded? "" : "none";
        }
    }
}

const addSerie = () => {
    const nameSerie = document.getElementById('serie-name');
    const table = document.getElementById('table');
    const serieSeasons = document.getElementById('serie-seasons');
    if( nameSerie.value.trim() !== "" && parseFloat(serieSeasons.value) > 0){
        table.innerHTML += `
        <tr class="text-center">
            <td id="season-name${indexOfTable}">${nameSerie.value}</td>
            <td id="season-max${indexOfTable}" class="no-search">${parseInt(serieSeasons.value)}</td>
            <td id="season-actually${indexOfTable}" class="no-search">0</td>
            <td class="no-search">
                <button type="button" class="btn btn-primary btn-sm me-2" onclick="addSeason(${indexOfTable})">Agregar Temporada</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="subtractSeason(${indexOfTable})">Restar Temporada</button>
            </td>
            <td id="percentage${indexOfTable}" class="no-search">0 %</td>
            <td class="no-search">
                <button class="btn btn-light" type="button" data-bs-toggle="modal" data-bs-target="#modify" data-index="${indexOfTable}">Editar</button>
            </td>
        </tr>
        `
        indexOfTable +=1;
    } else {
        alert("Falta en nombre de la serie o la cantidad de temporadas")
    }
}