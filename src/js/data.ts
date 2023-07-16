interface Address {
  id: number;
  name: string;
  tags: string[];
  address: string;
  cp: string;
  city: string;
  phone: string;
  url: string;
  description: string;
  lat: number;
  lon: number;
  osm_data: any;
}

const addresses: Address[] = [
  {
    id: 0,
    name: "Atelier de l'Association Parisienne de Jonglerie",
    tags: ["atelier", "association"],
    address: "35 rue du Borrégo",
    cp: "75020",
    city: "Paris",
    phone: "",
    url: "https://www.facebook.com/groups/AssoAPJ",
    description:
      "Un atelier de pratique libre tous les lundis soir de 18 à 22h. Consultez notre page Facebook pour vérifier que nous sommes ouverts !",
    lat: 48.873487,
    lon: 2.4016703,
    osm_data: {
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
  },
  {
    id: 1,
    name: "Le 104",
    tags: ["atelier"],
    address: "104 rue Curial",
    cp: "75019",
    city: "Paris",
    phone: "",
    url: "https://www.facebook.com/groups/195906267664217",
    description:
      "Un espace de pratique libre ouvert à tous. Régulièrement fréquenté par les jongleurs. Horaires officiels: https://www.104.fr/",
    lat: 48.89022835,
    lon: 2.3700638016472877,
    osm_data: {
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
  },
];

export { Address, addresses };
