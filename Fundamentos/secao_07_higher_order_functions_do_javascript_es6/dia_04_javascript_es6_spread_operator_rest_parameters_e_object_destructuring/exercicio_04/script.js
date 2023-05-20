const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
    // bornIn: nascido em
];

const filterPeople = () => {
    return australianPeople = people.filter((pessoa) => pessoa.nationality === 'Australian')
        .filter((seculoXX) => seculoXX.bornIn >= 1901 && seculoXX.bornIn <= 2000);
}

console.log(filterPeople(people));