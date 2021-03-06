// forEach fra webdefine opg. -> for-loop
// siden etterhvert skal ha en "hvis active = true"-funksjon etterhvert så ville heller brukt en for-loop istedenfor en forEach

// omOssArray med staffData starts
const omossArray = {
  employes: [
    {
      id: 1,
      pictureUrl: "./img/TomAndreW.jpg",
      imageAlt: "Terapeut-Tom",
      name: "Tom Andre Weber",
      title: "Fysioterapeut MSc og Manuellterapeut",
      tlf: "414 26 858",
      email: "tom@wjfysio.no",
      active: true,
    },
    {
      id: 2,
      pictureUrl: "./img/Hanna-1-scaled-300x300.jpg",
      imageAlt: "Terapeut-Hanna",
      name: "Hanna Cortsen",
      title: "Osteopat D.O MNOF",
      tlf: "980 19 630",
      email: "hanna@wjfysio.no",
      active: true,
    },
    {
      id: 3,
      pictureUrl: "./img/thereseBG.png",
      imageAlt: "Terapeut-Therese",
      name: "Therese Johannesen",
      title: "Fysioterapeut",
      tlf: "999 77 666",
      email: "therese@wjfysio.no",
      active: true,
    },
    {
      id: 4,
      pictureUrl: "./img/nyEmplAvatarBG.png",
      imageAlt: "Terapeut-ny",
      name: "Terapeut-navn",
      title: "TBA - skal være synelig?",
      tlf: "999 77 666",
      email: "nyEmplyee@wjfysio.no",
      active: false,
      //   set if in-aktive to hide object or just comment out?
    },
  ],
};

// ønsker , legge til bilder, om klinikken info


// ref til classen og funskj starts

const employes = omossArray.employes;
console.log(employes);
const omossCards = document.querySelector(".staff-card-jS");

function employesObjects() {
  omossCards.innerHTML = ``;
  for (let i = 0; i < employes.length; i++) {
    omossCards.innerHTML += `
    <article class="staff-card_img_txt_flex">
      <div >
      <a href="#"><img src="${employes[i].pictureUrl}" alt="${employes[i].imageAlt}"></a>
      </div>
      <div >
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
