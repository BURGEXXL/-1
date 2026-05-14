window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }

  }, 1200);
});

function toggleTheme() {

  document.body.classList.toggle("light");
}

function scrollToProducts() {

  document.querySelector("#products")
    .scrollIntoView({

      behavior: "smooth"
    });
}

function openProduct(name, price, desc, img) {

  const modal = document.getElementById("modal");

  document.getElementById("modalTitle").innerText = name;
  document.getElementById("modalPrice").innerText = "Цена: " + price;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalImg").src = img;

  modal.style.display = "flex";
}

function closeModal() {

  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {

  const modal = document.getElementById("modal");

  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function reveal() {

  const elements = document.querySelectorAll(".reveal");

  const windowHeight = window.innerHeight;

  elements.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 80) {
      el.classList.add("active");
    }

  });
}

window.addEventListener("scroll", reveal);
reveal();