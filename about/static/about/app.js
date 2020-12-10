
const card = document.querySelector('.card')
const selector = document.querySelector('#section');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');
const cardLink = document.querySelector('.card-link');

selector.addEventListener('change', (e) => {
    if(e.target.value !== ''){
        let section = e.target.value;
        cardTitle.textContent = section;
        cardLink.textContent = section;
        section = section.toLowerCase();
                 <a href="{% url 'portfolio' %}" class="nav-link">Portfolio</a> 
        cardLink.href = `{% url '${section}' %}`;
        // section = section.toLowerCase();
        // a.setAttribute('href', `{% url "${section}/${section}.html" %}`)
        // a.setAttribute('href', '{% url "hellooo" %}')
        card.style.display = 'block';
    }else{
        card.style.display = 'none';
    }
});