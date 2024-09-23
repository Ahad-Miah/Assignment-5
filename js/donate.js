// Noakhali
document.getElementById('noakhali-button').addEventListener('click',function(){

    const donationTaka = inputValue("noakhali-input");

    const addTaka = innerTextValue("noakhali-taka");

    const balance = innerTextValue("balance");

    if(donationTaka < 0 || isNaN(donationTaka) || donationTaka > balance){
        alert("Invalid input");
        return;
    }
    const availableBalance = balance-donationTaka;
    
    const totalTaka = donationTaka + addTaka;
    
    document.getElementById("noakhali-taka").innerText = totalTaka;
    document.getElementById("balance").innerText =  availableBalance;

    // history starts
    const date =new Date();
    const divCreate = document.createElement('div');
    divCreate.className = "max-w-screen-lg mx-auto border border-gray-200 rounded-lg p-4 my-3";
    divCreate.innerHTML =`<h1 class="font-bold text-black mb-3">${donationTaka} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
            <p class="font-semibold text-sm text-gray-500">Date :${date}</p>`;

    document.getElementById('history').appendChild(divCreate);
    // history ends
    my_modal_5.showModal();

})
// Feni
document.getElementById("feni-button").addEventListener('click',function(){

    const donationTaka = inputValue("feni-input");

    const addTaka = innerTextValue("feni-taka");

    const balance = innerTextValue("balance");

    if(donationTaka < 0 || isNaN(donationTaka) || donationTaka > balance){
        alert("Invalid input");
        return;
    }
    const availableBalance = balance-donationTaka;
    
    const totalTaka = donationTaka + addTaka;
    
    document.getElementById("feni-taka").innerText = totalTaka;
    document.getElementById("balance").innerText =  availableBalance;

    // history starts
    const date =new Date();
    const divCreate = document.createElement('div');
    divCreate.className = "max-w-screen-lg mx-auto border border-gray-200 rounded-lg p-4 my-3";
    divCreate.innerHTML =`<h1 class="font-bold text-black mb-3">${donationTaka} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
            <p class="font-semibold text-sm text-gray-500">Date :${date}</p>`;

    document.getElementById('history').appendChild(divCreate);
    // history ends
    my_modal_5.showModal();
})
// Quota
document.getElementById("quota-button").addEventListener('click',function(){

    const donationTaka = inputValue("quota-input");

    const addTaka = innerTextValue("quota-taka");

    const balance = innerTextValue("balance");
    
    if(donationTaka < 0 || isNaN(donationTaka) || donationTaka > balance){
        alert("Invalid input");
        return;
    }
    const availableBalance = balance-donationTaka;
    const totalTaka = donationTaka + addTaka;
    
    document.getElementById("quota-taka").innerText = totalTaka;
    document.getElementById("balance").innerText =  availableBalance;

    // history starts
    const date =new Date();
    const divCreate = document.createElement('div');
    divCreate.className = "max-w-screen-lg mx-auto border border-gray-200 rounded-lg p-4 my-3";
    divCreate.innerHTML =`<h1 class="font-bold text-black mb-3">${donationTaka} Taka is Donated for famine-2024 at Quota Movement, Bangladesh</h1>
            <p class="font-semibold text-sm text-gray-500">Date :${date}</p>`;

    document.getElementById('history').appendChild(divCreate);
    // history ends
    my_modal_5.showModal();
})
