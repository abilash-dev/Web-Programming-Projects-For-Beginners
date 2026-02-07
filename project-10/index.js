function submit(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let faculty = document.getElementById("faculty").value;
    let regno = document.getElementById("reg_no").value;
    let reason = document.getElementById("reason").value
    let year = document.querySelector('input[name="year"]:checked'); //reference from online

    if (!name || !age || !email || !faculty || !regno || !reason || !year) {
        alert("All fields are required.");
        return;
    }
    let text =
        `<b>Name:</b> ${name}<br>
         <b>Age:</b> ${age}<br>
         <b>Email:</b> ${email}<br>
         <b>Faculty:</b> ${faculty}<br>
         <b>Reg No:</b> ${regno}<br>`;

    document.getElementById("details").innerHTML = text;
    document.getElementById("popup").style.visibility = "visible";
}

function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
    clearContent()
}

function clearContent(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("faculty").selectedIndex = 0;  // reference from online
    document.getElementById("reg_no").value = "";
    document.getElementById("reason").value = "";

    let selectedYear = document.querySelector('input[name="year"]:checked'); // reference from online
    if (selectedYear) {
        selectedYear.checked = false;
    }
}