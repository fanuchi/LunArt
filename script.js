var photos = [
  "images/gallery/photos/photo-performance-blackwhite-01.jpg",
  "images/gallery/photos/photo-performance-blackwhite-02.jpg",
  "images/gallery/photos/photo-group-stage-blackwhite.jpg",
  "images/gallery/photos/photo-rehearsal-laptop-01.jpg",
  "images/gallery/photos/photo-rehearsal-dialogue-01.jpg",
  "images/gallery/photos/photo-performance-group-01.jpg",
  "images/gallery/photos/photo-stage-dialogue-01.jpg",
  "images/gallery/photos/photo-group-stage-color-01.jpg",
  "images/gallery/photos/photo-stage-white-costumes-01.jpg",
  "images/gallery/photos/photo-group-seated-stage-01.jpg"
];

var videos = [
  {
    title: "Video zapis 1",
    subtitle: "Facebook video",
    image: "images/gallery/video/video-thumb-proba-scena.jpg",
    link: "https://www.facebook.com/watch/?v=329303681295281"
  },
  {
    title: "Video zapis 2",
    subtitle: "Facebook video",
    image: "images/gallery/video/video-thumb-scenski-dijalog.jpg",
    link: "https://www.facebook.com/watch/?v=1551489921576140"
  },
  {
    title: "Video zapis 3",
    subtitle: "Facebook video",
    image: "images/gallery/video/video-thumb-forum-teatar.jpg",
    link: "https://www.facebook.com/watch/?v=535330237341220"
  },
  {
    title: "Scenski trenutak",
    subtitle: "video thumbnail",
    image: "images/gallery/video/video-thumb-monolog-mikrofon.jpg",
    link: "#"
  }
];

var press = [
  {
    title: "Sonja Leštar: Umetnost je alat kojim menjamo svet",
    source: "Hoću pozorište",
    image: "images/gallery/press/press-clipping-sonja-intervju-01.jpg",
    link: "https://www.hocupozoriste.rs/intervjui/sonja-lestar-umetnost-je-alat-kojim-menjamo-svet"
  },
  {
    title: "Škola glume za odrasle u Novom Sadu",
    source: "Dnevnik / Naslovi",
    image: "images/gallery/press/press-clipping-lunart-novine-01.jpg",
    link: "https://naslovi.net/2018-11-11/dnevnik/skola-glume-za-odrasle-u-novom-sadu/22523092"
  },
  {
    title: "Sonja kroz pedagoški rad menja svet nabolje",
    source: "Moj Novi Sad",
    image: "images/gallery/press/press-clipping-sonja-intervju-02.jpg",
    link: "https://www.mojnovisad.com/novosadjani-kroz-pedagoski-rad-i-primenjeno-pozoriste-sonja-menja-svet-nabolje/"
  },
  {
    title: "LunArt: mesto gde se i odrasli igraju",
    source: "Moj Novi Sad",
    image: "images/gallery/press/press-workshop-materials.jpg",
    link: "https://www.mojnovisad.com/skola-glume-lunart-mesto-gde-se-i-odrasli-igraju/"
  }
];

function renderPhotos() {
  var container = document.getElementById("photoGrid");
  if (!container) return;

  for (var i = 0; i < photos.length; i++) {
    container.innerHTML +=
      '<div class="photo-tile">' +
        '<img src="' + photos[i] + '" alt="LunArt fotografija ' + (i + 1) + '">' +
      '</div>';
  }
}

function renderVideos() {
  var container = document.getElementById("videoGrid");
  if (!container) return;

  for (var i = 0; i < videos.length; i++) {
    container.innerHTML +=
      '<article class="media-card video-card">' +
        '<span class="play-badge">▶</span>' +
        '<img src="' + videos[i].image + '" alt="' + videos[i].title + '">' +
        '<div class="media-body">' +
          '<h3>' + videos[i].title + '</h3>' +
          '<p>' + videos[i].subtitle + '</p>' +
          '<a href="' + videos[i].link + '" target="_blank" rel="noreferrer">Otvori video</a>' +
        '</div>' +
      '</article>';
  }
}

function renderPress() {
  var container = document.getElementById("pressGrid");
  if (!container) return;

  for (var i = 0; i < press.length; i++) {
    container.innerHTML +=
      '<article class="media-card">' +
        '<img src="' + press[i].image + '" alt="' + press[i].title + '">' +
        '<div class="media-body">' +
          '<h3>' + press[i].title + '</h3>' +
          '<p>' + press[i].source + '</p>' +
          '<a href="' + press[i].link + '" target="_blank" rel="noreferrer">Pročitaj</a>' +
        '</div>' +
      '</article>';
  }
}

function setupForm() {
  var form = document.getElementById("contactForm");
  var output = document.getElementById("formOutput");
  if (!form || !output) return;

  form.onsubmit = function (event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var term = document.getElementById("term").value;
    var interest = document.getElementById("interest").value;
    var message = document.getElementById("message").value.trim();

    var errors = [];

    if (fullName === "") {
      errors.push("Unesite ime i prezime.");
    }

    if (email === "") {
      errors.push("Unesite e-mail adresu.");
    } else if (email.indexOf("@") === -1) {
      errors.push("E-mail mora sadržati znak @.");
    }

    if (phone === "") {
      errors.push("Unesite telefon.");
    }

    if (term === "") {
      errors.push("Izaberite termin.");
    }

    if (interest === "") {
      errors.push("Izaberite šta vas najviše zanima.");
    }

    if (message.length < 10) {
      errors.push("Poruka treba da ima bar 10 karaktera.");
    }

    output.className = "form-output";

    if (errors.length > 0) {
      output.classList.add("error");
      output.innerHTML = "<strong>Proverite unos:</strong><br>" + errors.join("<br>");
    } else {
      output.classList.add("success");
      output.innerHTML =
        "<strong>Demo prijava je popunjena.</strong><br>" +
        "Ime: " + fullName + "<br>" +
        "Termin: " + term + "<br>" +
        "Interesovanje: " + interest + "<br>" +
        "Napomena: forma je za školski projekat i ne šalje podatke na server.";

      form.reset();
    }
  };
}

function setupCurtainIntro() {
  var enterButton = document.getElementById("enterButton");
  var curtainIntro = document.getElementById("curtainIntro");

  if (!enterButton || !curtainIntro) return;

  var navEntries = performance.getEntriesByType
    ? performance.getEntriesByType("navigation")
    : [];

  var navEntry = navEntries.length > 0 ? navEntries[0] : null;
  var isReload = navEntry && navEntry.type === "reload";

  var shouldSkipIntro =
    window.location.hash === "#pocetna" &&
    !isReload;

  if (shouldSkipIntro) {
    curtainIntro.classList.add("finished");
    document.body.classList.remove("intro-active");
    return;
  }

  enterButton.addEventListener("click", function () {
    curtainIntro.classList.add("open");

    setTimeout(function () {
      curtainIntro.classList.add("finished");
      document.body.classList.remove("intro-active");
    }, 1500);
  });
}

renderPhotos();
renderVideos();
renderPress();
setupForm();
setupCurtainIntro();
