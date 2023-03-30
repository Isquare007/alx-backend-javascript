interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Ibrahim',
    lastName: 'Ibrahim',
    age: 23,
    location: 'Ojuelegba',
};

const studentTwo: Student = {
    firstName: 'Zubaidah',
    lastName: 'Ibrahim',
    age: 22,
    location: 'Shita',
};


const studentsList: Array<Student> = [studentOne, studentTwo];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((s) => {
    const row = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellLocation = document.createElement("td");

    cellName.textContent = s.firstName;
    cellLocation.textContent = s.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row)
});

table.appendChild(tbody);
document.body.appendChild(table)