function saveOrfanato(db, orfanato) {
    return db.run(`
    INSERT INTO orfanatos (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${orfanato.lat}",
        "${orfanato.lng}",
        "${orfanato.name}",
        "${orfanato.about}",
        "${orfanato.whatsapp}",
        "${orfanato.images}",
        "${orfanato.instructions}",
        "${orfanato.opening_hours}",
        "${orfanato.open_on_weekends}"
    );
`)
}

module.exports = saveOrfanato;