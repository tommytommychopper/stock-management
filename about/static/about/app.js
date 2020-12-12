
const card = document.querySelector('.card')
const selector = document.querySelector('#section');
const text = document.querySelector('#test');

selector.addEventListener('change', (e) => {
    if (e.target.value === 'Website') {
        card.innerHTML = `
                <div class="card-header bg-light" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link text-dark" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Problem Domain & Solution 
                            <i class="fas fa-bullseye"></i>
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        <p>Domain of this web application is <strong>Finance</strong>.</p>
                        <p>This web application helps you to <strong>buy</strong>, <strong>sell</strong> and <strong>organize</strong> your stocks.</p>
                    </div>
                </div>
                <div class="card-header bg-dark" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Frontend
                            <i class="fas fa-desktop"></i>
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <ul>
                            <li>HTML<i class="fab fa-html5"></i></li>
                            <li>Vanilla CSS & Bootstrap<i class="fab fa-css3-alt"></i></li>
                            <li>Javascript<i class="fab fa-js"></i></li>
                            <ul>
                                <li>Ajax</li>
                                <p class="m-0">It is used to fetch real time stock data using <a href="https://www.alphavantage.co/" target="_blank">Alpha Vantage API </a> and update the web page without reloading.</p>
                                <li><a href="https://www.chartjs.org/" target="_blank">Chartist JS</a></li>
                                <p class="m-0">It is used to visualize your portfolio.</p>
                            </ul>
                        </ul> 
                    </div>
                </div>
                <div class="card-header bg-light" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link text-dark" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Backend
                            <i class="fas fa-server"></i>
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        <ul>
                            <li>Django<i class="fab fa-python"></i></li>
                            <li>SQLite<i class="fas fa-database"></i></li>
                        </ul> 
                    </div>
                </div>
                <div class="card-header bg-dark" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            The Other 
                            <i class="fas fa-cloud"></i>
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <div class="card-body">
                            <ul>
                                <li>Docker<i class="fab fa-docker"></i></li>
                                <p class="m-0">It is used to dockerlize my application.</p>
                                <li>Google Cloud Platform<i class="fab fa-google"></i></li>
                                <p class="m-0">It is used to host my website.</p>
                                <li>CI CD<i class="fas fa-infinity"></i></li>
                                <p class="m-0">Wrote script that will enable us to update my web application on GCP with just one click. </p>
                                <ol>
                                    <li>Dockerlize my application to create image</li>
                                    <li>Push the image on Dockerhub</li>
                                    <li>Pull the latest image from Dockerhub</li>
                                    <li>Stop and Restart GCP instance</li>
                                </ol>
                                <li>Git&Github<i class="fab fa-github"></i></li>
                                <p class="m-0">Version Control.</p>
                                <li>VS code<i class="fab fa-windows"></i></li>
                                <p class="m-0">Text Editor.</p>
                                <li>MAC OS<i class="fab fa-apple"></i></li>
                                <p class="m-0">Operating System.</p>
                            </ul> 
                        </div>
                    </div>
                </div>
        `;
        card.style.display = 'block';
    } else if (e.target.value === 'Creator') {
        card.innerHTML = `
            <div class="flex-container">
                <img id="picture-of-me" src="${img}" alt="picture-of-me">
                <div class="card-body">
                    <h5 class="card-title">Itsuki Tomizawa</h5>
                    <p class="card-text">Hi! I'm Itsuki. <br>
                    I am in my third year of studying computer science at California State University Chico to become a software engineer.</p>
                </div>
            </div>
        `;
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
});