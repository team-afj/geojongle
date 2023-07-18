import "../css/main.css";
import Leaflet from "leaflet";
import { Address, addresses } from "./data";

Leaflet.Icon.Default.imagePath = "leaflet-images/";

// Page elements
const table = document.getElementById("data-tbl")! as HTMLTableElement;
const table_body = document.getElementById(
  "data-tbl-body"
)! as HTMLTableSectionElement;

// Map initialization
let map = Leaflet.map("map").setView([46.603354, 1.8883335], 5);

Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Controls
const locate_btn = Leaflet.DomUtil.create("div");
locate_btn.classList.add("leaflet-bar");
let locate_btn_link = Leaflet.DomUtil.create("a");
locate_btn_link.classList.add("locate-icon");
locate_btn.appendChild(locate_btn_link);

let Locate = Leaflet.Control.extend({
  onAdd: function (map) {
    Leaflet.DomEvent.on(locate_btn_link, "click", (_) =>
      map.locate({ setView: true, maxZoom: 12 })
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
  let marker = Leaflet.marker([address.lat, address.lon]).addTo(map);
  marker.bindPopup(
    `<b>${address.name}</b></br><a target="_blank" href="${address.url}">Voir les informations les plus récentes.</a><br>${address.description}`
  );
  return { ...address, marker };
};

const addresses_with_marker = addresses.map(make_marker);

const reset_table = (addresses) => {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
  // Empty the table (but keep the header)
  while (table_body.rows.length) {
    table_body.deleteRow(0);
  }

  // Add new values
  addresses.forEach((address) => {
    let row = table_body.insertRow();
    row.insertCell().innerHTML = address.id.toString();
    row.insertCell().innerHTML = address.name;
    row.insertCell().innerHTML = address.city;
    Leaflet.DomEvent.on(row, "click", () => address.marker.openPopup());
  });
};

// On map move we update the marker visibility in the table and the order

const on_map_update = () => {
  let map_bounds = map.getBounds();
  let map_center = map.getCenter();
  addresses_with_marker.sort(
    (a, b) =>
      Leaflet.latLng(a.lat, a.lon).distanceTo(map_center) -
      Leaflet.latLng(b.lat, b.lon).distanceTo(map_center)
  );
  let addresses_with_visibility = addresses_with_marker.map((a) => {
    let visible = map_bounds.contains([a.lat, a.lon]);
    return { ...a, visible };
  });
  reset_table(addresses_with_visibility);
};

map.on({ zoomend: on_map_update, moveend: on_map_update });

// Initialize the table:
on_map_update();

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
