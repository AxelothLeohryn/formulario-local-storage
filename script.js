document.querySelector('#form1').addEventListener('submit', function(event) {
    event.preventDefault();
    let array = ['Name', 'Email', 'Mensaje', 'URL imagen']
    let userData = {};
    for (let i = 0; i < event.target.length; i++) {
        localStorage.setItem(array[i], event.target[i].value);
        userData[array[i]] = event.target[i].value;
    }
    let tarjeta = document.querySelector('section');
    tarjeta.innerHTML += `
    <h2>Nombre: ${event.target[0].value}</h2>
            <h3>Email: ${event.target[1].value}</h3>
            <p>Mensaje: ${event.target[2].value}</p>
            <img src="${event.target[3].value}" alt="">
    `
    localStorage.setItem("User Data", JSON.stringify(userData));
    console.log(userData);
})

document.querySelector('#borrar-datos').addEventListener('click', function(event) {
    localStorage.clear();
});

document.querySelector('#form2').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
    let userDelete = event.target[0].value;
    let data = JSON.parse(localStorage.getItem('User Data'));
    data = data.filter(item => item.Name !== event.target[0].value);
    console.log(data);                 //sin terminar
  
});