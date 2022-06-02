// forEach fra webdefine opg. -> for-loop
// siden etterhvert skal ha en "hvis active = true"-funksjon etterhvert så ville heller brukt en for-loop istedenfor en forEach
const omossArray = {
  employes: [
    {
      id: 1,
      pictureUrl: "./img/TomAndreW.jpg",
      imageAlt: "Terapeut-Tom",
      name: "Tom Andre Weber",
      title: "Fysioterapeut MSc og Manuellterapeut",
      tlf: "414 26 858",
      email: "tom@weberfysioterapi.no",
      active: true,
    },
    {
      id: 2,
      pictureUrl: "./img/Hanna-1-scaled-300x300.jpg",
      imageAlt: "Terapeut-Hanna",
      name: "Hanna Cortsen",
      title: "Osteopat D.O MNOF",
      tlf: "980 19 630",
      email: "hanna@weberfysioterapi.no",
      active: true,
    },
    {
      id: 3,
      pictureUrl: "./img/nyEmplAvatar.jpg",
      imageAlt: "Terapeut-Therese",
      name: "Therese Johannesen",
      title: "TBA",
      tlf: "999 77 666",
      email: "therese@weberfysioterapi.no",
      active: true,
    },
    {
      id: 4,
      pictureUrl: "./img/nyEmplAvatar.jpg",
      imageAlt: "Terapeut-ny",
      name: "Terapeut-navn",
      title: "TBA",
      tlf: "999 77 666",
      email: "nyEmplyee@weberfysioterapi.no",
      active: false,
      //   make if to hide inaktive object or comment out
    },
  ],
};

// ønsker , legge til bilder, om klinikken info

const employes = omossArray.employes;
console.log(employes);
const omossCards = document.querySelector(".card");

function employesObjects() {
  omossCards.innerHTML = ``;
  for (let i = 0; i < employes.length; i++) {
    omossCards.innerHTML += `
    <article>
      <div>
      <img src="${employes[i].pictureUrl}" alt="${employes[i].imageAlt}">
      </div>
      <div>
      <h3> ${employes[i].name}</h3>
      <p> ${employes[i].title}</p>
      <p>Tlf: ${employes[i].tlf}</p>
      <p> ${employes[i].email}</p>
      </div>
    </article>
  `;
  }
}

employesObjects();
