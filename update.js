// update.js
const localVersion = "1.0.1"; // Mets ici la version actuelle du site

async function checkVersion() {
  try {
    // On ajoute ?nocache= pour éviter que le navigateur garde l'ancienne version en cache
    const res = await fetch("version.json?nocache=" + Date.now());
    const data = await res.json();

    if (data.version !== localVersion) {
      console.log("Nouvelle version détectée :", data.version);
      location.reload(true); // recharge la page avec la nouvelle version
    }
  } catch (e) {
    console.error("Erreur lors de la vérification de version:", e);
  }
}

// Vérifie toutes les 15 secondes (15000 ms)
setInterval(checkVersion, 15000);
