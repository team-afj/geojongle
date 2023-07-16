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
  osm_data: any
}

const addresses : Address[] = [
    {
        id: 0,
        name: "Atelier de l'Association Parisienne de Jonglerie",
        tags:["atelier"],
        address: "35 rue du Borrégo",
        cp: "75019",
        city: "Paris",
        phone: "",
        url: "https://www.facebook.com/groups/AssoAPJ",
        description: "Un atelier de pratique libre tous les lundis soir de 18 à 22h. Consultez notre page Facebook pour vérifier que nous sommes ouverts !",
        lat: 48.873487,
        lon: 2.4016703,
        osm_data:   {
            "place_id": 17678739,
            "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
            "osm_type": "node",
            "osm_id": 1990698649,
            "boundingbox": [
              "48.873437",
              "48.873537",
              "2.4016203",
              "2.4017203"
            ],
            "lat": "48.873487",
            "lon": "2.4016703",
            "display_name": "43, Rue du Borrégo, Quartier Saint-Fargeau, Paris 20e Arrondissement, Paris, Île-de-France, France métropolitaine, 75020, France",
            "class": "place",
            "type": "house",
            "importance": 0.5101,
            "address": {
              "house_number": "43",
              "road": "Rue du Borrégo",
              "neighbourhood": "Quartier Saint-Fargeau",
              "suburb": "Paris 20e Arrondissement",
              "city": "Paris",
              "municipality": "Paris",
              "county": "Paris",
              "ISO3166-2-lvl6": "FR-75",
              "state": "Île-de-France",
              "ISO3166-2-lvl4": "FR-IDF",
              "region": "France métropolitaine",
              "postcode": "75020",
              "country": "France",
              "country_code": "fr"
            }
          }
    }
]

export { Address, addresses }
