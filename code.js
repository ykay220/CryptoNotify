const form = document.querySelector('#form1')
const emailinput = document.querySelector('#email-input')
const select = document.querySelector('#selector-when')

const p1 = document.querySelector('#price1')
const p2 = document.querySelector('#price2')
const p3 = document.querySelector('#price3')

axios.get('http://rest.coinapi.io/v1/assets?apikey=F672C1C8-83F6-44FB-9E86-0A84AD8C08B4&filter_asset_id=BTC;ETH;ADA')
    .then(res => {
        console.log(res.data)
        addOptions(res.data);
        addPrice(res.data);
    })

// let num = 57289.086361961905;
// alert(num.toFixed(2))


for (let el of langObject) {
    const langOption = document.createElement('option');
    langOption.textContent = el.name;
    langOption.value = el.code;
    select.append(langOption)
}


const addPrice = (array) => {
    for (const item of array) {
        if (item.name === "Bitcoin") {
            p1.innerHTML = `${item.name.toUpperCase()} - $${item.price_usd.toFixed(2)}`
        } else if (item.name === "Ethereum") {
            p2.innerHTML = `${item.name.toUpperCase()} - $${item.price_usd.toFixed(2)}`
        } else if (item.name === "Cardano") {
            p3.innerHTML = `${item.name.toUpperCase()} - $${item.price_usd.toFixed(2)}`
        }

    }
}


