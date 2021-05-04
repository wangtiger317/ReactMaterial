/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";

// const dashboardRoutes = [
//   {
//     path: "/categorie/Danger",
//     name: "Danger",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Danger",
//   },
//   {
//     path: "/categorie/Indication",
//     name: "Indication",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Indication",
//   },
//   {
//     path: "/categorie/Destination",
//     name: "Destination",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Destination",
//   },
//   {
//     path: "/categorie/Équipements spécifiques",
//     name: "Équipements spécifiques",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "ESpecifique",
//   },
//   {
//     path: "/categorie/Équipements touristiques",
//     name: "Équipements touristiques",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "ETouristique",
//   },

//   {
//     path: "/categorie/Site patrimonial",
//     name: "Site patrimonial",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "SPatrimonial",
//   },
//   {
//     path: "/categorie/Attraits privés",
//     name: "Attraits privés",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "APrives",
//   },
//   {
//     path: "/categorie/Attraits publics",
//     name: "Attraits publics",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "APublics",
//   },
//   {
//     path: "/categorie/Information touristique",
//     name: "Information touristique",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "ITouristique",
//   },
//   {
//     path: "/categorie/Itinéraire cyclable",
//     name: "Itinéraire cyclable",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "ICyclable",
//   },
//   {
//     path: "/categorie/Parcs routiers",
//     name: "Parcs routiers",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "PRoutiers",
//   },
//   {
//     path: "/categorie/Pictogrammes",
//     name: "Pictogrammes",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Pictogrammes",
//   },
//   {
//     path: "/categorie/Réserves, parcs et refuges fauniques",
//     name: "Réserves, parcs et refuges fauniques",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "RPRFauniques",
//   },
//   {
//     path: "/categorie/Route touristique",
//     name: "Route touristique",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "RTouristique",
//   },
//   {
//     path: "/categorie/Services",
//     name: "Services",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Services",
//   },

//   {
//     path: "/categorie/Information",
//     name: "Information",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Information",
//   },
//   {
//     path: "/categorie/Repérage",
//     name: "Repérage",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Reperage",
//   },
//   {
//     path: "/categorie/Varia",
//     name: "Varia",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Varia",
//   },
//   {
//     path: "/categorie/Écussons d'autoroute",
//     name: "Écussons d'autoroute",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "EAutoroute",
//   },
//   {
//     path: "/categorie/Écussons de route",
//     name: "Écussons de route",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "ERoute",
//   },
//   {
//     path: "/categorie/Limite territoriale",
//     name: "Limite territoriale",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "LTerritoriale",
//   },
//   {
//     path: "/categorie/Nom d'un chemin ou d'un pont",
//     name: "Nom d'un chemin ou d'un pont",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "NCheminPont",
//   },
//   {
//     path: "/categorie/Repères géographiques",
//     name: "Repères géographiques",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "RGeographiques",
//   },
//   {
//     path: "/categorie/Repères kilométriques",
//     name: "Repères kilométriques",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "RKilometriques",
//   },
//   {
//     path: "/categorie/Prescription",
//     name: "Prescription",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Prescription",
//   },
//   {
//     path: "/categorie/Panneaux spéciaux",
//     name: "Panneaux spéciaux",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "PSpeciaux",
//   },
//   {
//     path: "/categorie/Plaques toponymiques",
//     name: "Plaques toponymiques",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "PToponymiques",
//   },
//   {
//     path: "/categorie/Divers",
//     name: "Divers",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Divers",
//   },
//   {
//     path: "/categorie/Plaquettes",
//     name: "Plaquettes",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Plaquettes",
//   },
//   {
//     path: "/categorie/Autres",
//     name: "Autres",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Autres",
//   },
//   {
//     path: "/categorie/Travaux",
//     name: "Travaux",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "Travaux",
//   },
//   {
//     path: "/categorie/LiensRapides",
//     name: "Liens Rapides",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "LiensRapides",
//   },
//   {
//     path: "/categorie/PanneauArret",
//     name: "Panneau d'arrêt",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "PanneauArret",
//   },
//   {
//     path: "/categorie/LimiteVitesse",
//     name: "Limite de vitesse",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "LimiteVitesse",
//   },
//   {
//     path: "/categorie/InterdictionArret",
//     name: "Interdiction d'arrêt",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "InterdictionArret",
//   },
//   {
//     path: "/categorie/InterdictionStationner",
//     name: "Interdiction de stationner",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "InterdictionStationner",
//   },
//   {
//     path: "/categorie/TransTerrebonne",
//     name: "TransTerrebonne",
//     component: DashboardPage,
//     layout: "/admin",
//     key: "TransTerrebonne",
//   },
// ];

const dashboardRoutes = [
  {
    path: "/categorie/Danger",
    name: "Danger",
    component: DashboardPage,
    layout: "/admin",
    key: "Danger",
  },
  {
    path: "/categorie/Indication",
    name: "Indication",
    component: DashboardPage,
    layout: "/admin",
    key: "Indication",
    children: [
      {
        path: "/categorie/Indication/Destination",
        name: "Destination",
        component: DashboardPage,
        layout: "/admin",
        key: "Destination",
      },
      {
        path: "/categorie/Indication/Équipements spécifiques",
        name: "Équipements spécifiques",
        component: DashboardPage,
        layout: "/admin",
        key: "ESpecifique",
      },
      {
        path: "/categorie/Indication/Équipements touristiques",
        name: "Équipements touristiques",
        component: DashboardPage,
        layout: "/admin",
        key: "ETouristique",
        children: [
          {
            path:
              "/categorie/Indication/Équipements touristiques/Site patrimonial",
            name: "Site patrimonial",
            component: DashboardPage,
            layout: "/admin",
            key: "SPatrimonial",
          },
          {
            path:
              "/categorie/Indication/Équipements touristiques/Attraits privés",
            name: "Attraits privés",
            component: DashboardPage,
            layout: "/admin",
            key: "APrives",
          },
          {
            path:
              "/categorie/Indication/Équipements touristiques/Attraits publics",
            name: "Attraits publics",
            component: DashboardPage,
            layout: "/admin",
            key: "APublics",
          },
          {
            path:
              "/categorie/Indication/Équipements touristiques/Information touristique",
            name: "Information touristique",
            component: DashboardPage,
            layout: "/admin",
            key: "ITouristique",
          },
          {
            path:
              "/categorie/Indication/Équipements touristiques/Itinéraire cyclable",
            name: "Itinéraire cyclable",
            component: DashboardPage,
            layout: "/admin",
            key: "ICyclable",
          },
          {
            path:
              "/categorie/Indication/Équipements touristiques/Parcs routiers",
            name: "Parcs routiers",
            component: DashboardPage,
            layout: "/admin",
            key: "PRoutiers",
          },
          {
            path: "/categorie/Indication/Équipements touristiques/Pictogrammes",
            name: "Pictogrammes",
            component: DashboardPage,
            layout: "/admin",
            key: "Pictogrammes",
          },
          {
            path:
              "/categorie/Indication/Équipements touristiques/Réserves, parcs et refuges fauniques",
            name: "Réserves, parcs et refuges fauniques",
            component: DashboardPage,
            layout: "/admin",
            key: "RPRFauniques",
          },
          {
            path:
              "/categorie/Indication/Équipements touristiques/Route touristique",
            name: "Route touristique",
            component: DashboardPage,
            layout: "/admin",
            key: "RTouristique",
          },
          {
            path: "/categorie/Indication/Équipements touristiques/Services",
            name: "Services",
            component: DashboardPage,
            layout: "/admin",
            key: "Services",
          },
        ],
      },
      {
        path: "/categorie/Information",
        name: "Information",
        component: DashboardPage,
        layout: "/admin",
        key: "Information",
      },
      {
        path: "/categorie/Repérage",
        name: "Repérage",
        component: DashboardPage,
        layout: "/admin",
        key: "Reperage",
        children: [
          {
            path: "/categorie/Varia",
            name: "Varia",
            component: DashboardPage,
            layout: "/admin",
            key: "Varia",
          },
          {
            path: "/categorie/Écussons d'autoroute",
            name: "Écussons d'autoroute",
            component: DashboardPage,
            layout: "/admin",
            key: "EAutoroute",
          },
          {
            path: "/categorie/Écussons de route",
            name: "Écussons de route",
            component: DashboardPage,
            layout: "/admin",
            key: "ERoute",
          },
          {
            path: "/categorie/Limite territoriale",
            name: "Limite territoriale",
            component: DashboardPage,
            layout: "/admin",
            key: "LTerritoriale",
          },
          {
            path: "/categorie/Nom d'un chemin ou d'un pont",
            name: "Nom d'un chemin ou d'un pont",
            component: DashboardPage,
            layout: "/admin",
            key: "NCheminPont",
          },
          {
            path: "/categorie/Repères géographiques",
            name: "Repères géographiques",
            component: DashboardPage,
            layout: "/admin",
            key: "RGeographiques",
          },
          {
            path: "/categorie/Repères kilométriques",
            name: "Repères kilométriques",
            component: DashboardPage,
            layout: "/admin",
            key: "RKilometriques",
          },
        ],
      },
    ],
  },
  {
    path: "/categorie/Prescription",
    name: "Prescription",
    component: DashboardPage,
    layout: "/admin",
    key: "Prescription",
  },
  {
    path: "/categorie/Panneaux spéciaux",
    name: "Panneaux spéciaux",
    component: DashboardPage,
    layout: "/admin",
    key: "PSpeciaux",
    children: [
      {
        path: "/categorie/Plaques toponymiques",
        name: "Plaques toponymiques",
        component: DashboardPage,
        layout: "/admin",
        key: "PToponymiques",
      },
      {
        path: "/categorie/Divers",
        name: "Divers",
        component: DashboardPage,
        layout: "/admin",
        key: "Divers",
        children: [
          {
            path: "/categorie/Plaquettes",
            name: "Plaquettes",
            component: DashboardPage,
            layout: "/admin",
            key: "Plaquettes",
          },
          {
            path: "/categorie/Autres",
            name: "Autres",
            component: DashboardPage,
            layout: "/admin",
            key: "Autres",
          },
        ],
      },
    ],
  },
  {
    path: "/categorie/Travaux",
    name: "Travaux",
    component: DashboardPage,
    layout: "/admin",
    key: "Travaux",
  },
  {
    path: "/categorie/LiensRapides",
    name: "Liens Rapides",
    component: DashboardPage,
    layout: "/admin",
    key: "LiensRapides",
    children: [
      {
        path: "/categorie/PanneauArret",
        name: "Panneau d'arrêt",
        component: DashboardPage,
        layout: "/admin",
        key: "PanneauArret",
      },
      {
        path: "/categorie/LimiteVitesse",
        name: "Limite de vitesse",
        component: DashboardPage,
        layout: "/admin",
        key: "LimiteVitesse",
      },
      {
        path: "/categorie/InterdictionArret",
        name: "Interdiction d'arrêt",
        component: DashboardPage,
        layout: "/admin",
        key: "InterdictionArret",
      },
      {
        path: "/categorie/InterdictionStationner",
        name: "Interdiction de stationner",
        component: DashboardPage,
        layout: "/admin",
        key: "InterdictionStationner",
      },
      {
        path: "/categorie/TransTerrebonne",
        name: "TransTerrebonne",
        component: DashboardPage,
        layout: "/admin",
        key: "TransTerrebonne",
      },
    ],
  },
];

export default dashboardRoutes;
