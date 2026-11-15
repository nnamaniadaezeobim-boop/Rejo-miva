// STUDY PLANNER

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

if (taskForm) {

taskForm.addEventListener("submit", function(e) {

e.preventDefault();

let task = taskInput.value.trim();

if (task === "") {
    alert("Please enter a task");
    return;
}

let li = document.createElement("li");

let checkbox = document.createElement("input");

checkbox.type = "checkbox";

checkbox.addEventListener("change", function() {

    li.style.textDecoration =
    checkbox.checked ? "line-through" : "none";

});

let text = document.createTextNode(" " + task + " ");

let remove = document.createElement("button");

remove.textContent = "Delete";

remove.addEventListener("click", function() {
    li.remove();
});

li.appendChild(checkbox);
li.appendChild(text);
li.appendChild(remove);

taskList.appendChild(li);

taskInput.value = "";

});

}

// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function(e) {

e.preventDefault();

let name = document.getElementById("name").value.trim();

let email = document.getElementById("email").value.trim();

let phone = document.getElementById("phone").value.trim();

let message = document.getElementById("message").value.trim();

let feedback = document.getElementById("feedback");

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let phonePattern = /^[0-9]+$/;

if (!name || !email || !phone || !message) {

    feedback.textContent = "All fields are required.";

    return;

}

if (!emailPattern.test(email)) {

    feedback.textContent = "Enter a valid email address.";

    return;

}

if (!phonePattern.test(phone)) {

    feedback.textContent = "Phone number must contain digits only.";

    return;

}

feedback.textContent =
"Your form has been validated successfully!";

contactForm.reset();

});

}