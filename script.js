document.addEventListener('DOMContentLoaded', () => {
    const strtButton = document.querySelector('.beer-button');
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description');
    const photoDisplay = document.querySelector('.image');

    function getData(e) {
        e.preventDefault();

        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            const name = data[0].name;
            const description = data[0].description;
            const {volume} = data[0];
            const volumeVal = volume.value;
            const volumeUnit = volume.unit;
            
            
            randomBeer.innerHTML = name + ' ' + volumeVal + volumeUnit;
            descriptionDisplay.innerHTML = description;
            
        })

    }

    strtButton.addEventListener('click', getData);

})