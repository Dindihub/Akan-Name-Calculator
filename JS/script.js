let form = document.getElementById("form")
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", ];
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", ];


const generateAkanName = () => {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = Number(document.getElementById("month").value);
    let dayOfBirth = Number(document.getElementById("day").value);
    let gender = document.getElementById("gender").value;

}

function isDateValid() {
    if (dayOfBirth <= 0 ||
        dayOfBirth > 31 ||
        monthOfBirth <= 0 ||
        monthOfBirth > 12
    ) {
        return false;
    }

    return true;
}