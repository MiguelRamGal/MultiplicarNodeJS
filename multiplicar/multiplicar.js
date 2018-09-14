const fs = require('fs');//Esta libería ya la tiene por default NODE JS

let tablaMultiplicar = (base, limite = 10) => {
    return new Promise ( (resolve, reject) =>{
        if(!Number(base) || !Number(limite)){
            reject(`Por favor verifíque su información, algunos de los caracteres ${base} - ${limite} no es un número`)
            return
        }else{
            let data = '';
            for(let cont = 1; cont <= limite; cont ++){
                data += `${base} * ${cont} = ${base*cont}\n`;
            }
            resolve(data);
        }

    })
}


let crearArchivo = ( base , limite = 10) => {
    return new Promise ((resolve, reject) =>{
        
        if(!Number(base) || !Number(limite)){//SI base no es un número
            reject(`El valor ${base} no es un número`);
            return;
        }else{
            let data = '';
            //Creo mi tabla
            for(let cont = 1; cont <= limite; cont ++){
                data += `${base} * ${cont} = ${base*cont}\n`;
            }
            
            //Creo el archovo de texto
            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err){
                    reject(err)
                }else{
                    resolve(`tabla-${base}.txt`)
                }
            });
        }
    })
}

module.exports = {
    crearArchivo:crearArchivo,
    tabla:tablaMultiplicar
}