// https://jsonplaceholder.typicode.com/users/
titulosCreados = false;

function consultarAPI() {

    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(
            function respuestaDeLaAPI(json) {

                console.log(json);


                for (i = 0; i < json.length; i++) {
                    console.log(json[i].name);
                    document.getElementById("resultado").innerHTML += json[i].name + ", ";
                    if (i != 0) {
                        titulosCreados = true;
                    }
                    crearTabla(json[i].id, json[i].name, json[i].username)
                }

                contarEmpleados(json);
            });

}

function crearTabla(id, name, username) {
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    document.getElementById("tabla").appendChild(thead);
    document.getElementById("tabla").appendChild(tbody);
    // Adding the entire table to the body tag


    if (titulosCreados == false) {
        // Creating and adding data to first row of the table
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Id";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Name";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Username";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        thead.appendChild(row_1);


    }



    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = id;
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = name;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = username;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
}

function contarEmpleados(json) {
    var numeroEmpleados = Object.keys(json).length;
    document.getElementById("numeroEmpleados").innerHTML = "Numero de empleados: " + numeroEmpleados;
}