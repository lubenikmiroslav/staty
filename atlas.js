const staty = document.getElementById('staty');

fetch('https://restcountries.com/v3.1/region/europe')
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].flags.png);
        data.forEach(country => {
            console.log(country.capital[0]);
            let stat = `<div class="row" id="staty">
            <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card">
                    <img class="card-img-top" src="${country.flags.svg}" alt=${country.flags.alt} />
                    <div class="card-body">
                        <h4 class="card-title">${country.translation.ces.common}</h4>
                        <p class="card-text">hlavni mesto ${country.capital[0]} :3
                            <br>bydli tam ${country.population} of pookie bears
                        </p>
                    </div>
                </div>
                
            </div>
        </div>`;
        document.getElementById('staty').innerHTML += stat;
        });
    });