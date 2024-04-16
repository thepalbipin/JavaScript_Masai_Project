<div class="min-h-screen bg-zinc-100 p-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <form id="employeeForm" class="space-y-4">
        <div>
          <label for="employeeName" class="block text-sm font-medium text-zinc-700">Employee Name</label>
          <input type="text" id="employeeName" name="employeeName" required class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label for="employeeId" class="block text-sm font-medium text-zinc-700">Employee ID</label>
          <input type="text" id="employeeId" name="employeeId" required class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label for="department" class="block text-sm font-medium text-zinc-700">Department</label>
          <select id="department" name="department" required class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Department</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="ops">Ops</option>
            <option value="hr">HR</option>
            <option value="ia">IA</option>
          </select>
        </div>
        <div>
          <label for="experience" class="block text-sm font-medium text-zinc-700">Experience</label>
          <input type="number" id="experience" name="experience" required class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-zinc-700">Email Address</label>
          <input type="email" id="email" name="email" required class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label for="mobileNumber" class="block text-sm font-medium text-zinc-700">Mobile Number</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" required class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <div class="overflow-x-auto">
        <table id="employeeTable" class="min-w-full divide-y divide-zinc-200">
          <thead class="bg-zinc-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Employee ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Department</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Experience in years</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Email address</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Mobile Number</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Role</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
          <tbody id="employeeList" class="bg-white divide-y divide-zinc-200">
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<script>
  const employeeForm = document.getElementById('employeeForm');
  const employeeList = document.getElementById('employeeList');

employeeForm.addEventListener('submit', function(event) {
event.preventDefault();
const formData = new FormData(event.target);
const employeeData = Object.fromEntries(formData.entries());
const row = document.createElement('tr');

    Object.values(employeeData).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      cell.className = 'px-6 py-4 whitespace-nowrap';
      row.appendChild(cell);
    });

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'text-red-600 hover:text-red-900';
    deleteButton.onclick = function() {
      row.remove();
    };
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    employeeList.appendChild(row);
    employeeForm.reset();

});
</script>
