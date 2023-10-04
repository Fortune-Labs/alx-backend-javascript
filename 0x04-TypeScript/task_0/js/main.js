var std_one = {
    firstName: "Fortune",
    lastName: "Legend",
    age: 20,
    location: "Mango"
};
var std_two = {
    firstName: "Fortune",
    lastName: "Legend",
    age: 18,
    location: "Los Santos"
};
var studentList = [std_one, std_two];
var student_table = document.createElement('table');
var student_body = document.createElement('tbody');
studentList.forEach(function (objectList) {
    var tableName = document.createElement('tableName');
    var tableRow = document.createElement('tableRow');
    var tableLocation = document.createElement('tableLocation');
    tableName.textContent = objectList.firstName;
    tableLocation.textContent = objectList.location;
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableLocation);
    student_body.appendChild(tableRow);
});
student_table.appendChild(student_body);
document.body.appendChild(student_table);
