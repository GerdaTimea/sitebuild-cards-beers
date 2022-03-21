function cardForBeer(beer, index) {
  return `
    <section>
      <p class="index">${index}</p>
      <article>
        <h2 class="title">${beer.title}</h2>
        <p class="sub">${beer.sub}</p>
        <p class="text">${beer.text}</p>
      </article>
      <button>
        <span class="button-text">details</span>
        <span class="material-icons">arrow_forward</span>
      </button>
    </section>
  `;
}

function loadEvent() {
  const mainElement = document.querySelector("main");

  for (let i = 1; i <= beers.length; i++) {
    const beer = beers[i];
    mainElement.insertAdjacentHTML("beforeend", cardForBeer(beer, i));
  }

}

window.addEventListener("load", loadEvent);
