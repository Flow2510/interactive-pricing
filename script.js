const followers = [10, 50, 100, 500, 1];
const price = [8, 12, 16, 24, 36];
const billingInput = document.querySelector('#billing_input');
const rangeInput = document.querySelector('#range_input');
const checkbox = document.querySelector('.billing_checkbox');
let reduction = false;

window.addEventListener('DOMContentLoaded', () => {
    updateFollowers();
    updatePrix();   
    updateBackground();
  });


billingInput.addEventListener('change', function(){
    updateBackground();
    if (billingInput.checked){
        document.querySelector('.checkbox_circle').style.transform = "translateX(17px)";
        reduction = true;
    }
    
    else {
        document.querySelector('.checkbox_circle').style.transform = "";
        reduction = false;
        
    }
    updatePrix();
    updateBackground();
})

rangeInput.addEventListener('input', updatePrix);    
rangeInput.addEventListener('input', updateFollowers);

function updatePrix() {
    const index = parseInt(rangeInput.value);
    const montant = price[index];
    const montantReduit = montant * 0.75;
 
    if (reduction === true){
        document.querySelector('.price').textContent = `$${montantReduit.toFixed(2)} `;
    }   else{
        document.querySelector('.price').textContent = `$${montant.toFixed(2)} `;
    }    
  }
    
function updateFollowers() {
    const index = parseInt(rangeInput.value);
    const number = followers[index];
    if (index === 4){
        document.querySelector('.pageview_range').textContent = `${number} M Pageviews`;
    } else{
        document.querySelector('.pageview_range').textContent = `${number} k Pageviews`;
    }
  }

  rangeInput.addEventListener('input', function() {
    index = parseInt(rangeInput.value);
    updateBackground();
  });

const backgroundCyan = [0, 25, 50, 75, 100];
const backgroundGray = [100, 75, 50, 0];

function updateBackground() {
    const value = parseInt(rangeInput.value);
    const min = parseInt(rangeInput.min);
    const max = parseInt(rangeInput.max);

    const percentage = ((value - min) / (max - min)) * 100;

    rangeInput.style.background = `linear-gradient(to right, 
        hsla(174, 86%, 45%, 0.5) 0%, 
        hsla(174, 86%, 45%, 0.5) ${percentage}%, 
        hsla(223, 50%, 87%, 0.5) ${percentage}%, 
        hsla(223, 50%, 87%, 0.5) 100%)`;
}