
const allSongs = {
  "Sunday Bloody Sunday – U2": "alle",
  "Denkmal – Wir sind Helden": "frau",
  "Friday I’m in Love – The Cure": "mann",
  "You Give Love a Bad Name – Bon Jovi": "frau",
  "Wonderwall – Oasis": "mann",
  "When I Come Around – Green Day": "mann",
  "Mr. Jones – Counting Crows": "frau",
  "Westerland – Die Ärzte": "beide",
  "Bohemian Like You – Dandy Warhols": "mann"
};
let history = [];

function getFiltered(filter) {
  return Object.keys(allSongs).filter(song =>
    filter === "alle" ||
    allSongs[song] === filter ||
    allSongs[song] === "beide"
  );
}

function drawSong() {
  const filter = document.getElementById("filter").value;
  const pool = getFiltered(filter);
  const remaining = pool.filter(song => !history.includes(song));

  if (remaining.length === 0) {
    alert("Alle Songs wurden gespielt. Die Liste wird zurückgesetzt.");
    history = [];
    return;
  }

  const selected = remaining[Math.floor(Math.random() * remaining.length)];
  document.getElementById("output").textContent = selected;
  history.push(selected);

  const fullList = getFiltered(filter)
    .map(s => "<span style='color:white; font-size:0.9em; font-weight:normal;'>• " + s + "</span>")
    .join("<br>");
  document.getElementById("list").innerHTML = fullList;
}
