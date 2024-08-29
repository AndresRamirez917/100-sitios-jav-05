async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const data = await result.json();
    console.log(data)
    data.forEach(element => {
        if(element.id <= 3){
            const card = document.createRange().createContextualFragment(`
                 <div class="card">
                    <p>Producto: ${element.title}</p>
                    <img src="${element.image}" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque molestias cum tenetur iusto atque magni consequuntur culpa quidem sint mollitia tempore officiis, sapiente numquam, vitae pariatur itaque dolores animi.</p>
                </div>
                
                `)
                const services_row = document.querySelector('.services-row')
                services_row.append(card)
        }
    });
}


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("formulario").addEventListener('submit', validarFormulario); 
//   });

//   function validarFormulario(e){
//     e.preventDefault();
//     let nombre = document.getElementById('nombre').value
//     if(nombre.length == 0){
//         alert("ingresa algo sonso")
//     }return;
//     this.submit()
//   }

const btn_enviar = document.getElementById('btn-enviar')

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const mensaje = document.getElementById('mensaje')
   
    if(nombre.value == ""){
        alert("Escribe algo en el nombre sonso")
        return false;
    } 

    if(email.value == ""){
        alert("Escribe algo en el email pendejo")
    return false;
    }

    if(mensaje.value == ""){
        alert("Debes de dejar un mensaje pendejo")
        return false;
    }

    if(!email_valido(email.value)){
        alert("El email no es válido chinga tu madre")
        return false;
    }
    nombre.value="";
    email.value="";
    mensaje.value="";
    return true;
}
const limpiar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    nombre.value="";
    email.value="";
} 



const email_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btn_enviar.addEventListener("click", validar)


getData()
