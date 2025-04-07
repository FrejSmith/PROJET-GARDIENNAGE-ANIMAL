
// Script pour le menu latéral
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuIcon = document.querySelector('.contact-icons a:last-child');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.querySelector('.close-btn');
    
    // Fonction pour ouvrir le menu latéral
    const openSideMenu = function() {
        sideMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêche le défilement du body
    };
    
    // Fonction pour fermer le menu latéral
    const closeSideMenu = function() {
        sideMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Réactive le défilement du body
    };
    
    // Événement pour l'icône de menu
    menuToggle.addEventListener('click', openSideMenu);
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', openSideMenu);
    }
    
    // Événement pour fermer le menu
    closeBtn.addEventListener('click', closeSideMenu);
    
    // Fermer le menu lorsqu'on clique en dehors
    document.addEventListener('mouseup', function(e) {
        if (!sideMenu.contains(e.target) && sideMenu.classList.contains('active') && !menuToggle.contains(e.target)) {
            closeSideMenu();
        }
    });

    // Animation pour la section héro
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 300);
    }
});

// POUR PRENDRE RENDEZ VOUS
document.addEventListener('DOMContentLoaded', function() {
// Sélectionner l'icône d'enveloppe (email)
const emailIcon = document.querySelector('.contact-icons a:first-child');

// Ajouter un écouteur d'événement pour le clic sur l'icône d'enveloppe
emailIcon.addEventListener('click', function(e) {
e.preventDefault();

// Créer la page de contact
const contactPage = document.createElement('div');
contactPage.classList.add('contact-page');
contactPage.innerHTML = `
    <div class="contact-overlay">
        <div class="contact-container">
            <div class="contact-close">&times;</div>
            <div class="contact-content">
                <div class="contact-header">
                    <h2>Contact</h2>
                    <p>Pour toute demande d'information, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous. Nous reviendrons vers vous dans les meilleurs délais.</p>
                </div>
                <div class="contact-grid">
                    <div class="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.59377271798!2d1.3628053!3d43.604652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse%2C%20France!5e0!3m2!1sfr!2sfr!4v1637166317572!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="contact-details">
                        <h3>Coordonnées</h3>
                        <div class="contact-info">
                            <p><strong>Animaline</strong></p>
                            <p>57 Rue de la venetie</p>
                            <p>31000 Toulouse</p>
                            <p>France</p>
                            <p>Tél : 06 41 31 32 00</p>
                            <h4>Horaires :</h4>
                            <p>Du Lundi au Jeudi, de 9h à 13h et de 14h à 18h</p>
                            <p>Le Vendredi de 9h à 13h</p>
                            <p>Possibilité de rendez-vous le Samedi matin sur rendez-vous</p>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="nom">Nom *</label>
                                <input type="text" id="nom" name="nom" required>
                            </div>
                            <div class="form-group">
                                <label for="prenom">Prénom *</label>
                                <input type="text" id="prenom" name="prenom" required>
                            </div>
                            <div class="form-group">
                                <label for="societe">Société</label>
                                <input type="text" id="societe" name="societe">
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="telephone">Téléphone *</label>
                                <input type="tel" id="telephone" name="telephone" required>
                            </div>
                            <div class="form-group">
                                <label for="adresse">Adresse</label>
                                <input type="text" id="adresse" name="adresse">
                            </div>
                            <div class="form-group">
                                <label for="code-postal">Code postal</label>
                                <input type="text" id="code-postal" name="code-postal">
                            </div>
                            <div class="form-group">
                                <label for="ville">Ville</label>
                                <input type="text" id="ville" name="ville">
                            </div>
                            <div class="form-group full-width">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                        </div>
                        <div class="form-footer">
                            <p class="form-disclaimer">* L'envoi de ce formulaire est strictement confidentiel, conforme à la législation en vigueur sur la protection des données personnelles (RGPD). Pour plus d'information, consultez notre politique de confidentialité.</p>
                            <button type="submit" class="submit-button">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
`;

// Ajouter des styles CSS pour la page de contact
const contactStyles = document.createElement('style');
contactStyles.textContent = `
    .contact-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .contact-overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    
    .contact-container {
        background-color: white;
        width: 90%;
        max-width: 1200px;
        max-height: 90vh;
        border-radius: 10px;
        position: relative;
        overflow: auto;
    }
    
    .contact-close {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 24px;
        cursor: pointer;
        color: #999;
        z-index: 2001;
    }
    
    .contact-close:hover {
        color: var(--primary-color);
    }
    
    .contact-content {
        padding: 30px;
    }
    
    .contact-header {
        margin-bottom: 30px;
        text-align: center;
    }
    
    .contact-header h2 {
        color: var(--primary-color);
        margin-bottom: 10px;
        font-size: 32px;
    }
    
    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-bottom: 30px;
    }
    
    .contact-map {
        height: 300px;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .contact-details {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
    }
    
    .contact-details h3 {
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .contact-info p {
        margin-bottom: 5px;
    }
    
    .contact-info h4 {
        margin-top: 15px;
        margin-bottom: 5px;
    }
    
    .contact-form {
        margin-top: 30px;
    }
    
    .form-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    
    .form-group {
        margin-bottom: 15px;
    }
    
    .form-group.full-width {
        grid-column: span 2;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
    }
    
    .form-group input, .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }
    
    .form-footer {
        margin-top: 20px;
        text-align: right;
    }
    
    .form-disclaimer {
        font-size: 12px;
        color: #666;
        margin-bottom: 15px;
        text-align: left;
    }
    
    .submit-button {
        background-color: var(--primary-color);
        color: white;
        padding: 10px 25px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    
    .submit-button:hover {
        background-color:rgb(17, 73, 227);
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }
        
        .form-grid {
            grid-template-columns: 1fr;
        }
        
        .form-group.full-width {
            grid-column: span 1;
        }
    }
`;

// Ajouter la page de contact et les styles au document
document.body.appendChild(contactStyles);
document.body.appendChild(contactPage);

// Gérer la fermeture de la page de contact
const closeButton = contactPage.querySelector('.contact-close');
closeButton.addEventListener('click', function() {
    document.body.removeChild(contactPage);
    document.body.removeChild(contactStyles);
});

// Gérer la soumission du formulaire
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ici, vous pouvez ajouter le code pour traiter le formulaire
    // Par exemple, envoyer les données à un serveur via AJAX
    
    // Afficher un message de confirmation
    alert('Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.');
    
    // Fermer la page de contact
    document.body.removeChild(contactPage);
    document.body.removeChild(contactStyles);
});
});
});

document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenuIcon = document.querySelector('.contact-icons a:last-child');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.querySelector('.close-btn');
const ctaButtons = document.querySelectorAll('.cta-button');
const sideMenuLinks = document.querySelectorAll('.side-menu-content ul li a');

// Fonction pour ouvrir le menu latéral
const openSideMenu = function() {
sideMenu.classList.add('active');
document.body.style.overflow = 'hidden'; // Empêche le défilement du body
};

// Fonction pour fermer le menu latéral
const closeSideMenu = function() {
sideMenu.classList.remove('active');
document.body.style.overflow = 'auto'; // Réactive le défilement du body
};

// Événement pour l'icône de menu
menuToggle.addEventListener('click', openSideMenu);
if (mobileMenuIcon) {
mobileMenuIcon.addEventListener('click', openSideMenu);
}

// Événement pour fermer le menu
closeBtn.addEventListener('click', closeSideMenu);

// Fermer le menu lorsqu'on clique en dehors
document.addEventListener('mouseup', function(e) {
if (!sideMenu.contains(e.target) && sideMenu.classList.contains('active') && !menuToggle.contains(e.target)) {
    closeSideMenu();
}
});

// Animation pour la section héro
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
setTimeout(() => {
    heroContent.style.opacity = '1';
}, 300);
}

// Fonction pour afficher le formulaire de contact
function afficherFormulaire() {
// Créer le conteneur principal
const formContainer = document.createElement('div');
formContainer.className = 'formulaire-container';
formContainer.style.position = 'fixed';
formContainer.style.top = '0';
formContainer.style.left = '0';
formContainer.style.width = '100%';
formContainer.style.height = '100%';
formContainer.style.backgroundColor = 'rgba(0,0,0,0.7)';
formContainer.style.display = 'flex';
formContainer.style.justifyContent = 'center';
formContainer.style.alignItems = 'center';
formContainer.style.zIndex = '2000';

// Créer le formulaire
const form = document.createElement('div');
form.className = 'formulaire';
form.style.backgroundColor = 'white';
form.style.borderRadius = '10px';
form.style.padding = '30px';
form.style.width = '80%';
form.style.maxWidth = '800px';
form.style.maxHeight = '90vh';
form.style.overflowY = 'auto';
form.style.position = 'relative';

// Bouton pour fermer le formulaire
const closeFormBtn = document.createElement('div');
closeFormBtn.innerHTML = '&times;';
closeFormBtn.style.position = 'absolute';
closeFormBtn.style.top = '10px';
closeFormBtn.style.right = '15px';
closeFormBtn.style.fontSize = '24px';
closeFormBtn.style.cursor = 'pointer';
closeFormBtn.style.color = '#999';
closeFormBtn.addEventListener('click', function() {
    document.body.removeChild(formContainer);
    document.body.style.overflow = 'auto';
});

// Titre du formulaire
const formTitle = document.createElement('h2');
formTitle.textContent = 'RESERVATION';
formTitle.style.marginBottom = '20px';
formTitle.style.color = '#e94c89';
formTitle.style.textAlign = 'center';

// Description
const formDesc = document.createElement('p');
formDesc.textContent = 'Pour faire une reservation , n\'hésitez pas à nous contacter en remplissant le formulaire ci-dessous. Nous reviendrons vers vous dans les meilleurs délais.';
formDesc.style.marginBottom = '30px';
formDesc.style.textAlign = 'center';

// Ligne de séparation
const separator = document.createElement('hr');
separator.style.margin = '20px 0';
separator.style.borderColor = '#e94c89';

// Informations de contact animaline 
const contactInfo = document.createElement('div');
contactInfo.style.marginBottom = '20px';
contactInfo.innerHTML = `
    <h3>Animaline</h3>
    <p>57 rue de la venetie</p>
    <p>31000 Toulouse </p>
    <p>Tel : 06 41 31 32 00</p>
`;

// Section Votre profil
const profilSection = document.createElement('div');
profilSection.className = 'form-section';
profilSection.style.marginBottom = '30px';

const profilTitle = document.createElement('h3');
profilTitle.textContent = 'Votre profil';
profilTitle.style.marginBottom = '15px';
profilTitle.style.borderBottom = '1px solidrgb(11, 67, 17)';
profilTitle.style.paddingBottom = '5px';

// Champs du formulaire pour le profil
const profilFields = document.createElement('div');
profilFields.innerHTML = `
    <div style="margin-bottom: 15px;">
        <label for="nom" style="display: block; margin-bottom: 5px;">Nom *</label>
        <input type="text" id="nom" name="nom" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="prenom" style="display: block; margin-bottom: 5px;">Prénom *</label>
        <input type="text" id="prenom" name="prenom" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="email" style="display: block; margin-bottom: 5px;">E-mail *</label>
        <input type="email" id="email" name="email" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="telephone" style="display: block; margin-bottom: 5px;">Téléphone *</label>
        <input type="tel" id="telephone" name="telephone" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="adresse" style="display: block; margin-bottom: 5px;">Adresse *</label>
        <input type="text" id="adresse" name="adresse" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="code_postal" style="display: block; margin-bottom: 5px;">Code postal *</label>
        <input type="text" id="code_postal" name="code_postal" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="ville" style="display: block; margin-bottom: 5px;">Ville *</label>
        <input type="text" id="ville" name="ville" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
`;

// Section Visite ou garde
const visiteSection = document.createElement('div');
visiteSection.className = 'form-section';
visiteSection.style.marginBottom = '30px';

const visiteTitle = document.createElement('h3');
visiteTitle.textContent = 'Visite ou garde ?';
visiteTitle.style.marginBottom = '15px';
visiteTitle.style.borderBottom = '1px solidrgb(13, 68, 31)';
visiteTitle.style.paddingBottom = '5px';

// Champs du formulaire pour visite ou garde
const visiteFields = document.createElement('div');
visiteFields.innerHTML = `
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 10px;">Est-ce pour une visite ou une garde en famille d'accueil ? *</label>
        <label style="margin-right: 15px;"><input type="radio" name="type_service" value="visite" checked> Visites</label>
        <label><input type="radio" name="type_service" value="garde"> Garde</label>
    </div>
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 10px;">À quelle période ? *</label>
        <div style="display: flex; gap: 15px;">
            <div>
                <label for="date_debut" style="display: block; margin-bottom: 5px;">Date de début</label>
                <input type="date" id="date_debut" name="date_debut" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
            </div>
            <div>
                <label for="date_fin" style="display: block; margin-bottom: 5px;">Date de fin</label>
                <input type="date" id="date_fin" name="date_fin" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
            </div>
        </div>
    </div>
`;

// Section Animal de compagnie
const animalSection = document.createElement('div');
animalSection.className = 'form-section';
animalSection.style.marginBottom = '30px';

const animalTitle = document.createElement('h3');
animalTitle.textContent = 'Votre animal de compagnie';
animalTitle.style.marginBottom = '15px';
animalTitle.style.borderBottom = '1px solidrgb(3, 57, 6)';
animalTitle.style.paddingBottom = '5px';

// Champs du formulaire pour l'animal
const animalFields = document.createElement('div');
animalFields.innerHTML = `
    <div style="margin-bottom: 15px;">
        <label for="nom_animal" style="display: block; margin-bottom: 5px;">Nom de l'animal</label>
        <input type="text" id="nom_animal" name="nom_animal" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>
    <div style="margin-bottom: 15px;">
        <label for="puce" style="display: block; margin-bottom: 5px;">N° de puce ou de tatouage *</label>
        <input type="text" id="puce" name="puce" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
    </div>
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 10px;">Âge *</label>
        <input type="number" id="age" name="age" style="width: 100px; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
        <label style="margin-left: 15px; margin-right: 15px;"><input type="radio" name="sexe" value="male"> Mâle</label>
        <label><input type="radio" name="sexe" value="femelle"> Femelle</label>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="race" style="display: block; margin-bottom: 5px;">Race *</label>
        <select id="race" name="race" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
            <option value="">Sélectionnez un type d'animal</option>
            <option value="chien">Chien</option>
            <option value="chat">Chat</option>
            <option value="autre">Autre</option>
        </select>
    </div>
    <div style="margin-bottom: 15px;">
        <label for="espece" style="display: block; margin-bottom: 5px;">Espèce</label>
        <select id="espece" name="espece" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <option value="">Sélectionnez une espèce</option>
        </select>
    </div>
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 10px;">Caractère de l'animal</label>
        <label style="margin-right: 15px;"><input type="checkbox" name="caractere[]" value="calme"> Calme</label>
        <label style="margin-right: 15px;"><input type="checkbox" name="caractere[]" value="joueur"> Joueur</label>
        <label style="margin-right: 15px;"><input type="checkbox" name="caractere[]" value="agressif_chiens"> Agressif avec chiens</label>
        <label><input type="checkbox" name="caractere[]" value="agressif_chats"> Agressif avec chats</label>
    </div>
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 10px;">Sexe *</label>
        <label style="margin-right: 15px;"><input type="radio" name="statut_sexe" value="stérilisé"> Stérilisé</label>
        <label><input type="radio" name="statut_sexe" value="castré"> Castré</label>
    </div>
`;

// Bouton d'envoi
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Envoyer';
submitBtn.style.backgroundColor = '#e94c89';
submitBtn.style.color = 'white';
submitBtn.style.border = 'none';
submitBtn.style.borderRadius = '25px';
submitBtn.style.padding = '10px 25px';
submitBtn.style.fontSize = '16px';
submitBtn.style.cursor = 'pointer';
submitBtn.style.float = 'right';
submitBtn.style.marginTop = '20px';
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Votre demande a été envoyée ! Nous vous contacterons dans les plus brefs délais.');
    document.body.removeChild(formContainer);
    document.body.style.overflow = 'auto';
});

// Assembler le formulaire
profilSection.appendChild(profilTitle);
profilSection.appendChild(profilFields);

visiteSection.appendChild(visiteTitle);
visiteSection.appendChild(visiteFields);

animalSection.appendChild(animalTitle);
animalSection.appendChild(animalFields);

form.appendChild(closeFormBtn);
form.appendChild(formTitle);
form.appendChild(formDesc);
form.appendChild(contactInfo);
form.appendChild(separator);
form.appendChild(profilSection);
form.appendChild(visiteSection);
form.appendChild(animalSection);
form.appendChild(submitBtn);

formContainer.appendChild(form);

document.body.appendChild(formContainer);
document.body.style.overflow = 'hidden'; // Empêcher le défilement quand le formulaire est ouvert
}

// Ajouter un écouteur d'événement pour tous les boutons CTA
ctaButtons.forEach(button => {
button.addEventListener('click', function(e) {
    e.preventDefault();
    afficherFormulaire();
});
});

// Ajouter un écouteur d'événement pour le lien dans le menu latéral
sideMenuLinks.forEach(link => {
if (link.textContent === "Faire garder son animal") {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        closeSideMenu(); // Fermer le menu avant d'afficher le formulaire
        afficherFormulaire();
    });
}
});
});


// Nos prestations

document.addEventListener("DOMContentLoaded", function () {
    // Sélection de l'élément "Nos prestations"
    let prestationsLink = document.querySelector("li:nth-child(2)"); // Modifier si besoin

    // Création du conteneur pour afficher les détails
    let detailsContainer = document.createElement("div");
    detailsContainer.id = "details-prestations";
    detailsContainer.style.position = "absolute";
    detailsContainer.style.width = "300px";
    detailsContainer.style.padding = "15px";
    detailsContainer.style.border = "1px solid #ccc";
    detailsContainer.style.background = "#fff";
    detailsContainer.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
    detailsContainer.style.display = "none"; // Caché par défaut
    detailsContainer.style.zIndex = "1000"; // Pour rester au-dessus des autres éléments

    // Contenu des prestations
    detailsContainer.innerHTML = `
        <h3>Nos Prestations</h3>
        <ul>
            <li>Garde d'animaux à domicile</li>
            <li>Pension complète pour chiens et chats</li>
            <li>Promenade quotidienne</li>
            <li>Toilettage et soins</li>
        </ul>
    `;

    // Ajouter le conteneur au corps du document
    document.body.appendChild(detailsContainer);

    // Afficher les détails au survol
    prestationsLink.addEventListener("mouseenter", function (event) {
        let rect = prestationsLink.getBoundingClientRect(); // Récupérer position du lien
        detailsContainer.style.left = rect.right + 10 + "px"; // Position à droite
        detailsContainer.style.top = rect.top + "px"; // Même hauteur
        detailsContainer.style.display = "block";
    });

    // Cacher les détails lorsqu'on quitte "Nos prestations" ou le conteneur des détails
    prestationsLink.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!detailsContainer.matches(':hover')) {
                detailsContainer.style.display = "none";
            }
        }, 300); // Ajout d'un petit délai pour éviter une fermeture trop rapide
    });

    detailsContainer.addEventListener("mouseleave", function () {
        detailsContainer.style.display = "none";
    });
});



//Nos tarifs 

document.addEventListener("DOMContentLoaded", function () {
    let boutons = document.querySelectorAll(".btnTarifs");

    boutons.forEach(function (bouton) {
        bouton.addEventListener("click", function (event) {
            event.preventDefault(); 
            fermerMenuDeroulant();
            afficherTarifs();
        });
    });
});

function afficherTarifs() {
    if (document.getElementById("tarifsModal")) return;

    let modal = document.createElement("div");
    modal.id = "tarifsModal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    let content = document.createElement("div");
    content.style.backgroundColor = "#fff";
    content.style.width = "80%";
    content.style.maxWidth = "6000px";
    content.style.borderRadius = "10px";
    content.style.boxShadow = "0px 4px 10px rgba(231, 27, 173, 0.3)";
    content.style.padding = "20px";
    content.style.position = "relative";

    // Fermer la pop-up en cliquant sur l'extérieur
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.remove();
        }
    });

    content.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 20px; color: #444;">Nos Tarifs</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
            <div style="background:rgb(150, 146, 148); padding: 15px; border-radius: 10px; text-align: center; width: 130px;">
                <h3>Week-end</h3><p color:fff;> 100€</p>
            </div>
            <div style="background: #e3e3e3; padding: 15px; border-radius: 10px; text-align: center; width: 130px;">
                <h3>1 semaine</h3><p>169€</p>
            </div>
            <div style="background: #d6d6d6; padding: 15px; border-radius: 10px; text-align: center; width: 130px;">
                <h3>2 semaines</h3><p>300€</p>
            </div>
            <div style="background: #c9c9c9; padding: 15px; border-radius: 10px; text-align: center; width: 130px;">
                <h3>3 semaines</h3><p>339€</p>
            </div>
            <div style="background: #bcbcbc; padding: 15px; border-radius: 10px; text-align: center; width: 130px;">
                <h3>4 semaines</h3><p>402€</p>
            </div>
        </div>

        <h3 style="text-align: center; margin-top: 20px; color: #444;">Longue durée</h3>
        <div style="display: flex; justify-content: center; gap: 15px;">
            <div style="background: #e8e8e8; padding: 15px; border-radius: 10px; text-align: center; width: 180px;">
                <h3>Absence de 3 mois</h3><p>340€/mois</p>
            </div>
            <div style="background: #dcdcdc; padding: 15px; border-radius: 10px; text-align: center; width: 180px;">
                <h3>Plus de 4 mois</h3><p>299€/mois</p>
            </div>
        </div>

        <h3 style="text-align: center; margin-top: 20px; color: #444;">Durée intermédiaire</h3>
        <div style="text-align: center;">
            <label for="duree" style="font-weight: bold;">Choisissez la durée :</label>
            <select id="duree" style="padding: 8px; margin-left: 10px; border-radius: 5px; border: 1px solid #ccc;" onchange="mettreAJourTarif()">
                <option value="120">5 jours - 120€</option>
                <option value="220">10 jours - 220€</option>
                <option value="320">15 jours - 320€</option>
            </select>
            <p id="tarifSelectionne" style="background: #e0e0e0; display: inline-block; padding: 10px; border-radius: 10px; margin-top: 10px;">
                5 jours - 120€
            </p>
        </div>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);
}

function mettreAJourTarif() {
    let select = document.getElementById("duree");
    let tarifSelectionne = document.getElementById("tarifSelectionne");
    let texte = select.options[select.selectedIndex].text;
    tarifSelectionne.innerHTML = texte;
}

function fermerMenuDeroulant() {
    let menuDeroulant = document.querySelector(".menu-deroulant");
    if (menuDeroulant) {
        menuDeroulant.style.display = "none";
    }
}

// telephone



