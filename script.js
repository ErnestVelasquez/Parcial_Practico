document.getElementById('cargarDatos').addEventListener('click', cargarDatos);

function cargarDatos() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red');
            }
            return response.json();
        })
        .then(data => {
            const lista = document.getElementById('listaUsuarios');
            lista.innerHTML = ''; 
            data.forEach(usuario => {
                const li = document.createElement('li');
                li.textContent = usuario.name; 
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}