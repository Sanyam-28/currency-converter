function convertCurrency() {
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
    const amount = parseFloat(document.getElementById("amount").value);
  
    // Add your currency conversion logic here
    // For simplicity, I'm just showing a fixed conversion rate for demonstration purposes
    const conversionRate = 0.85; // 1 USD = 0.85 EUR (Replace this with the actual conversion rate)
  
    const convertedAmount = amount * conversionRate;
    document.getElementById("result").innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  