async function convertCurrency() {
  let amount = document.getElementById("amount").value;
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;

  if (amount === "") {
      alert("Please enter an amount");
      return;
  }

  let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
  let data = await response.json();
  let rate = data.rates[toCurrency];
  let result = amount * rate;

  document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}


