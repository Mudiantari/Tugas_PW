// Fungsi untuk menambahkan tugas ke daftar
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === "") {
      alert("Silakan masukkan tugas!");
      return;
    }
  
    // Membuat elemen tugas baru
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
  
    // Tombol untuk checklist tugas
    newTask.addEventListener('click', function() {
      newTask.classList.toggle('completed');
    });
  
    // Tombol untuk menghapus tugas
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Hapus";
    deleteButton.onclick = function() {
      taskList.removeChild(newTask);
    };
  
    // Menambahkan tombol hapus ke elemen tugas
    newTask.appendChild(deleteButton);
  
    // Menambahkan tugas baru ke dalam daftar
    taskList.appendChild(newTask);
  
    // Mengosongkan input setelah menambahkan tugas
    taskInput.value = "";
  }
  