// Donation + History button color change functionality
    function setActive(name) {
        const donationBtn = document.getElementById('btn-donation');
        const historyBtn = document.getElementById('btn-history');

        if (name === 'donation') {
            donationBtn.className = 'btn min-h-0 h-[45px] px-6 bg-[#B4F461] border-none text-black font-semibold';
            historyBtn.className = 'btn min-h-0 h-[45px] px-6 bg-white border border-gray-300 text-black font-semibold';
        } else {
            historyBtn.className = 'btn min-h-0 h-[45px] px-6 bg-[#B4F461] border-none text-black font-semibold';
            donationBtn.className = 'btn min-h-0 h-[45px] px-6 bg-white border border-gray-300 text-black font-semibold';
        }
    }
