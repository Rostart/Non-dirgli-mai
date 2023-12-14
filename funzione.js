let studentList = [];

function addStudent() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  if (firstName && lastName && email && phoneNumber) {
    const student = { firstName, lastName, email, phoneNumber };
    studentList.push(student);

    updateStudentList();
    clearForm();
  } else {
    alert("Inserisci tutte le informazioni dello studente.");
  }
}

function updateStudentList() {
  const listElement = document.getElementById("studentList");
  listElement.innerHTML = "";

  studentList.forEach((student, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${student.firstName} ${student.lastName} - Email: ${student.email} - Tel: ${student.phoneNumber}</span>
            <button class="delete-btn" onclick="removeStudent(${index})">Elimina</button>
        `;
    listElement.appendChild(listItem);
  });
}

function removeStudent(index) {
  studentList.splice(index, 1);
  updateStudentList();
}

function clearForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
}
