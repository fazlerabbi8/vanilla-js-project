// Donation for Noakhali
document.getElementById("noakhali").addEventListener("click", function (event) {
  event.preventDefault();

  const donationMoney = getInputValueById("noakhali-donation");

  const balance = getTextValueById("noakhali-balance");
  const totalBalance = getTextValueById("total-balance");

  if (isNaN(donationMoney)) {
    alert("Money is not added!");
    return;
  }

  const newBalance = donationMoney + balance;

  if (newBalance > totalBalance) {
    alert("You have not enough money!");
    return;
  }
  const reduceTotalBalance = totalBalance - donationMoney;

  // Show modal
  document.getElementById("noakhali_modal").showModal();

  document.getElementById("noakhali-balance").innerText = newBalance;
  document.getElementById("total-balance").innerText = reduceTotalBalance;
});

// Donation for Feni
document.getElementById("feni").addEventListener("click", function (event) {
  event.preventDefault();

  const donationMoney = getInputValueById("feni-donation");

  const balance = getTextValueById("feni-balance");
  const totalBalance = getTextValueById("total-balance");

  if (isNaN(donationMoney)) {
    alert("Money is not added!");
    return;
  }

  const newBalance = donationMoney + balance;

  if (newBalance > totalBalance) {
    alert("You have not enough money!");
    return;
  }

  const reduceTotalBalance = totalBalance - donationMoney;

  // Show modal
  document.getElementById("feni_modal").showModal();

  document.getElementById("feni-balance").innerText = newBalance;
  document.getElementById("total-balance").innerText = reduceTotalBalance;
});

// Donation for Qouta
document.getElementById("qouta").addEventListener("click", function (event) {
  event.preventDefault();

  const donationMoney = getInputValueById("qouta-donation");

  const balance = getTextValueById("qouta-balance");
  const totalBalance = getTextValueById("total-balance");

  if (isNaN(donationMoney)) {
    alert("Money is not added!");
    return;
  }

  const newBalance = donationMoney + balance;

  if (newBalance > totalBalance) {
    alert("You have not enough money!");
    return;
  }

  const reduceTotalBalance = totalBalance - donationMoney;

  // Show modal
  document.getElementById("qouta_modal").showModal();

  document.getElementById("qouta-balance").innerText = newBalance;
  document.getElementById("total-balance").innerText = reduceTotalBalance;
});
