//La librería YARGS, sirve para organizar las peticiones que entran en la terminal, por ejemplo en este caso creamos un yargs
//Llamado listar, en el cual muestra una descripción de imprime en consola la tabla de multiplica, posterior mente se declaran
//Los valores que se escriben en la terminal, en este caso base y limite, idico que la base es un campo obligatorio con 
//demand:true, también le pongo un alias para que en la terminal no tengan que poner base y solo puedan poner -b=valor
//a continuación defino el limite que al igual que la base le pongo un alias  y por si el usuario no escribe ese parametro
//Le pongo por default un valor en este caso 10
//Final mente declaro la funcion help, la cual me ayuda a imprimir en consola los valores que ocupa mi funcion YARGS
//Para imprimir mis parametros en la variable YARGS pongo argv.base o argv.limite y eso imprime los valores que obtuvieron
const options = {
    base: {
        demand:true,//Con esto indico que el campo es obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                    .command('listar','Imprime en consola la tabla de multiplicar',options)
                    .command('crear','Genera un archivo con la tabla de multiplicar',options)
                    .help()
                    .argv;//Importo mi librería de yargs

module.exports = {
    argv:argv
}