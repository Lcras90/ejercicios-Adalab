let city = document.querySelector(".js-form");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");

function selectCity(ev) {
  let choosedcity = ev.target.value;
  if (choosedcity === "malaga") {
    img1.src =
      "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/malaga-52886652-istock.jpg_1014274486.jpg";
    img2.src =
      "https://blog.fuertehoteles.com/wp-content/uploads/2018/12/malaga-muelle-atardecer.jpg";
    img3.src =
      "https://blog.fuertehoteles.com/wp-content/uploads/2017/06/calle-larios-malaga.jpg";
  } else if (choosedcity === "cadiz") {
    img1.src =
      "https://machbel.com/fotos/2018/02/Playa-de-la-Caleta-Provincia-de-C%C3%A1diz-Andaluc%C3%ADa-by-machbel.jpg";
    img2.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4rHU4lZrcsSKO6IyGwEZi6MYohuUWlFdcw&usqp=CAU";
    img3.src =
      "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_667/https://101lugaresincreibles.com/wp-content/uploads/2018/08/cadiz-casco-antiguo-4.jpg";
  } else if (choosedcity === "granada") {
    img1.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fhQhNgOHeA4VYeWLTTdSs55i0bzIPh7cxw&usqp=CAU";
    img2.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-3oL2eIybPggZy6_bd8ocl2cR7BGe1vAXQ&usqp=CAU";
    img3.src =
      "https://labingranada.org/wp-content/uploads/2019/09/acerra-del-darro-670x433.png";
  }
}
city.addEventListener("click", selectCity);
