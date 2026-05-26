async function conselho() {

    const resposta = await fetch('https://dummyjson.com/quotes/random')

    const data = await resposta.json()

    document.getElementById('texto').innerText =
    data.quote
}