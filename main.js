const tasks = [];

fetch('https://62334515a3d0e4ac0bde7bd0.mockapi.io/task')
    .then(resp => resp.json())
    .then(displayData);

function displayData(data) {
    const olList = document.getElementById('task-list-container');
    for (const task of data) {
        tasks.push(task);
        const superLiTag = document.createElement('li', { is : 'super-li' });
        superLiTag.setAttribute('task', JSON.stringify(task));
        olList.appendChild(superLiTag);
        // const listElement = document.createElement('li');
        // const node = document.createTextNode(task.name);
        // listElement.appendChild(node);
        // olList.appendChild(listElement);
    }
}