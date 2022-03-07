let form = document.getElementById("form")
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", ];
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", ];

// const generateAkanName = () => {
//     let yearOfBirth = document.getElementById("year").value;
//     let monthOfBirth = (document.getElementById("month").value);
//     let dayOfBirth = Number(document.getElementById("year").value);
//     let gender = document.getElementById("year").value;

// }
const generateAkanName = () => {
        // Select Elements in the DOM
        let yearOfBirth = document.getElementById("year").value;
        let monthOfBirth = Number(document.getElementById("month").value);
        let dayOfBirth = Number(document.getElementById("day").value);
        let gender = document.getElementById("gender").value;



        function isDateValid() {
            if (
                dayOfBirth <= 0 ||
                dayOfBirth > 31 ||
                monthOfBirth <= 0 ||
                monthOfBirth > 12
            ) {
                return false;
            }

            return true;
        }


        // let day = document.getElementById("day");
        // let month = document.getElementById("month");
        // let year = document.getElementById("year");
        // let btn = document.getElementById("btn");

        // function Day() {
        //     let CC = year.substring(0, 2);
        //     let YY = year.substring(2);
        //     let MM = month.value;
        //     let DD = date.value;
        //     let d = ((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)
        //     console.log(d)
        // }

        // function generateName() {
        //     let gender = document.getElementById(gender);
        //     let index = Day()
        //     let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
        //     let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
        //     if (gender.value == "female") {
        //         console.log(female[index])
        //     } else {
        //         console.log(male[index])
        //     }
        // }
        // btn.addEventListener("click"), (e) => e.preventDefault();
        // console.log("click here")