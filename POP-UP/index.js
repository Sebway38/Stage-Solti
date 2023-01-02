// Fait par Mamoun Kertane et Sébastien Meunier le 02 / 01/ / 2023
// Dernière mise à jour le 02 / 01 / 2023 : espacement de l'infobulle avec le texte survoler à la souris


window.onload=function(){

    
    const target = document.getElementById("tooltip-button");
    const tooltip = document.getElementById("tooltip-text");
    
    
    target.addEventListener('mouseover', () => {
      tooltip.style.display = 'block';
    }, false);
    
    
    target.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    }, false);
    
    }