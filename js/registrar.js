// document.getElementById('NombreUsuario').value="jose";
// document.getElementById('ClaveUsuario').value="12345";
// document.getElementById('ClaveUsuario2').value="12345";
// document.getElementById('EmailUsuario').value="jose@jose.com";

class Subscriptor
{
     constructor(obj) {
        this.nombre  = obj.nombre;
        this.clave  = obj.clave;
        this.clave2 = obj.clave2;
        this.email  = obj.email;
        
    }
}


let ArrayDeSubscriptores=[];

// VerificaryCargar();

let botonRegistrar = document.getElementById("btnRegistrar")
botonRegistrar.onclick = () =>{

    let nombreIngresado = document.getElementById('NombreUsuario').value;
    let claveIngresada = document.getElementById('ClaveUsuario').value;
    let claveIngresada2 = document.getElementById('ClaveUsuario2').value;
    let emailIngresado = document.getElementById('EmailUsuario').value;
    
    /* validaciones */
    const form = document.getElementById('form');
    const valorNombreIngresado = document.getElementById('NombreUsuario');
    const valorClaveIngresada = document.getElementById('ClaveUsuario');
    const valorClaveIngresada2 = document.getElementById('ClaveUsuario2');
    const ValorEmailIngresado = document.getElementById('EmailUsuario');


form.addEventListener('btnRegistrar', (e)=>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const valorNombreIngresado = nombreIngresado.value.trim();
    // const valorClaveIngresada = claveIngresada.value.trim();
    // const valorClaveIngresada2 = claveIngresada2.value.trim();
    // const valorEmailIngresado = emailIngresado.value.trim();

    if (valorNombreIngresado === ""){

        usuarioError(nombreIngresado, "El usuario no puede estar vacío")
    }else {

        usuarioCorrecto()

    }
}


function usuarioError(input, message){
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small')   
    
    small.innerText = message;//div class .ingreso-nombre

    formControl.className = 'ingreso-nombre error';
}

// function usuarioCorrecto(input){

// }
function usuarioCorrecto(){
// checkInputs()
let objGenerico={nombre : nombreIngresado , clave : claveIngresada , email:emailIngresado}
ArrayDeSubscriptores.push(new Subscriptor(objGenerico));


Guardar()  
}

function Guardar()
{
    localStorage.setItem("ListadoSubscriptores",JSON.stringify(ArrayDeSubscriptores));
    
}

function VerificaryCargar()
{
    let arrayAuxiliar=JSON.parse(localStorage.getItem("ListadoSubscriptores"));

    if(arrayAuxiliar)
    {
        for(elemento of arrayAuxiliar )
        {
            ArrayDeSubscriptores.push(new Subscriptor(elemento));
            
        }
        let largo=arrayAuxiliar.length;
        console.log("tiene "+ largo +" elementos");
    }
    else
    {
        console.log("no hay registros");
    }
   

}
}
