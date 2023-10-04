/* creates an interface named Student */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std_one: Student = {
  firstName: "Fortune",
  lastName: "Legend",
  age: 20,
  location: "Mango",
};

const std_two: Student = {
  firstName: "Fortune",
  lastName: "Legend",
  age: 18,
  location: "Los Santos",
};

let studentList: Student[] = [std_one, std_two]

const student_table = document.createElement('table');
const student_body = document.createElement('tbody');

studentList.forEach((objectList) => {
  const tableName = document.createElement('tableName');
  const tableRow = document.createElement('tableRow');
  const tableLocation = document.createElement('tableLocation');

  tableName.textContent = objectList.firstName;
  tableLocation.textContent = objectList.location;
  tableRow.appendChild(tableName);
  tableRow.appendChild(tableLocation);
  student_body.appendChild(tableRow);
})

student_table.appendChild(student_body);
document.body.appendChild(student_table);
