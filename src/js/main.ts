import "../css/main.css";
import Leaflet from "leaflet";
import { Address, addresses } from "./data";

Leaflet.Icon.Default.imagePath = "images/";

const table = document.getElementById("data-tbl")! as HTMLTableElement;

let map = Leaflet.map("map").setView([46.603354, 1.8883335], 5);

Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const make_marker = (address: Address) => {
  let m = Leaflet.marker([address.osm_data.lat, address.osm_data.lon]).addTo(
    map
  );
  m.bindPopup(
    `<b>${address.name}</b></br><a target="_blank" href="${address.url}">Voir les informations les plus récentes.</a><br>${address.description}`
  ).openPopup();
  return m;
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
const table_rows = addresses.map((address) => {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  id.innerHTML = address.id.toString();
  let name = document.createElement("td");
  name.innerHTML = address.name;
  let city = document.createElement("td");
  city.innerHTML = address.city;

  row.appendChild(id);
  row.appendChild(name);
  row.appendChild(city);
  return row;
});

const markers = addresses.map(make_marker);

const reset_table = (addresses: Address[]) => {
  // Empty the table
  table.querySelectorAll("tbody").forEach((tbody) => {
    tbody.remove();
  });
  // Add new values
  addresses.forEach((address) => {
    let row = table.insertRow();
    row.insertCell().innerHTML = address.id.toString();
    row.insertCell().innerHTML = address.name;
    row.insertCell().innerHTML = address.city;
  });
  // rows.forEach((row) => table?.appendChild(row));
};

reset_table(addresses);
console.log(addresses);

/*
[
  {
    "place_id": 297967691,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "relation",
    "osm_id": 2202162,
    "boundingbox": [
      "-50.2187169",
      "51.3055721",
      "-178.3873749",
      "172.3057152"
    ],
    "lat": "46.603354",
    "lon": "1.8883335",
    "display_name": "France",
    "class": "boundary",
    "type": "administrative",
    "importance": 1.0133264437396503,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
    "address": {
      "country": "France",
      "country_code": "fr"
    }
  }
]
*/
