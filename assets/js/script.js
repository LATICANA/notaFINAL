//Inicio
var nombre = prompt('Ingresa tu nombre', 'Dayana Horta' )
var carrera= prompt('Ingresa la carrera','Desarrollo Web' )

//Carrera HTML
var ramoHtml = prompt('Ingrese Ramo Uno','HTML')
var notaUnoRamoHtml = prompt('Ingresa Nota Uno Ramo HTML', '7');
var notaDosRamoHtml = prompt('Ingresa Nota Dos Ramo HTML', '7');
var notaTresRamoHtml = prompt('Ingresa Nota Tres Ramo HTML', '5');

//Carrera CSS
var ramoCss = prompt('Ingrese Ramo Dos', 'CSS')
var notaUnoRamoCss = prompt('Ingresa Nota Uno Ramo CSS', '6');
var notaDosRamoCss = prompt('Ingresa Nota Dos Ramo CSS', '7');
var notaTresRamoCss = prompt('Ingresa Nota Tres Ramo CSS', '6');

//Carrera JavaScript
var ramoJava = prompt('Ingrese Ramo Tres', 'JavaScript')
var notaUnoRamoJava = prompt('Ingresa Nota Uno Ramo JavaScript', '6');
var notaDosRamoJava = prompt('Ingresa Nota Dos Ramo JavaScript', '3');

//Promedios Variable
var promedioDeNotasRamoHtml = (parseInt(notaUnoRamoHtml)+parseInt(notaDosRamoHtml)+parseInt(notaTresRamoHtml))/3
var promedioDeNotasRamoCss = (parseInt(notaUnoRamoCss)+parseInt(notaDosRamoCss)+parseInt(notaTresRamoCss))/3

//Promedio
promedioDeNotasRamoHtml = promedioDeNotasRamoHtml.toFixed(2)
promedioDeNotasRamoCss = promedioDeNotasRamoCss.toFixed(2)

//Nota Faltante
var notaFaltante = 12-(parseInt(notaUnoRamoJava)+parseInt(notaDosRamoJava))


//Tabla de Notas
document.write(`  <div class="header py-3">
<div class="container">

  <div class="col-md-12 d-flex justify-content-between">
    <h1>Notas Finales</h1>
      <img src="assets/css/img/logo.png" class="float-right" alt="Logo-Desafio-Latam">
    </div>
    <hr>
    <dl>
        <dt>Nombre: <small>${nombre}</small></dt>
        <dt>Carrera: <small>${carrera}</small></dt>
    </dl>
</div>
</div>

<div class="container">
<div class="row">
<table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Ramo</th>
        <th scope="col">Nota 1</th>
        <th scope="col">Nota 2</th>
        <th scope="col">Nota 3</th>
        <th scope="col">Promedio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${ramoHtml}</th>
        <td>${notaUnoRamoHtml}</td>
        <td>${notaDosRamoHtml}</td>
        <td>${notaTresRamoHtml}</td>
        <td>${promedioDeNotasRamoHtml}</td>
      </tr>
      <tr>
        <th scope="row">${ramoCss}</th>
        <td>${notaUnoRamoCss}</td>
        <td>${notaDosRamoCss}</td>
        <td>${notaTresRamoCss}</td>
        <td>${promedioDeNotasRamoCss}</td>
      </tr>
      <tr>
        <th scope="row">${ramoJava}</th>
        <td>${notaUnoRamoJava}</td>
        <td>${notaDosRamoJava}</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>

  <p>Para aprobar el ramo JavaScript con nota 4, necesitas obtener un ${notaFaltante} en la nota 3.</p>


</div>
</div>  `

//Fin de tabla
)

