document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log("clicked");
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi =  (weight / ((height * height) 
                            / 10000)).toFixed(2);
    
    var result = document.getElementById("bmi");
    // result.innerHTML = bmi;

    result.innerHTML = `<span>${bmi}</span>`;
});