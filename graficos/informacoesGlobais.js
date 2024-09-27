const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = document.createElement('p')
    // * cria um elemento <p> no HTML;
    paragrafo.classList.add('graficos-texto')
    //* adiciona a classe 'gradicos-texto' no elemento <p>
}

visualizarDadosGlobais();
