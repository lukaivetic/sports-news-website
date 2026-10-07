document.addEventListener('DOMContentLoaded', function () {
   const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach((h2) => {
        h2.style.fontSize = '40px'; 
    });
 const sacuvanaTema = localStorage.getItem('tema') || 'mracno'; 
   if (sacuvanaTema === 'svetlo') {
    document.body.classList.add('svetla-tema');
} else {
    document.body.classList.remove('svetla-tema');
}



    var logo = document.getElementById("logo");
    logo.src = sacuvanaTema === 'svetlo' ? "logo2.png" : "logo.png"; 

    let sacuvanaVelicina = localStorage.getItem('fontSize');
    if (sacuvanaVelicina) {
        document.body.style.fontSize = sacuvanaVelicina + 'px';
        document.querySelectorAll('body, body *').forEach((element) => {
            if (element.tagName !== 'H2') {
                element.style.fontSize = sacuvanaVelicina + 'px';
            }
        });
    } else {
        document.body.style.fontSize = '16px';
        document.querySelectorAll('body, body *').forEach((element) => {
            if (element.tagName !== 'H2') {
                element.style.fontSize = '16px';
            }
        });
    }
 
    
   
    const slajdovi = document.querySelectorAll('.slajderelement');
    let trenutniSlajd = 0;

    function prikaziSlajd(index) {
        slajdovi.forEach((slajd, i) => {
            if (i === index) {
                slajd.style.display = 'block';
                slajd.classList.add('fadeIn'); 
            } else {
                slajd.style.display = 'none';
                slajd.classList.remove('fadeIn'); 
            }
        });
    }

    const dugmePrethodno = document.querySelector('.prev');
    const dugmeSledece = document.querySelector('.next');

    function sledeciSlajd() {
        trenutniSlajd = (trenutniSlajd + 1) % slajdovi.length;
        prikaziSlajd(trenutniSlajd);
    }

    function prethodniSlajd() {
        trenutniSlajd = (trenutniSlajd - 1 + slajdovi.length) % slajdovi.length;
        prikaziSlajd(trenutniSlajd);
    }

    if (dugmeSledece) {
        dugmeSledece.addEventListener('click', sledeciSlajd);
    }

    if (dugmePrethodno) {
        dugmePrethodno.addEventListener('click', prethodniSlajd);
    }

    setInterval(sledeciSlajd, 5000); 
    prikaziSlajd(trenutniSlajd); 

    const vesti = [
        {
            naslov: "LESSORT SPREMAN ZA FINAL FOUR? Oglasio se Ataman!",
            link: "prvavest.html",
            slika: "slika1.webp",
            id: "prvavest"
        },
        {
            naslov: "CIRKUS, ANTI-FUDBAL I NESREĆNI JUNAJTED: Totenhem osvojio Ligu Evrope!",
            link: "drugavest.html",
            slika: "slika2.webp",
            id: "drugavest"
        },
        {
            naslov: "Besmrtni Novak pretvorio bes u zlato! Sto razloga da ga se plaše na Rolan Garosu",
            link: "trecavest.html",
            slika: "slika3.webp",
            id: "trecavest"
        },
        {
            naslov: "Roboti na treningu Voriorsa",
            link: "cetvrtavest.html",
            slika: "slika4.webp",
            id: "cetvrtavest"
        },
        {
            naslov: "Zvanično: Jamal u Barseloni do 2031.",
            link: "petavest.html",
            slika: "slika5.webp",
            id: "petavest"
        },
        {
            naslov: "Penaldžija Mitrović i majstor Sergej! Srbi pogađali, Ronaldo se (možda) oprostio.",
            link: "sestavest.html",
            slika: "slika6.webp",
            id: "sestavest"
        },
        {
            naslov: "Ljajić i Gaćinović sa bine zagrmeli: Vidimo se brzo na stadionu!",
            link: "sedmavest.html",
            slika: "slika7.webp",
            id: "sedmavest"
        },
        {
            naslov: "Španci pišu: Rat večitih za Vasu Micića",
            link: "osmavest.html",
            slika: "slika8.webp",
            id: "osmavest"
        },
        {
            naslov: "Makabi naciljao Ifea Lunberga",
            link: "devetavest.html",
            slika: "slika9.webp",
            id: "devetavest"
        },
        {
            naslov: "Olga nije sama: Srbija ima dve teniserke u glavnom žrebu Rolan Garosa",
            link: "desetavest.html",
            slika: "slika10.webp",
            id: "desetavest"
        },
        {
            naslov: "Rolan Garos spremio ceremoniju u čast Nadala",
            link: "jedanaestavest.html",
            slika: "slika11.webp",
            id: "jedanaestavest"
        },
        {
            naslov: "Đoković: Imam u glavi OI 2028, hteo sam da dominiram nad Rafom i Rodžerom",
            link: "dvanestavest.html",
            slika: "slika12.webp",
            id: "dvanaestavest"
        },
        {
            naslov: "Srbija otvara Svetsko prvenstvo utakmicom protiv Kineskog Tajpeha",
            link: "trinaestavest.html",
            slika: "slika13.webp",
            id: "trinaestavest"
        },
        {
            naslov: "Rusi ruše međunarodni zid izolacije u Beogradu",
            link: "cetrnaestavest.html",
            slika: "slika14.webp",
            id: "cetrnaestavest"
        },
        {
            naslov: "Osipa se Tent, Obrenovčanke ostale i bez Mine Mijatović",
            link: "petnaestavest.html",
            slika: "slika15.webp",
            id: "petnaestavest"
        },
        {
            naslov: "Gvidetijeva rekonstrukcija igračkog kadra i stručnog štaba",
            link: "sesnaestavest.html",
            slika: "slika16.webp",
            id: "sesnaestavest"
        },
        {
            naslov: "Bratski tandem u Kragujevcu: Rašovići ponovo na istoj adresi",
            link: "sedamnaestavest.html",
            slika: "slika17.webp",
            id: "sedamnastavest"
        },
        {
            naslov: "Od Kragujevca do Singapura! Stevanović izabrao 26 kandidata, među njima dva iznenađenja",
            link: "osamnaestavest.html",
            slika: "slika18.webp",
            id: "osamnaestavest"
        },
        {
            naslov: "Rasplet u Ligi šampiona: Novi Beograd bez okova, Mandin top ili Prletova lucidnost...",
            link: "devetnaestavest.html",
            slika: "slika19.webp",
            id: "devetnaestavest"
        },
        {
            naslov: "Padneš li u vatru, ostaćeš bez svega: Titula ide mentalno jačem",
            link: "dvadesetavest.html",
            slika: "slika20.webp",
            id: "dvadesetavest"
        },
        {
            naslov: "PARIVISION banovan sa EU RMR, BLEED ima novu šansu!",
            link: "dvadesetprvavest.html",
            slika: "slika21.jpg",
            id: "dvadesetprvavest"
        },
        {
            naslov: "Kralj je stigao: Nexa nastavlja karijeru u BLEED-u",
            link: "dvadesetdrugavest.html",
            slika: "slika22.jpg",
            id: "dvadesetdrugavest"
        },
        {
            naslov: "BLAST najavio Austin Major 2025",
            link: "dvadesettrecavest.html",
            slika: "slika23.jpg",
            id: "dvadesettrecavest"
        },
        {
            naslov: "T1 izbacio G2 Esports sa MSI 2024",
            link: "dvadesetcetvtavest.html",
            slika: "slika24.jpg",
            id: "dvadesetcetvrtavest"
        }
    ];

    const unos = document.getElementById("unos-pretrage");
    const dugme = document.getElementById("dugmePretraga");
    const hamburgerMeni = document.querySelector('.hamburger-meni');

    function prikaziRezultate() {
        const upit = unos.value.toLowerCase().trim();

        if (hamburgerMeni) {
            hamburgerMeni.style.display = 'none';
        }

        vesti.forEach(vest => {
            const vestElement = document.getElementById(vest.id);
            if (vestElement) {
                vestElement.style.display = "none"; 
            }
        });

        const izdvajamoText = document.querySelector('h2');
        if (izdvajamoText && izdvajamoText.textContent.includes("Izdvajamo:")) {
            izdvajamoText.style.display = 'none'; 
        }

        if (upit !== "") {
            const filtrirane = vesti.filter(v => v.naslov.toLowerCase().includes(upit));

            let stariRez = document.getElementById("rezultatiPretrage");
            if (stariRez) {
                stariRez.innerHTML = ""; 
            } else {
                const vestiSekcija = document.querySelector(".vesti");
                const novaSekcija = document.createElement("section");
                novaSekcija.id = "rezultatiPretrage";
                novaSekcija.className = "search-results";
                novaSekcija.style.padding = "40px";
                vestiSekcija.appendChild(novaSekcija);
            }

            const novaSekcija = document.getElementById("rezultatiPretrage");

            if (filtrirane.length === 0) {
            const nema = document.createElement("p");
            nema.textContent = "Nema rezultata za uneti pojam.";
            nema.classList.add("nema-rezultata"); 
            novaSekcija.appendChild(nema);
            }


            filtrirane.forEach(v => {
                const div = document.createElement("div");
                div.className = "news-item"; 
                div.innerHTML = ` 
                    <a href="${v.link}" style="text-decoration:none; color:black; display:flex; align-items:center; gap:10px; margin:10px auto; max-width:800px; background:#fff; padding:10px; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
                        <img src="${v.slika}" alt="vesti" style="max-width: 120px; height: auto; border-radius:5px;"/>
                        <h3 style="margin:0;">${v.naslov}</h3>
                    </a>
                `;
                novaSekcija.appendChild(div);
            });

        } else {
            const vestiSekcija = document.querySelector(".vesti");
            const sekcija = document.createElement("section");
            sekcija.className = "vesti";
            sekcija.innerHTML = `<h2>Izdvajamo:</h2>`;

            vesti.forEach(vest => {
                const div = document.createElement("div");
                div.className = "news-item"; 
                div.innerHTML = ` 
                    <a href="${vest.link}" style="text-decoration:none; color:black; display:flex; align-items:center; gap:10px; margin:10px auto; max-width:800px; background:#fff; padding:10px; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
                        <img src="${vest.slika}" alt="vesti" style="max-width: 120px; height: auto; border-radius:5px;"/>
                        <h3 style="margin:0;">${vest.naslov}</h3>
                    </a>
                `;
                sekcija.appendChild(div);
            });

            vestiSekcija.appendChild(sekcija);
        }
    }

    if (dugme) {
        dugme.addEventListener("click", prikaziRezultate);
    }

    if (unos) {
        unos.addEventListener("input", prikaziRezultate);
    }

    document.getElementById('dugme-tema').addEventListener('click', function () {
        const daLiJeSvetlo = document.body.classList.toggle('svetla-tema'); 
        localStorage.setItem('tema', daLiJeSvetlo ? 'svetlo' : 'mracno'); 
        
        logo.src = daLiJeSvetlo ? "logo2.png" : "logo.png"; i
    });

 
const promeniVelicinuFonta = (size) => {
    document.body.style.fontSize = size + 'px';
    document.querySelectorAll('body, body *').forEach((element) => {
        element.style.fontSize = size + 'px';
    });
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach((h2) => {
        h2.style.fontSize = (size + 25) + 'px'; 
    });

};


let trenutnaVelicina = localStorage.getItem('fontSize') ? parseInt(localStorage.getItem('fontSize')) : 16; 
promeniVelicinuFonta(trenutnaVelicina);

   document.getElementById('uvelicavanjeFonta').addEventListener('click', function() {
    trenutnaVelicina += 2; 
    promeniVelicinuFonta(trenutnaVelicina); 
    localStorage.setItem("fontSize", trenutnaVelicina); 
});
document.getElementById('smanjenjeFonta').addEventListener('click', function() {
        if (trenutnaVelicina > 10) { 
            trenutnaVelicina -= 2; 
            promeniVelicinuFonta(trenutnaVelicina); 
            localStorage.setItem("fontSize", trenutnaVelicina); 
        }
    });
 document.getElementById('pocetnevrednosti').addEventListener('click', function () {
        localStorage.setItem('tema', 'mracno');
        localStorage.setItem('fontSize', '16px');

        document.body.classList.remove('svetla-tema');
        document.body.style.fontSize = '16px';
        location.reload(); 
    });
});
document.getElementById('kontakt-forma').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let ime = document.getElementById('ime').value.trim();
    let email = document.getElementById('email').value.trim();
    let poruka = document.getElementById('poruka').value.trim();

    if (ime.length < 2) {
        alert("Ime i prezime mora imati najmanje 2 karaktera.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Unesite validnu e-mail adresu.");
        return;
    }

    if (poruka.length < 10) {
        alert("Poruka mora sadržati najmanje 10 karaktera.");
        return;
    }

    document.getElementById('obavestenje').style.display = 'block'; 
    this.reset(); 
});
