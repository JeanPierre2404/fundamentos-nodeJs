let getUsuarioById = (id, callback) => {
        //muchas cosas con bases de datos
        let usuario = {
                nombre: "Jean",
                id
            }
            //cuando encuentra al usuario invoca al callback
        callback(usuario);
    }
    //
getUsuarioById(10, (usuario) => {
    console.log("Usuario de la BDD: ", usuario);
});