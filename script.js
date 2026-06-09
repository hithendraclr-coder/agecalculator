function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("result").innerHTML =
        "Please select your date of birth";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDifference =
        today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("result").innerHTML =
    "Your age is " + age + " years old";
}