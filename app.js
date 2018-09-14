const multiplicar = require('./multiplicar/multiplicar.js');//Heredo el archivo js
const argv = require('./config/yargs.js').argv;//Así solo me traigo la función argv y vez de todo el código

//Comando a escribir en terminal para que funcione node app listar -base=5 -limite=20
let comando = argv._[0];//Esto lo que me trae es la palabra que escria en la terminal crear, listar etc


switch(comando){
    case 'listar':
        multiplicar.tabla(argv.base, argv.limite)
                .then(respuesta => console.log(`La tabla de multiplicar es: \n${respuesta}`))
                .catch(err => console.log(err))
    break;

    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
                .then(archivo => console.log(`Archivo creado ${archivo}`))
                .catch(error => console.log(error));
    break;

    default:
        console.log('Comando no conocido');
}