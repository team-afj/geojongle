import "../css/main.css";
import Leaflet from "leaflet";
import { Address, addresses } from "./data";

Leaflet.Icon.Default.imagePath = "images/";

// Page elements
const table = document.getElementById("data-tbl")! as HTMLTableElement;

// Map initialization

let map = Leaflet.map("map").setView([46.603354, 1.8883335], 5);

Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const locate_svg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z" /></svg>';

// Controls
const locate_btn = Leaflet.DomUtil.create("div");
locate_btn.classList.add("leaflet-bar");
let locate_btn_link = Leaflet.DomUtil.create("a");
locate_btn_link.classList.add("locate-icon");
locate_btn.appendChild(locate_btn_link);

let Locate = Leaflet.Control.extend({
  onAdd: function (map) {
    Leaflet.DomEvent.on(locate_btn_link, "click", (_) =>
      map.locate({ setView: true, maxZoom: 12 }),
    );

    return locate_btn;
  },

  onRemove: function (map) {
    Leaflet.DomEvent.off(locate_btn_link);
  },
});

map.addControl(new Locate({ position: "topleft" }));

// Markers

const make_marker = (address: Address) => {
  let m = Leaflet.marker([address.osm_data.lat, address.osm_data.lon]).addTo(
    map,
  );
  m.bindPopup(
    `<b>${address.name}</b></br><a target="_blank" href="${address.url}">Voir les informations les plus récentes.</a><br>${address.description}`,
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
