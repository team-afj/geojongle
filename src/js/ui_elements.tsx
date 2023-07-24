import { Address } from "./data";

export const marker_popup = (a: Address) =>
  `<div>
    <div>
        <b>${a.name}</b></br>
        <a target="_blank" href="${a.url}">Voir les informations les plus récentes.</a><br>${a.description}</div>
<div class="buttons are-small are-outlined">
  <a class="button" target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lon}">Google Maps</a>
  <a class="button" target="_blank" href="https://www.openstreetmap.org/directions?from=&to=${a.lat}%2C${a.lon}#map=16/${a.lat}/${a.lon}">Open Street Maps</a>
</div>
</div>`;
