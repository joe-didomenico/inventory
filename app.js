"use strict"

document.getElementById("update").addEventListener("click", update);

function update() {
    let count = document.getElementById("count").value;
    let usage = document.getElementById("usage").value;
    let weeks_supply = count / usage;
    let wks = document.getElementById("weeks");
    wks.value = String(weeks_supply);
    // alert(document.getElementById("count").textContent);
    // alert("hey");

}