startApp(); // Promise <pending> 
        async function startApp() {
            const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json'; 
            const response = await fetch(apiUrl);  //download data from the server(example apiUrl)// fetch asynchronous // await = async function
            const data = await response.json(); // .json transforms into an object JS which we can watch example : code currency mid
            //console.log(data);
            processData(data[0]);
        }

        function processData(data) { //reading data from the server
            console.log(data);
            const code = data.effectiveDate;
            const table = data.table; // A
            const tableNum = data.no;
            const rateArr = data.rates;

            const dataTableDiv =  document.getElementById('data-table');
            document.getElementById('date').innerHTML = tableNum;
            //forEach performs a function on each element
            rateArr.forEach(function(el) {
                console.log(el);
                const code = el.code; // USD
                const currency = el.currency;
                const price = el.mid;
                addRateContent(code, currency, price, dataTableDiv);
            });
        }

        function addRateContent(code, currency, price, dataTableDiv){
            const el = document.createElement('div');
            el.classList.add('rate');
            el.innerHTML = `
                <div>${code}</div>
                <div>${currency}</div>
                <div>${price} zł </div>
            `;

            dataTableDiv.append(el);// method append;
        }