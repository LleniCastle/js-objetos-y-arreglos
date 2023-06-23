const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "assets/img/casadecampo.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "assets/img/casadeplaya.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "assets/img/casadecentro.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "assets/img/casarodante.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "assets/img/departamento.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "assets/img/mansion.jpg",
    rooms: 5,
    m: 500
  }
];

let propiedadesFiltradas = propiedadesJSON.filter(function (propiedad) {
  return propiedad.m >= minMetros && propiedad.m <= maxMetros;
});

let button = document.querySelector("#btn");
let minMetrosInput = document.querySelector("#minMetros");
let maxMetrosInput = document.querySelector("#maxMetros");
let minCuartoInput = document.querySelector("#minCuarto");
let result = document.querySelector("#result");

button.addEventListener('click', function boton() {
  let minMetros = parseInt(minMetrosInput.value);
  let maxMetros = parseInt(maxMetrosInput.value);
  let minCuarto = parseInt(maxMetrosInput.value);

  let propiedadesFiltradas = propiedadesJSON.filter(function (propiedad) {
    return propiedad.m >= minMetros && propiedad.m <= maxMetros && propiedad.rooms >= minCuarto;
  });

  if (isNaN(minMetros) || isNaN(maxMetros) || isNaN(minCuarto) || minMetros > maxMetros) {
    alert("Por favor, ingresa rangos de búsqueda válidos.");
  } else if (propiedadesFiltradas.length === 0) {
    alert("No se encontraron propiedades con los parámetros de búsqueda.")
  } else { mostrarPropiedades(propiedadesFiltradas) };
});


function mostrarPropiedades(propiedadesJSON) {
  let html = '';
  for (let propiedad of propiedadesJSON) {
    html += ` 
    <div style="margin: auto; background: rgba(255, 255, 255, 0.068); 
    box-shadow: 0px 0px 7px 1px rgba(255, 255, 255, 0.39); height: 350px; display: flex; 
    flex-direction: column; justify-content: space-between;">
      <div class="img">          
        <img src="${propiedad.src}" style="height: 150px;  height: 150px; width: 100%;" alt="${propiedad.name}">
      </div>  
      <section class="propiedadsection" style="padding: 10px 20px;">
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p style="margin: 0px;" >Cuartos: ${propiedad.rooms}</p>
            <p style="margin: 0px;" >Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>  
    </div>  
    `;
  }

  result.innerHTML = html;

  let contador = document.querySelector("#contador");
  contador.textContent = propiedadesJSON.length;
};

document.querySelector("#contador")
