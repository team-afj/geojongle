interface Osm_data {
  place_id: number;
  [key: string]: any;
}

const osm_places: Osm_data[] = [
  {
    place_id: 17678739,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "node",
    osm_id: 1990698649,
    boundingbox: ["48.873437", "48.873537", "2.4016203", "2.4017203"],
    lat: "48.873487",
    lon: "2.4016703",
    display_name:
      "43, Rue du Borrégo, Quartier Saint-Fargeau, Paris 20e Arrondissement, Paris, Île-de-France, France métropolitaine, 75020, France",
    class: "place",
    type: "house",
    importance: 0.5101,
    address: {
      house_number: "43",
      road: "Rue du Borrégo",
      neighbourhood: "Quartier Saint-Fargeau",
      suburb: "Paris 20e Arrondissement",
      city: "Paris",
      municipality: "Paris",
      county: "Paris",
      "ISO3166-2-lvl6": "FR-75",
      state: "Île-de-France",
      "ISO3166-2-lvl4": "FR-IDF",
      region: "France métropolitaine",
      postcode: "75020",
      country: "France",
      country_code: "fr",
    },
  },
  {
    place_id: 176263154,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "way",
    osm_id: 278632326,
    boundingbox: ["48.8896714", "48.8908175", "2.3684767", "2.3716657"],
    lat: "48.89022835",
    lon: "2.3700638016472877",
    display_name:
      "Le Cent Quatre, Rue Curial, Paris 19e Arrondissement, Paris, Quartier de la Villette, Paris, Île-de-France, France métropolitaine, 75019, France",
    class: "amenity",
    type: "arts_centre",
    importance: 0.5852446327297394,
    icon: "https://nominatim.openstreetmap.org/ui/mapicons/tourist_art_gallery2.p.20.png",
    address: {
      amenity: "Le Cent Quatre",
      road: "Rue Curial",
      suburb: "Paris 19e Arrondissement",
      city: "Paris",
      municipality: "Paris",
      county: "Paris",
      "ISO3166-2-lvl6": "FR-75",
      state: "Île-de-France",
      "ISO3166-2-lvl4": "FR-IDF",
      region: "France métropolitaine",
      postcode: "75019",
      country: "France",
      country_code: "fr",
    },
  },
  {
    place_id: 163168480,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "way",
    osm_id: 232423298,
    boundingbox: ["49.0204827", "49.0409754", "2.0370141", "2.0602764"],
    lat: "49.030415649999995",
    lon: "2.0480828272144045",
    display_name:
      "Île de Loisirs de Cergy-Pontoise, Cergy, Pontoise, Val-d'Oise, Île-de-France, France métropolitaine, France",
    class: "leisure",
    type: "park",
    importance: 0.35272032385618207,
    address: {
      leisure: "Île de Loisirs de Cergy-Pontoise",
      town: "Cergy",
      municipality: "Pontoise",
      county: "Val-d'Oise",
      "ISO3166-2-lvl6": "FR-95",
      state: "Île-de-France",
      "ISO3166-2-lvl4": "FR-IDF",
      region: "France métropolitaine",
      country: "France",
      country_code: "fr",
    },
  },
];
