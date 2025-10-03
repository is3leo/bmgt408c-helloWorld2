function changeText() {
    document.getElementById('textParagraph').innerText = "The text has been changed.";
}

document.getElementById('changeTextButton').addEventListener('click', changeText);

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); // Initialize tooltips for elements with data-toggle="tooltip"
});

//function to display a greeting message
function displayGreeting(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    document.getElementById('greetingMessage').innerText = `Hello, ${name}!`;
}

document.getElementById('nameForm').addEventListener('submit', displayGreeting);

const favoriteFoods = ['Tteokbokki','Sushi', 'Malatang','Pasta/Noodles', 'Birria Tacos or Fish Tacos'];

//function to display favorite foods
function displayFavoriteFoods() {
    const foodList = document.getElementById('foodList');
    favoriteFoods.forEach(food => {
        const li = document.createElement('li');
        li.innerText = food;
        foodList.appendChild(li);
    });
}

displayFavoriteFoods();

//function to handle course selection
function handleCourseSelection() {
    const courses = document.querySelectorAll('input[name="courses"]:checked');
    let selectedCourses = [];
    courses.forEach(course => {
        selectedCourses.push(course.value);
    });
    alert("Courses taken: " + selectedCourses.join(", "));
}

document.getElementById('coursesSubmit').addEventListener('click', handleCourseSelection);