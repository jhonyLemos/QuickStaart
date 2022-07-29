function revelarResposta() {
  let resp = document.querySelector("#resposta");
  resp.classList.toggle("blur");
}

function proxPergunta(proximaPergunta) {
  let pergunta = document.querySelector("#card-container");
  pergunta.innerHTML = "";

  let cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__bounceIn");

  cardDiv.innerHTML =`
  <div class="card">
    <div class="pergunta">
        <h2>O que é ${proximaPergunta.title}?</h2>
    </div>
    <div id="resposta" class="resposta blur">
        <p>
            ${proximaPergunta.description}
        </p>
    </div>
  </div>
    `;
  pergunta.appendChild(cardDiv);
}

function buscarInformacao() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proxPergunta(resultadoJson);
    });
}

window.addEventListener("Load", buscarInformacao());
