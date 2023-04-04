class medico {
    constructor ( apellido, rama, sede) {
    this.apellido= apellido;
    this.rama = rama;
    this.sede= sede;
    }

}

const med1 = new medico ("Gonzales", "Pediatría","Las Heras")
const med2 = new medico ("Garcia","Odontología", "Palermo")
const med3 = new medico ("Perez", "Cirugía", "Libertador")
const med4 = new medico ("Ramirez", "Clinica", "Lugano")

const contactos= [ med1 , med2 , med3 , med4]


function buscarMed (infoMed, ramaMed) {
    return contactos.find ( dato => dato.rama === ramaMed)
}

let busqueda= buscarMed (contactos, prompt ("ingresa la rama de medicina para sacar turno : \n Pediatría \n Odontología \n Cirugía \n Clínica"))
 if (busqueda != undefined){
    alert (" la rama para la que va a sacar turno es " + busqueda.rama + ", se encuentra en la sede " + busqueda.sede + " y lo atiende la médica " + busqueda.apellido )
 } else {
    alert ("este rubro no se encuentra en nuestros conctactos")
 }

   let turno = Number(prompt("Ingresa un horario exacto (ex. '10') para sacar turno con la profesional " + busqueda.apellido + " entre las 8hs y las 19hs"))
     if (med1.abierto(turno)){
         alert ("se registró el turno a las " + turno + "hs")
     } else {
     alert ("no hay turno disponible para ese horario")
     }