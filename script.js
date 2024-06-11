const fromCurrencySelect = document.getElementById('from_currency');
const toCurrencySelect = document.getElementById('to_currency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const resultParagraph = document.getElementById('result');
const form = document.getElementById('currency-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  convertCurrency();
});

function convertCurrency() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    displayResult('Please enter a valid amount.');
    return;
  }

  const exchangeRate = getExchangeRate(fromCurrency, toCurrency);
  const convertedAmount = (amount * exchangeRate).toFixed(2);

  displayResult(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
}

function getExchangeRate(fromCurrency, toCurrency) {
  const exchangeRates = {
    'USD_EUR': 0.93,
    'USD_INR': 83.63,
    'USD_JPY': 157.28,
    'USD_GBP':0.79,
    'USD_AUD':1.52,

    'EUR_USD': 1.13,
    'EUR_INR': 84.51,
    'EUR_JPY': 168.72,
    'EUR_GBP': 0.84,
    'EUR_AUD':0.84,

    'INR_USD': 0.012,
    'INR_EUR': 0.011,
    'INR_JPY': 1.88,
    'INR_GBP':0.0094,
    'INR_AUD':0.018,

    'JPY_USD': 0.0064,
    'JPY_EUR': 0.0059,
    'JPY_INR': 0.53,
    'JPY_GBP':0.0050,
    'JPY_AUD':0.096,

    'GBP_USD': 1.27,
    'GBP_EUR': 1.19,
    'GBP_INR': 106.36,
    'GBP_JPY':200.04,
    'GBP_AUD':1.93,

    'AUD_USD': 0.66,
    'AUD_EUR': 0.61,
    'AUD_INR': 55.16,
    'AUD_GBP': 0.52,
    'AUD_JPY': 103.73,


    
  };

  const rateKey = `${fromCurrency}_${toCurrency}`;
  return exchangeRates[rateKey] || 1; // Default to 1 if no exchange rate is found
}

function displayResult(message) {
  resultParagraph.textContent = message;
}
