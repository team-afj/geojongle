interface Address {
  id: number;
  name: string;
  tags: string[];
  address: string;
  cp: string;
  city: string;
  country: string;
  phone: string;
  url: string;
  description: string;
  lat: number;
  lon: number;
  osm_place_id: number;
}

const addresses: Address[] = [
  {
    id: 0,
    name: "Atelier de l'Association Parisienne de Jonglerie",
    tags: ["atelier", "association"],
    address: "35 rue du Borrégo",
    cp: "75020",
    city: "Paris",
    country: "France",
    phone: "",
    url: "https://www.facebook.com/groups/AssoAPJ",
    description:
      "Un atelier de pratique libre tous les lundis soir de 18 à 22h. Consultez notre page Facebook pour vérifier que nous sommes ouverts !",
    lat: 48.873487,
    lon: 2.4016703,
    osm_place_id: 17678739,
  },
  {
    id: 1,
    name: "Le 104",
    tags: ["atelier"],
    address: "104 rue Curial",
    cp: "75019",
    city: "Paris",
    country: "France",
    phone: "",
    url: "https://www.facebook.com/groups/195906267664217",
    description:
      'Un espace de pratique libre ouvert à tous. Régulièrement fréquenté par les jongleureuses. Site officiel: <a href="https://www.104.fr/" target="_blank">www.104.fr</a>',
    lat: 48.89022835,
    lon: 2.3700638016472877,
    osm_place_id: 176263154,
  },
  {
    id: 2,
    name: "Rencontres Franciliennes de Jonglerie",
    tags: ["convention"],
    address: "Île de Loisirs de Cergy-Pontoise",
    cp: "95000",
    city: "Cergy",
    country: "France",
    phone: "",
    url: "https://cherche-trouve.com/lile-aux-jonglages-2023/",
    description:
      "Une convention annuelle, détails et renseignements sur le site internet.",
    lat: 49.030415649999995,
    lon: 2.0480828272144045,
    osm_place_id: 163168480,
  },
  {
    id: 3,
    name: "Ateliers des Capucins",
    tags: ["convention"],
    address: "25 rue de Pontaniou",
    cp: "29200",
    city: "Brest",
    country: "France",
    phone: "",
    url: "https://www.ateliersdescapucins.fr/fr/infos-pratiques",
    description:
      "Un espace de pratique libre ouvert à tous. Régulièrement fréquenté par les jongleureuses.",
    lat: 48.3893054,
    lon: -4.498250191014672,
    osm_place_id: 163168480,
  },
];

export { Address, addresses };
