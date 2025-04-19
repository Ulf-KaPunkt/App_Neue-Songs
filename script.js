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

function getFilteredKeys(filter) {
  return Object.keys(allSongs).filter(song => {
    return (
      filter === "alle" ||
      allSongs[song] === filter ||
      (filter === "mann" && allSongs[song] === "beide") ||
      (filter === "frau" && allSongs[song] === "beide")
    );
  });
}

function drawSong() {
  const filter = document.getElementById("filter").value;
  const pool = getFilteredKeys(filter);
  const available = pool.filter(song => !history.includes(song));
  if (available.length === 0) {
    history = [];
    alert("Alle Songs wurden bereits gespielt. Die Liste wird zurückgesetzt.");
    return;
  }
  const choice = available[Math.floor(Math.random() * available.length)];
  document.getElementById("output").textContent = choice;
  history.push(choice);

  const showList = getFilteredKeys(filter)
    .map(s => "• " + s)
    .join("<br>");
  document.getElementById("smalllist").innerHTML = showList;
}
