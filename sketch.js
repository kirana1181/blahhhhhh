let constellations = [];

function preload() {
  constellations = [
    {
      name: " <br> Pegasus",
      stars: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/pegbs.png?v=1740631902097"),
      lines: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/pegc.png?v=1740631905923"),
      x: 100, y: 750, width: 200, height: 200,
      opacity: 0,
      clicked: false,
      link: { url: "https://caninesoups.glitch.me/02-weektwo.html", element: null, opacity: 0 }
    },
    {
      name: " <br> Big Dipper",
      stars: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/bdubs.png?v=1740631889685"),
      lines: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/bduc.png?v=1740631898760"),  // Use 'lines' here for consistency
      x: 300, y: 300, width: 200, height: 200,
      opacity: 0,
      clicked: false,
      link: { url: "https://caninesoups.glitch.me/03-weekthree.html", element: null, opacity: 0 }
    },
    {
      name: " <br> Crane",
      stars: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/REALbirdback%3E.png?v=1740633143463"),
      lines: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/REALvrane.png?v=1740633073107"),
      x: 50, y: 450, width: 200, height: 200,
      opacity: 0,
      clicked: false,
      link: { url: "https://caninesoups.glitch.me/04-weekfour.html", element: null, opacity: 0 }
    },
    {
      name: " <br> Orion",
      stars: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/orionbgs.png?v=1740631921099"),
      lines: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/orioncon.png?v=1740631924940"),  // Consistent use of 'lines' here
      x: 500, y: 580, width: 200, height: 200,
      opacity: 0,
      clicked: false,
      link: { url: "https://caninesoups.glitch.me/05-weekfive.html", element: null, opacity: 0 }
    },
    {
      name: " <br> Canis",
      stars: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/wolfbs.png?v=1740631935000"),
      lines: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/wolfcon.png?v=1740631937483"),  // Consistent use of 'lines' here
      x: 850, y: 550, width: 200, height: 200,
      opacity: 0,
      clicked: false,
      link: { url: "https://caninesoups.glitch.me/06-weeksix.html", element: null, opacity: 0 }
    },
    
    {
      name: " <br> Cassopia",
      stars: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/cassiobg.png?v=1740631928466"),
      lines: loadImage("https://cdn.glitch.global/85a4c857-ad28-44ff-bb18-b0dbdb283d4d/cassiocon.png?v=1740631931376"), 
      x: 890, y: 300, width: 200, height: 200,
      opacity: 0,
      clicked: false,
      link: { url: "https://caninesoups.glitch.me/07-weekseven.html", element: null, opacity: 0 }
      
    },
  ];
}

function setup() {
  let cnv = createCanvas(1500, 1000);
  cnv.parent(document.body);
    cnv.position(50, 200);

  for (let constellation of constellations) {
    constellation.link.element = createA(constellation.link.url, constellation.name, "_blank");
    constellation.link.element.position(constellation.x + 50, constellation.y + 220);
    constellation.link.element.style("opacity", "0");
    constellation.link.element.style("pointer-events", "none"); // Initially disable link
  }
}

function draw() {
  clear();

  for (let constellation of constellations) {
    // Draw star backgrounds
    image(constellation.stars, constellation.x, constellation.y, constellation.width, constellation.height);

    // Fade in constellation lines if clicked
    tint(255, constellation.opacity);
    image(constellation.lines, constellation.x, constellation.y, constellation.width, constellation.height); // Use 'lines' consistently here
    noTint();

    // Increase opacity gradually
    if (constellation.clicked && constellation.opacity < 255) {
      constellation.opacity += 10;
    }

    // Fade in link when constellation is fully visible
    if (constellation.opacity >= 255 && constellation.link.opacity < 255) {
      constellation.link.opacity += 15;
      constellation.link.element.style("opacity", constellation.link.opacity / 255);
      constellation.link.element.style("pointer-events", "auto"); // Enable link
    }
  }
}

function mousePressed() {
  for (let constellation of constellations) {
    if (
      mouseX > constellation.x &&
      mouseX < constellation.x + constellation.width &&
      mouseY > constellation.y &&
      mouseY < constellation.y + constellation.height
    ) {
      constellation.clicked = true;
    }
  }
}
