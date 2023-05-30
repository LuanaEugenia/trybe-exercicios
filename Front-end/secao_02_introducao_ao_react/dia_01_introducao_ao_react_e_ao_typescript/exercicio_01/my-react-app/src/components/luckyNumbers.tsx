function numerosAleatorios(): number[] {
    const array = [];

    for (let i = 0; i < 6; i += 1) {
        array.push(Math.floor(Math.random() * 60 + 1));
    }

    return array;
}

function LuckyNumbers() {
    const array = numerosAleatorios();

    return (
        <>
            <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
            <ul>
                {array.map((numero, i) => <li key={i}>{numero}</li>)}
            </ul>
        </>
    )
}

export default LuckyNumbers;