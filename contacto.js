document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const contactMessage = document.getElementById("contactMessage").value;

    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = `
        <tr>
            <td>${fullName}</td>
            <td>${email}</td>
            <td>${contactMessage}</td>
        </tr>
    `;

    document.getElementById("confirmationTable").style.display = "block";
});
