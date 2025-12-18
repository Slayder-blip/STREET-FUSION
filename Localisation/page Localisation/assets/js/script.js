// Liste des lieux
const lieux = [
    { lat: 48.4460, lng: 1.4890, nom: "CHARTRES, mardi et vendredi" },
    { lat: 48.4489382, lng: 1.4580047, nom: "MAINVILLIERS, lundi et jeudi" },
    { lat: 48.4231000, lng: 1.4683500, nom: "LUISSANT, mercredi et samedi" }
];

// Création de la carte (centrée sur Chartres par défaut)
const map = L.map('map').setView([lieux[0].lat, lieux[0].lng], 13);

// Ajout des tuiles (OpenStreetMap, image de la carrte)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Icone marqueurs
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
//leaflet = bibliothèque JavaScript qui sert à créer des cartes interactives sur un site web.
// Ajout marqueurs
const markers = [];
lieux.forEach(lieu => {
    const m = L.marker([lieu.lat, lieu.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>Street Fusion</strong><br>${lieu.nom}`);
    markers.push(m);
});

// Ajuster la vue pour inclure tous les marqueurs
if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.2));
    // Ouvrir la popup du premier lieu (Chartres)
    markers[0].openPopup();
}





document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});