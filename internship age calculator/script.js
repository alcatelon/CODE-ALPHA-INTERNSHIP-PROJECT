function calculateAge() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    var dob = new Date(year, month - 1, day);
    var now = new Date();

    var age = now.getFullYear() - dob.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (now.getMonth() < dob.getMonth() || (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = "Your are <span class='age'>" + age + "</span> years old.";
}