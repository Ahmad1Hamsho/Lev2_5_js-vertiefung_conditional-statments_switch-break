function check() {
  const bundesland = document.getElementById("bundeslandInfoErgebnis");
  const bundeslandInfo = document.getElementById("bundeslandInfo").value;

  switch (bundeslandInfo) {
    case "Baden-Württemberg":
      bundesland.innerText =
        "hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "Bayern":
      bundesland.innerText =
        "hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;
    case "Berlin":
      bundesland.innerText =
        "hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    case "Brandenburg":
      bundesland.innerText =
        "hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    case "Bremen":
      bundesland.innerText =
        "hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "Hamburg":
      bundesland.innerText =
        "hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    case "Hessen":
      bundesland.innerText =
        "hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    case "Mecklenburg-Vorpommern":
      bundesland.innerText =
        "hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    case "Niedersachsen":
      bundesland.innerText =
        "hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
    case "Nordrhein-Westfalen":
      bundesland.innerText =
        "hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "Rheinland-Pfalz":
      bundesland.innerText =
        "hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
      break;
    case "Saarland":
      bundesland.innerText =
        "hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
    case "Sachsen":
      bundesland.innerText =
        "hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
    case "Sachsen-Anhalt":
      bundesland.innerText =
        "hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
    case "Schleswig-Holstein":
      bundesland.innerText =
        "hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
    case "Thüringen":
      bundesland.innerText =
        "hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;
    default:
      bundesland.innerText =
        "Ein solches Bundesland gibt es in Deutschland nicht.";
  }
}
