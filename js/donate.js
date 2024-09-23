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
    my_modal_5.showModal();
})
