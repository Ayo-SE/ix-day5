class Task {
    constructor(task, description, importance) {
        this.task = task;
        this.description = description;
        this.importance = importance;
    }

    add2Table(table) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger');
        removeButton.innerHTML = 'Remove';

        cell1.innerHTML = this.task;
        cell2.innerHTML = this.description;
        cell3.innerHTML = this.importance;

        removeButton.addEventListener('click', () => {
            row.remove();
        });

        cell4.append(removeButton);
        row.append(cell1);
        row.append(cell2);
        row.append(cell3);
        row.append(cell4);
        table.append(row);

    }
}

let tasks = [];

const taskValue = document.getElementById('task');
const descriptionValue = document.getElementById('description');
const importanceValue = document.getElementById('importance');
const buttonValue = document.getElementById('button');
const tbodyValue = document.getElementById('tbody');

button.addEventListener('click', () => {
    const task = taskValue.value;
    const description = descriptionValue.value;
    const importance = importanceValue.value;

    let newTask = new Task(task, description, importance);

    tasks.push(newTask);
    tableUpdate();
    //tableAdd();

});

let count = 0;

function tableUpdate() {

    let length = tbodyValue.children.length;
    for (let i = count; i < length; i++) {
      const row = tbodyValue.children[0];
      row.remove();
    }
  
    for (const task of tasks) {
        count++;
        task.add2Table(tbodyValue);
    }

}
// function tableAdd() {
//     task.add2Table(tbodyValue);
// }