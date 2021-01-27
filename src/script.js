const divResult = document.querySelector('#result');
const button = document.querySelector('#button');
const states = document.querySelector('#states');

async function renderState() {
    try {
        const response = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${states.value}`);
        //console.log(response.data);

        const state = response.data.state;
        const cases = response.data.cases;
        const deaths = response.data.deaths;

        divResult.innerHTML = `
            <h1>${state}</h1>
            <div>
                <strong>Casos:</strong>
                <span>${cases.toLocaleString('pt-br')}</span>
            </div>
            <div>
                <strong>Mortes:</strong>
                <span>${deaths.toLocaleString('pt-br')}</span>
            </div>
            `;
        divResult.classList.remove('closed');

    } catch (error) {
        console.error(error);
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();

    renderState();
});