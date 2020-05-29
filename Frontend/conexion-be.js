function obtener(moneda) {
  //LAMAMOS AL ARCHIVO EN EL BACKEND
  fetch('http://localhost/API-PHP/Backend/'+moneda)

  //PROMESA - TRAEMOS LOS DATOS Y LE INDCAMOS CON (=>) QUE LOS DATOS VIENEN EN FORMATO JSON Y LOS GUARDE EN LA VARIABLE DATOS
  .then(datos=>datos.json())

  //ESTA NUEVA PROMESA YA TRAE LOS DATOS Y PODEMOS EJECUTAR UNA ACCION CON ELLOS
  .then(datos=> {
    //ACCEDEMOS AL ELEMENTO CON EL ID Y LE PASAMOS DATOS EN HTML
    //document.getElementById('datos').innerHTML =

    //INCLUIMOS (${}) PARA PODER ACCEDER A LA VARIABLE Y SU PROPIEDAD
    //`
    //Precio-Dolar: ${datos.dolar} - Precio-Euro: ${datos.euro}
    //`

    //CCEDEMOS A UL CON SU ID Y LO GUARDAMOS EN RESULTADO Y CON INNERHTML CAMBIAMOS LO QUE TIENE
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    //HACEMOS UNA RECORRIDO O CICLO CON FOR PARA RECORRER EL ARRAY CON LOS DATOS DE LA TABLA DE LA BD Y LE DECIMOS QUE LO REMPLACE EN HTML CON ID
    //CON JAVASCRIPT MANDAMOS A LLAMAR LA PROPIEDAD DEL ARRAY QUE EN ESTE CASO ES SUS VALORES DE LA TABLA
    for(let dato of datos) {
      resultado.innerHTML += `
      <li> Fecha: ${dato.fecha} - Valor: ${dato.precio}</li>
      `;
    }
  })

}
