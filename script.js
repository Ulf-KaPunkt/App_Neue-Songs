const allSongs = {
"Sunday Bloody Sunday – U2": "alle"
"Denkmal – Wir sind Helden": "frau"
"Friday I’m in Love – The Cure": "mann"
"You Give Love a Bad Name – Bon Jovi": "frau"
"Wonderwall – Oasis": "mann"
"When I Come Around – Green Day": "mann"
"Mr. Jones – Counting Crows": "frau"
"Westerland – Die Ärzte": "beide"
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
    history = [];
    alert("Alle Songs wurden gespielt. Die Liste wird zurückgesetzt.");
    return;
  }

  const selected = remaining[Math.floor(Math.random() * remaining.length)];
  document.getElementById("output").textContent = selected;
  history.push(selected);

  const showList = getFiltered(filter)
    .map(s => "• " + s)
    .join("<br>");
  document.getElementById("list").innerHTML = showList;
}
