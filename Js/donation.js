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

  

  if (newBalance > totalBalance) {
    alert("You have not enough money!");
    return;
  }
  
  const newBalance = donationMoney + balance;
  const reduceTotalBalance = totalBalance - donationMoney;

  // Show modal
  document.getElementById("noakhali_modal").showModal();

  document.getElementById("noakhali-balance").innerText = newBalance;
  document.getElementById("total-balance").innerText = reduceTotalBalance;

  // all donation history for qouta
  const createDiv = document.createElement("div");
  createDiv.classList.add("p-4", "border", "rounded", "mt-3");
  createDiv.innerHTML = `
    <h3 class="text-2xl font-semibold">${donationMoney} BDT donated for Noakhali Flood</h3>
    <p class="text-gray-500 text-sm">${new Date().toLocaleString()}</p>
`;
  document.getElementById("donation-container").appendChild(createDiv);
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

  if (newBalance > totalBalance) {
    alert("You have not enough money!");
    return;
  }

  const newBalance = donationMoney + balance;
  const reduceTotalBalance = totalBalance - donationMoney;

  // Show modal
  document.getElementById("feni_modal").showModal();

  document.getElementById("feni-balance").innerText = newBalance;
  document.getElementById("total-balance").innerText = reduceTotalBalance;

  // all donation history for qouta
  const createDiv = document.createElement("div");
  createDiv.classList.add("p-4", "border", "rounded", "mt-3");
  createDiv.innerHTML = `
    <h3 class="text-2xl font-semibold">${donationMoney} BDT donated for Feni Flood</h3>
    <p class="text-gray-500 text-sm">${new Date().toLocaleString()}</p>
`;
  document.getElementById("donation-container").appendChild(createDiv);
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

  if (newBalance > totalBalance) {
    alert("You have not enough money!");
    return;
  }

  const newBalance = donationMoney + balance;
  const reduceTotalBalance = totalBalance - donationMoney;

  // Show modal
  document.getElementById("qouta_modal").showModal();

  document.getElementById("qouta-balance").innerText = newBalance;
  document.getElementById("total-balance").innerText = reduceTotalBalance;

  // all donation history for qouta
  const createDiv = document.createElement("div");
  createDiv.classList.add("p-4", "border", "rounded", "mt-3");
  createDiv.innerHTML = `
    <h3 class="text-2xl font-semibold">${donationMoney} BDT donated for Qouta Relief</h3>
    <p class="text-gray-500 text-sm">${new Date().toLocaleString()}</p>
`;
  document.getElementById("donation-container").appendChild(createDiv);
});
