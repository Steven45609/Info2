document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const nationality = document.getElementById("nationality").value;

    if (age < 18) {
        alert("Debe ser mayor de 18 años para inscribirse.");
        return;
    }

    if (nationality !== "Peruano") {
        alert("Solo los peruanos pueden inscribirse en esta conferencia.");
        return;
    }

    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = `
        <tr>
            <td>${fullName}</td>
            <td>${age}</td>
            <td>${nationality}</td>
            <td>${number}</td>
            <td>${email}</td>
        </tr>
    `;

    document.getElementById("confirmationTable").style.display = "block";
});
