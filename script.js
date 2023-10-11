document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let array = ["Name", "Email", "Mensaje", "URL imagen"];
  let userData = [];
  for (let i = 0; i < event.target.length; i++) {
    localStorage.setItem(array[i], event.target[i].value);
    userData.push({ [array[i]]: event.target[i].value });
  }
  console.log(userData);
  let tarjeta = document.querySelector("section");
  tarjeta.innerHTML += `
    <h2>Nombre: ${event.target[0].value}</h2>
            <h3>Email: ${event.target[1].value}</h3>
            <p>Mensaje: ${event.target[2].value}</p>
            <img src="${event.target[3].value}" alt="">
            `;

  localStorage.setItem("User Data", JSON.stringify(userData));
});
