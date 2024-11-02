// HIstory button
document.getElementById('history-button').addEventListener('click',function(){

    const historyButton = document.getElementById("history-button");
    historyButton.classList.add("bg-lime-400","text-stone-950");
    historyButton.classList.remove("border-2", "border-gray-200");

    const donationButton = document.getElementById("donation-button");
    donationButton.classList.remove("bg-lime-300","text-stone-950");
    donationButton.classList.add("text-gray-600","border-2", "border-gray-200");


    const main = document.getElementById("main");
    main.classList.add("hidden");
    const history =  document.getElementById("history");
    history.classList.remove("hidden");

})

// Donation button
document.getElementById('donation-button').addEventListener('click',function(){

    const historyButton = document.getElementById("history-button");
    historyButton.classList.remove("bg-lime-400","text-stone-950");
    historyButton.classList.add("border-2", "border-gray-200");

    const donationButton = document.getElementById("donation-button");
    donationButton.classList.add("bg-lime-300","text-stone-950");

    const main =  document.getElementById("main");
    main.classList.remove("hidden");

    const history = document.getElementById('history');
    history.classList.add("hidden");
})