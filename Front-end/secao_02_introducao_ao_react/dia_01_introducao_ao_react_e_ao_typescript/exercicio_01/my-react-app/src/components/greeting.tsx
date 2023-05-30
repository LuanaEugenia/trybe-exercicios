const user = {
    name: 'Luana',
    lastName: 'Eugênia',   
}

function Greeting() {
    return (
        <h1>
            {`Olá ${user.name} ${user.lastName}`}
            <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
        </h1>
    )    
}

export default Greeting;