const burgers = [
  //liste des burgers
  {
    //burgers
    name: "Giga Burger", //attribut
    prix: "12€",
    image: "./assets/img/burger.defaut.png",
    description: "Salade, tomates, steack haché, fromage.",
  },
  {
    name: "Burger Raclette",
    prix: "12€",
    image: "./assets/img/burger2.png",
    description:
      "Salade, tomates, steack haché, fromage à raclette, écrasé de pomme de terre.",
  },
  {
    name: "Green Burger",
    prix: "12€",
    image: "./assets/img/greenBurger.png",
    description: "Salade, tomates, steack vegan, sauce soja.",
  },
  {
    name: "Chicken Burger",
    prix: "12€",
    image: "./assets/img/chickenBurger.png",
    description: "Salade, tomates, tenders de poulet, moutarde, oignons frits.",
  },
];

const tacos = [
  //liste des tacos
  {
    //tacos
    name: "Tacos Kipik", //attribut
    prix: "4,50€",
    image: "./assets/img/kipik.png",
    description: "Tenders + viande aux choix, frittes, sauce harissa.",
  },
  {
    name: "Green Tacos",
    prix: "6.50€",
    image: "./assets/img/veggie.png",
    description:
      "Tacos aux herbes, viande végétarienne.",
  },
  {
    name: "Tacos raclette",
    prix: "7€",
    image: "./assets/img/raclette.png",
    description: "Tacos au fromage de raclette.",
  },
  {
    name: "Giga Tacos",
    prix: "5€",
    image: "./assets/img/gigatacos.png",
    description: "Tacos 5 viandes, sauce fromagère, frites.",
  },
];

const accompagnements = [
  //liste des accompagnements
  {
    //accompagnement
    name: "Frites", //attribut
    prix: "4,50€",
    image: "./assets/img/frites.png",
    description: "Frites de pomme de terre fris.",
  },
  {
    name: "P'tite salade",
    prix: "6.50€",
    image: "./assets/img/salade.png",
    description:
      "Salade, tomates, mozarella, carrotte rapé, sauce césar et oignons fris.",
  },
  {
    name: "Tenders kipik",
    prix: "7€",
    image: "./assets/img/tenders.png",
    description: "Filet de poulet recouvert d'une fritture maison.",
  },
  {
    name: "Onion rings",
    prix: "5€",
    image: "./assets/img/oingnons.png",
    description: "Frittes de pomme de terre fris.",
  },
];

const boissons = [
  //liste des boissons
  {
    //boisson
    name: "Limonade", //attribut
    prix: "3€",
    image: "./assets/img/limonade.png",
    description: "Limonade artisanale au citrons",
  },
  {
    name: "Jus de fruits",
    prix: "3€",
    image: "./assets/img/jus.png",
    description:
      "Jus de fruits maison au choix : orange, abricot, ananas, multifruits...",
  },
  {
    //projet
    name: "Bière blonde",
    prix: "3€",
    image: "./assets/img/biere.png",
    description: "Bière blonde artisanale 6%.",
  },
  {
    //projet
    name: "Thé glacé",
    prix: "3€",
    image: "./assets/img/theglace.png",
    description: "Thé glacé maison à l'hibiscus et à la pêche.",
  },
];

function cartePlats(plats, titre, texte, categorie) {
  // Ajoute le paramètre "categorie"
  const parentMenuCarte = document.getElementById("parentMenuCarte");

  // Créer et ajouter le titre EN PREMIER
  const titreMenuCarte = document.createElement("h1");
  titreMenuCarte.id = "titreMenuCarte";
  titreMenuCarte.textContent = titre;
  parentMenuCarte.appendChild(titreMenuCarte);

  // Ajout du texte
  const txtMenuCarte = document.createElement("p");
  txtMenuCarte.id = "txtMenuCarte";
  txtMenuCarte.textContent = texte;
  parentMenuCarte.appendChild(txtMenuCarte);

  // Ensuite créer la section pour les cartes
  const menuCarte = document.createElement("section");
  menuCarte.id = "menuCarte";
  parentMenuCarte.appendChild(menuCarte);

  for (let i = 0; i < plats.length; i++) {
    const currentProject = document.createElement("div");
    currentProject.className = "carte-carte";

    const textes = document.createElement("div");
    textes.className = `carte-textes ${categorie}`; // AJOUTE LA CLASSE ICI

    const plat = plats[i];

    const image = document.createElement("img");
    image.src = plat.image;
    image.alt = plat.name;

    const name = document.createElement("h3");
    name.textContent = plat.name;
    name.className = "name";

    const prix = document.createElement("p");
    prix.textContent = plat.prix;
    prix.className = "prix";

    const description = document.createElement("p");
    description.textContent = plat.description;
    description.className = "description";

    textes.append(name, prix, description);
    currentProject.append(image);
    currentProject.append(textes);
    menuCarte.appendChild(currentProject);
  }
}

// Ajoute la catégorie pour chaque appel
cartePlats(
  burgers,
  "Burgers signature",
  "Pour combler vos grandes faims, découvrez nos Burgers Signature, bon et généreux, vous trouverez forcément le burger qui va vous plaire, que vous soyez végétarien, que vous préféreriez le poulet ou le boeuf : vous trouverez forcément votre bonheur !",
  "burger" // AJOUTE CETTE CATEGORIE
);

cartePlats(
  tacos,
  "Tacos fusion",
  "Pour combler vos grandes faims, découvrez nos Tacos Fusion, bon et généreux, vous trouverez forcément le tacos qui va vous plaire, que vous soyez végétarien, ou un fan de plats épicé.",
  "tacos" // AJOUTE CETTE CATEGORIE
);

cartePlats(
  accompagnements,
  "Accompagnements",
  "Que vous avez une petite ou une grande faim, nos accompagnements sont parfaits pour combler votre faim. Parfait comme accompagnements pour votre burger ou votre tacos, mais aussi pour une petite collation à un prix réduit",
  "accompagnement" // AJOUTE CETTE CATEGORIE
);

cartePlats(
  boissons,
  "Boissons Artisanales",
  "Avec un bon repas ou si vous avez une petite soif, venez vous désaltérer avec nos excellentes boissons artisanales. Il y en a pour tout les goûts, si vous aimé quand ça pétille, ou que vous préférez la douceur d'un bon jus de fruits, nous allez forcément trouver de quoi vous rafraîchir",
  "boissons" // AJOUTE CETTE CATEGORIE
);




document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});