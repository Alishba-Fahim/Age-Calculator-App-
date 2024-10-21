function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (!birthdate) {
        resultDiv.textContent = "Please select a birthdate.";
        resultDiv.style.display = 'block';
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();   

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultDiv.textContent = `Your age is: ${age} years.`;
    resultDiv.style.display = 'block'; 
}
