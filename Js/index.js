// Donation + History button color change functionality
function setActive(name) {
  const donationBtn = document.getElementById("btn-donation");
  const historyBtn = document.getElementById("btn-history");

  //   content changing
  const donationSection = document.getElementById("donation-section");
  const historySection = document.getElementById("history-section");

  if (name === "donation") {
    donationBtn.className =
      "bg-[#B4F461] border-none text-black font-semibold btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl";
    historyBtn.className = "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl";

    // showing and hiding content
    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");
  } else {
    historyBtn.className =
      "bg-[#B4F461] border-none text-black font-semibold btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl";
    donationBtn.className =
      "bg-white border border-gray-300 text-black font-semibold btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl";

    // showing and hiding content
    historySection.classList.remove("hidden");
    donationSection.classList.add("hidden");
  }
}
