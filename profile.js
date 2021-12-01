const button = document.getElementById('color')
const button2 = document.getElementById('place')
const button3 = document.getElementById('ritual')

const favColor = () => {
alert('Pink!');
}

button.addEventListener('click', favColor);

const favPlace = () => {
    alert('Home :)');
    }
    
    button2.addEventListener('click', favPlace);

const favRitual = () => {
    alert('fist pumping the air when I finally figure out how to add an Event Listener alert');
    }
        
    button3.addEventListener('click', favRitual);