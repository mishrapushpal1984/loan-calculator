document.getElementById('loan-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById('amount').value);
  const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const years = parseInt(document.getElementById('years').value);
  const payments = years * 12;

  const x = Math.pow(1 + interest, payments);
  const monthly = (amount * x * interest) / (x - 1);

  if (!isNaN(monthly)) {
    const totalPayment = monthly * payments;
    const totalInterest = totalPayment - amount;

    document.getElementById('monthly-payment').textContent = monthly.toFixed(2);
    document.getElementById('total-payment').textContent = totalPayment.toFixed(2);
    document.getElementById('total-interest').textContent = totalInterest.toFixed(2);

    document.getElementById('results').classList.remove('hidden');
    generateAmortizationSchedule(amount, interest, payments, monthly);
  }
});

function generateAmortizationSchedule(principal, monthlyInterest, payments, monthlyPayment) {
  const table = document.getElementById('amortization-body');
  table.innerHTML = "";
  let balance = principal;

  for (let i = 1; i <= payments; i++) {
    const interest = balance * monthlyInterest;
    const principalPaid = monthlyPayment - interest;
    balance -= principalPaid;

    table.innerHTML += `
      <tr>
        <td>${i}</td>
        <td>${principalPaid.toFixed(2)}</td>
        <td>${interest.toFixed(2)}</td>
        <td>${balance > 0 ? balance.toFixed(2) : 0}</td>
      </tr>
    `;
  }

  document.getElementById('amortization').classList.remove('hidden');
}
