import "../css/main.css";
import Leaflet, { marker } from "leaflet";
import { Address, addresses } from "./data";
import * as Ui from "./ui_elements";
import Fuse from "fuse.js";

Leaflet.Icon.Default.imagePath = "leaflet-images/";

// Page elements
const filter_text = document.getElementById("data-filter")! as HTMLInputElement;
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

let layer_groups: Map<string, Leaflet.LayerGroup> = new Map();

// Markers
const make_marker = (address: Address) => {
  let marker = Leaflet.marker([address.lat, address.lon]);

  let layer_group = layer_groups.get(address.tags[0]);

  if (layer_group === undefined) {
    layer_group = new Leaflet.LayerGroup();
    layer_groups.set(address.tags[0], layer_group);
  }

  layer_group.addLayer(marker);

  marker.bindPopup(Ui.marker_popup(address));
  return { address, marker };
};

type with_marker = {
  address: Address;
  marker: Leaflet.Marker<any>;
};

const addresses_with_marker = addresses.map(make_marker);

let layer_control = new Leaflet.Control.Layers();
layer_groups.forEach((group, name) => {
  group.addTo(map);
  layer_control.addOverlay(group, name);
});
layer_control.addTo(map);

const redraw_table = (addresses: with_marker[]) => {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

  // Empty the table (but keep the header)
  while (table_body.rows.length) {
    table_body.deleteRow(0);
  }

  let map_bounds = map.getBounds();

  // Add new values
  addresses.forEach(({ address, marker }) => {
    let _visible = map_bounds.contains([address.lat, address.lon]);
    let row = table_body.insertRow();
    row.insertCell().innerHTML = address.id.toString();
    row.insertCell().innerHTML = address.name;
    row.insertCell().innerHTML = `${address.city} (${address.cp})`;
    Leaflet.DomEvent.on(row, "click", () => {
      let m = marker as Leaflet.Marker;
      if (m.isPopupOpen()) map.flyTo(m.getLatLng(), 12);
      else m.openPopup();
    });
  });
};

const fuse_options = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: false,
  // includeMatches: false,
  // findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.5,
  // distance: 100,
  // useExtendedSearch: false,
  ignoreLocation: true,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    "address.name",
    "address.city",
    "address.cp",
    "address.osm_data.address.country",
  ],
};

const fuse_index = Fuse.createIndex(fuse_options.keys, addresses_with_marker);
const fuse = new Fuse(addresses_with_marker, fuse_options, fuse_index);
let search_options = { filter: "" };

const refresh_table = () => {
  // We filter addresses using the fuzzy search
  if (search_options.filter.length === 0) redraw_table(addresses_with_marker);
  else {
    let filtered = fuse
      .search(search_options.filter)
      .map(({ item: address }) => address);
    redraw_table(filtered);
  }
};

// On map move we update the marker visibility in the table and the order
const on_map_update = () => {
  let map_center = map.getCenter();

  // We sort the addresses by closest to the center of the map
  addresses_with_marker.sort(
    ({ address: a }, { address: b }) =>
      Leaflet.latLng(a.lat, a.lon).distanceTo(map_center) -
      Leaflet.latLng(b.lat, b.lon).distanceTo(map_center)
  );

  refresh_table();
};

// On filter update
const on_filter_update = (new_value) => {
  search_options.filter = new_value;
  refresh_table();
};

// Add event listeners
map.on({ zoomend: on_map_update, moveend: on_map_update });
filter_text.addEventListener("keyup", (_e) =>
  on_filter_update(filter_text.value)
);

// Initialize the table:
on_map_update();
