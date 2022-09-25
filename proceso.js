function proceso() {
  table.innerHTML = ``;
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  contactList.forEach(function (value, i) {
    var table = document.getElementById("table");

    table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.nombre}</td>
                <td>${value.tipo}</td>
                <td>${value.tamaño}</td>
                <td>${value.extra}</td>
                <td>${value.bebida}</td>
                <td>

                <span class="material-icons icono" onclick="find(${
                      value.id
                    })">edit</span>
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>

                <span class="material-icons icono" onclick="removeData(${
                  value.id
                })">local_pizza</span>
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
  });
}


function save() {

  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  let id;
  contactList.length != 0
    ? contactList.findLast((item) => (id = item.id))
    : (id = 0);

  if (document.getElementById("id").value) {

    contactList.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
          (value.nombre = document.getElementById("nombre").value),
          (value.tipo = document.getElementById("tipo").value),
          (value.tamaño = document.getElementById("tamaño").value),
          (value.extra = document.getElementById("extra").value);
          (value.bebida = document.getElementById("bebida").value);
      }
    });

    document.getElementById("id").value = "";
  } else {

    let item = {
      id: id + 1,
      nombre: document.getElementById("nombre").value,
      tipo: document.getElementById("tipo").value,
      tamaño: document.getElementById("tamaño").value,
      extra: document.getElementById("extra").value,
      bebida: document.getElementById("bebida").value,
    };

    contactList.push(item);
  }

  localStorage.setItem("listItem", JSON.stringify(contactList));

  proceso();

  document.getElementById("cuadro").reset();
}



function find(id) {

  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  contactList.forEach(function (value) {
    if (value.id == id) {
      document.getElementById("id").value = value.id;
      document.getElementById("nombre").value = value.nombre;
      document.getElementById("tipo").value = value.tipo;
      document.getElementById("tamaño").value = value.tamaño;
      document.getElementById("extra").value = value.extra;
      document.getElementById("bebida").value = value.bebida;
    }
  });
}



function removeData(id) {

  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  contactList = contactList.filter(function (value) {
    return value.id != id;
  });

  localStorage.setItem("listItem", JSON.stringify(contactList));

  proceso();
}