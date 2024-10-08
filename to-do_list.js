document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        function onMouseOver() {
            deleteButton.style.backgroundColor = '#b55171';
        }
        
        function onMouseOut() {
            deleteButton.style.backgroundColor = '#cb4eed'; 
        }

        deleteButton.addEventListener('mouseover', onMouseOver);
        deleteButton.addEventListener('mouseout', onMouseOut);

        listItem.appendChild(deleteButton);

        // Toggle task completion
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    });
});
