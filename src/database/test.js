const database = require('./db');
const saveOrfanato = require('./saveorfanato')

database.then( async (db) => {
    //inserir dados na tabela
    await saveOrfanato(db, {
        lat: "-3.8433428",
        lng: "-38.599445",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 6 a 15 anos se encontre em sutuação de risco e/ou vulnerabilidade social.",
        whatsapp: "999999999",
        images: [
            "https://images.unsplash.com/photo-1572058685927-5175f7320c90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1602958169883-016fdb9458dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas das 8h até 18h.",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrfanatos = await db.all("SELECT * FROM orfanatos")
    console.log(selectedOrfanatos)

    // consultar somento 1 orfanato, pelo id
    /* const orfanato = await db.all('SELECT * FROM orfanatos WHERE id = "1"')
    console.log(orfanato) */

    //deletar dados da tabela
    /* console.log(await db.run("DELETE FROM orfanatos WHERE id = '6'")) */

})