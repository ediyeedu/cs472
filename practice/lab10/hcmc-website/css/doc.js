class Patients{
    constructor(personID,FirstN,MiddleI,LastN,doB,dpt,outPatient){
        this.personID = personID;
        this.firstN = FirstN;
        this.middleI = MiddleI;
        this.lastName = LastN;
        this.dOB = doB;
        this.department = dpt;
        this.outPatient = outPatient;
    }
    addingNewPatient(){
     const properties = [this.personID, this.firstN, this.middleI, this.lastName, this.dOB, this.department, this.outPatient];
    let tBody = document.getElementById("tbodyPatientsList");
    let newTr = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      let tableData = document.createElement("td");
      let content = document.createTextNode(properties[i]);
      tableData.appendChild(content);
      newTr.appendChild(tableData);
    }
    tBody.appendChild(newTr);
}
}
const person1 = new Patients("EP-001-000001", "Ana", "J", "Smith", "1945-01-05", "Ear, Nose and Throat", "No");
const person2 = new Patients("P-001-000002", "Bob", "K", "Jones", "1985-05-04", "Cardiology", "Yes");
const person3 = new Patients("EP-001-000003", "Carlos", "A", "Hernandez", "1957-03-13", "Cardiology", "Yes")

var patients=[person1,person2,person3]
patients.forEach(patient => {
    patient.addingNewPatient();
});

document.getElementById("btnRegisterPatient").addEventListener("click", function (event) {
 
    // Get form values
    var patientIdNumber = document.getElementById("patientIdNumber");
    var firstName = document.getElementById("firstName");
    var middleInitials = document.getElementById("middleInitials");
    var lastName = document.getElementById("lastName");
    var dateOfBirth = document.getElementById("dateOfBirth");
    var ddlDepartment = document.getElementById("ddlDepartment");
    var radioIsOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked');

        // Check if required fields are empty
    if (!patientIdNumber.checkValidity() || !firstName.checkValidity() || !lastName.checkValidity() || !dateOfBirth.checkValidity() || !ddlDepartment.checkValidity() || !radioIsOutPatient.checkValidity()) {
            return;
        }

event.preventDefault(); // Prevent the form from actually submitting

 const newPatient = new Patients(patientIdNumber.value, firstName.value, middleInitials.value, lastName.value, dateOfBirth.value, ddlDepartment.value, radioIsOutPatient.value);
 newPatient.addPatient();
  });

  var elderlyCheck = document.getElementById("chkElderlyPatients");
  elderlyCheck.addEventListener("change", funCheck);

  var outPatient = document.getElementById("chkShowOutPatients");
  outPatient.addEventListener("change", funCheck);

  function funCheck() {
    var rows = document.getElementById("tbodyPatientsList").getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        
        var cellOut = rows[i].getElementsByTagName("td")[6];
        var outPat = cellOut.textContent;

     // Get the cell in the "Date of Birth" column (index 4) for each row
        var cellDate = rows[i].getElementsByTagName("td")[4];
        var dateOfBirth = cellDate.textContent;
        // Extract the year from the "Date of Birth"
        var year = parseInt(dateOfBirth.split("-")[0], 10);

        // Check if the outPatient or/and the elderlyCheck is checked
        if ((outPatient.checked && outPat=="No")||(elderlyCheck.checked && year > 1958)) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "";
        }
    }
}