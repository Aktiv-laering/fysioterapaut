const navHeader = document.querySelector("nav");

navHeader.innerHTML = `        
    <div class="navigation-logo"><a href="index.html" class="brand textdecoration-none">Weber & Johannesen Fysioterapi</a></div>
        <div class="navigation-menu">
        <input type="checkbox" id="check" />
        <label for="check" class="checkBtn">
            <i class="material-icons">menu</i>
        </label>
            <ul>
                <li><a class="textdecoration-none" href="om-oss.html">Om oss</a></li>
                <li><a class="textdecoration-none" href="tjenester.html">Tjenester</a></li>
                <li><a class="textdecoration-none" href="kontakt-oss.html">Kontakt oss</a></li>
            </ul>
        </div>
    </div>
`;

const navFooter = document.querySelector("footer");

navFooter.innerHTML = `
© 2022 WEBER & JOHANNESEN FYSIOTERAPI AS

`;
// navFooter.innerHTML = `
//     <div class="">
//         <h3>Kontaktinfo:</h3>
//             <p><a href="tel:41426858" class="textdecoration-none">414 26 858</a></p>
//             <p><a href="mailto:tom@wjfysio.no" class="textdecoration-none">tom@wjfysio.no</a></p>
//         </div>
//         <div class="">
//             <h3>Åpningstider:</h3>
//             <p>Mandag - Fredag</p>
//             <p>08:00 - 16:00</p>
//         </div>
//         <div class="">
//             <h3>Adresse:</h3>
//             <p>Håkestadveien 3</p>
//             <p>3280 Tjøllingvollen</p>
//         </div>

// `;
