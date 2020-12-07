console.log('djkfhakjdfhd');
const cardText = document.querySelectorAll('.card-text');

cardText.forEach((text, i) => {
    console.log(text.textContent);
    if(text.textContent.length > 245){
        cardText[i].textContent = text.textContent.substring(0, 245) + '...';
    }
})