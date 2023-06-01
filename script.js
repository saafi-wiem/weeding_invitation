// Countdown jusqu'à la date
// Définition de la date du mariage
var weddingDate = new Date('2023-06-16');

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
   var currentDate = new Date();
   var timeRemaining = weddingDate.getTime() - currentDate.getTime();

   // Calculer les jours, heures, minutes, secondes restantes
   var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
   var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   // Mettre à jour l'affichage du compte à rebours dans votre HTML
   document.getElementById('countdown').innerHTML = 'Temps restant : ' + days + ' jours, ' + hours + ' heures, ' + minutes + ' minutes, ' + seconds + ' secondes';

   // Si la date du mariage est atteinte, arrêtez le compte à rebours
   if (timeRemaining <= 0) {
       clearInterval(countdownInterval);
       document.getElementById('countdown').innerHTML = 'Le mariage est arrivé !';
   }
}

// Mettre à jour le compte à rebours toutes les secondes
var countdownInterval = setInterval(updateCountdown, 1000);

