document.getElementById('Btn').addEventListener('click', addTask);
function addTask() {
    const inp = document.getElementById('inp');
    const taskText = inp.value;
    if (taskText === '') {
        alert('Please enter ');
        return false;
    }
const mylist = document.getElementById('mylist');
    const li = document.createElement('li');
    li.innerHTML = `${taskText}<button class="deleteBtn">Delete</button>`;

    mylist.appendChild(li);

    li.querySelector('.deleteBtn').addEventListener('click', function() {
        li.remove();
    });
    inp.value = '';
}