document.addEventListener("DOMContentLoaded", function () {
  fetch("data/produtos.json")
    .then(response => response.json())
    .then(data => {
      const slide = document.getElementById("slide");
      let currentIndex = 0;

      // Função para criar os elementos dos produtos
      function createProductElement(product) {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        `;
        return productElement;
      }

      // Função para atualizar o slide com os produtos
      function updateSlide() {
        slide.innerHTML = "";
        for (let i = currentIndex; i < currentIndex + 3; i++) {
          const product = data[i % data.length];
          const productElement = createProductElement(product);
          slide.appendChild(productElement);
        }
      }

      // Inicializa o slide
      updateSlide();

      // Configuração do intervalo para o slide infinito
      setInterval(() => {
        currentIndex = (currentIndex + 1) % data.length;
        updateSlide();
      }, 3000);
    })
    .catch(error => console.error("Erro ao carregar os dados:", error));
});
