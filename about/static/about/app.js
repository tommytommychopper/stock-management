
const card = document.querySelector('.card')
const selector = document.querySelector('#section');
const text = document.querySelector('#test');

selector.addEventListener('change', (e) => {
    if (e.target.value === 'Website') {
        card.innerHTML = `
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Frontend
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        HTML&CSS
                        Javascript
                    </div>
                </div>
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Backend
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        Django
                    </div>
                </div>
                <div class="card-header" id="headingTree">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTree" aria-expanded="true" aria-controls="collapseTree">
                            The Other 
                        </button>
                    </h5>
                </div>
                <div id="collapseTree" class="collapse show" aria-labelledby="headingTree" data-parent="#accordion">
                    <div class="card-body">
                        Docker 
                        AWS
                    </div>
                </div>
            
        `;
        card.style.display = 'block';
    } else if (e.target.value === 'Creator') {
        card.innerHTML = `
             <img id="picture-of-me" src="${img}" alt="picture-of-me">
             <div class="card-body">
                <h5 class="card-title">Itsuki Tomizawa</h5>
                <p class="card-text">Hi! I'm Itsuki. <br>
                I am in my third year of studying computer science at California State University Chico to become a software engineer.</p>
             </div>
        `;
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
});