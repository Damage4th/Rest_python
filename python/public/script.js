listar();

function listar(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("http://localhost:5500/evento", requestOptions)
      .then(response => response.json())
      .then(function(result){
        var dados = "<th>Nome</th>";
            dados += "<th>Telefone</th>";
            dados += "<th>E-mail</th>";
            dados += "<th>Local</th>";
  
  
        for (const i in result) {
          dados += "<tr>"
              + "<td>" + result[i].nome + "</td>"
              + "<td>" + result[i].telefone + "</td>"
              + "<td>" + result[i].email + "</td>"
              + "<td>" + result[i].localevento + "</td>"
              + "</tr>";
  
        }
        document.getElementById("dados").innerHTML = dados;
      })
      .catch(error => console.log('error', error));
  }