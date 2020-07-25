var q = location.search;
var params = q.split("&");
var settings = {};
params.forEach(function (item) {
  var p = item.split("=");
  settings[p[0].replace("?", "").replace("$", "")] = decodeURI(p[1]);
});
console.log(settings);

var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.textContent = settings.text;
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

WebFont.load({
  google: {
    families: [settings.font || "Roboto"],
  },
});

document.querySelector(".letters").style.fontFamily =
  settings.font.replace("+", "") || "Roboto";
document.querySelector(".letters").style.fontWeight = settings.weight;
document.querySelector(".letters").style.fontSize = settings.size;
document.querySelector(".letters").style.fontStyle = settings.style;
document.querySelector(".letters").style.color = "#" + settings.color;

if (settings.type === "ef1") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i + 1),
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

if (settings.type === "ef2") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

if (settings.type === "ef3") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i + 1),
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

if (settings.type === "ef4") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i,
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

if (settings.type === "ef5") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i,
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

if (settings.type === "ef6") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

if (settings.type === "ef7") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i,
    })
    .add({
      targets: ".ml1 .letter",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i,
    });
}

if (settings.type === "ef8") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i,
    })
    .add({
      targets: ".ml1 .letter",
      translateY: [0, -100],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i,
    });
}

if (settings.type === "ef9") {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
