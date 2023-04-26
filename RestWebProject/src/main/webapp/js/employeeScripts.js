(function() {

	$(document).ready(function() {
		// Call the function to populate the select box
		populateEmployeeSelectBox();

		// Event listeners
		initEventListeners();
	});

	// Initialize
	function initEventListeners() {
		// Event listener for the select box
		$('#employeeSelect').on('change', function() {
			// Retrieve the selected employee ID and name
			var selectedEmp = $(this).val();
			console.log(selectedEmp);
		});

		// Find employee by ID
		$("#findBtn").click(findEmployeeById());

		// Find all employees
		$("#findAllBtn").click(findAllEmployees());

		// Delete employee by ID
		$("#delEmpBtn").click(deleteEmployeeById);

		// Add new employee
		$("#addEmpBtn").click(addEmployee);

		// Update employee
		$("#updtEmpBtn").click(updateEmployee);
	}

	// Display employee table
	function displayEmployees(employees) {
		$.each(employees, function(index, employee) {
			var row = $("<tr>");
			row.append($("<td>").text(employee.EmployeeId));
			row.append($("<td>").text(employee.EmployeeName));
			row.append($("<td>").text(employee.EmployeeAddress));
			row.append($("<td>").text(employee.Phone));
			$("#employeeTable tbody").append(row);
		});
	}

	// Clear employee table
	function clearTable() {
		$("#employeeTable tbody").empty();
	}

	// Find employee by ID
	function findEmployeeById() {
		$(document).on("click", "#findBtn", function(event) {
			event.preventDefault();
			var strValue = $("#empId").val();
			if (strValue != "") {
				$.ajax({
					method: "GET",
					url: "http://localhost:8080/EJBISWebProject/RestServlet/" + strValue,
					error: ajaxRestReturnError,
					success: ajaxRestReturnSuccess
				})
			} else {
				alert("strValue not set");
			}
		});
	}

	// Find all employees
	function findAllEmployees() {
		$("#findAllBtn").click(function(event) {
			event.preventDefault();
			$.ajax({
				method: "GET",
				url: "http://localhost:8080/EJBISWebProject/RestServlet/",
				success: function(result) {
					clearTable();
					displayEmployees(result);
					$("#error-label-employee").empty();
					$("#error-label-employee").append("All employees found.");
				},
				error: function(xhr, status, error) {
					console.error("Error in fetching employees:", error);
					$("#error-label-employee").empty();
					$(".error-label-employee").append("Error in fetching employees");
				}
			});
		});
	}

	// Delete employee by ID
	function deleteEmployeeById(event) {
		$("#delEmpBtn").click(function(event) {
			event.preventDefault();
			var strValue = $("#empId").val();
			if (strValue != "") {
				$.ajax({
					method: "DELETE",
					url: "http://localhost:8080/EJBISWebProject/RestServlet/" + strValue,
					error: ajaxDelReturnError,
					success: ajaxDelReturnSuccess
				})
			}
		});
	}

	// Add new employee
	function addEmployee() {
		$("#addEmpBtn").click(function(event) {
			event.preventDefault();
			// var strId = $("#empIdAdd").val();
			var strName = $("#empName").val();
			var strAddress = $("#empAddress").val();
			var strPhone = $("#empPhone").val();

			// Removed from obj: EmployeeId: strId, 
			var obj = { EmployeeName: strName, EmployeeAddress: strAddress, Phone: strPhone };
			var jsonString = JSON.stringify(obj);
			
			$.ajax({
				method: "POST",
				url: "http://localhost:8080/EJBISWebProject/RestServlet/",
				data: jsonString,
				dataType: 'json',
				error: ajaxAddReturnError,
				success: ajaxAddReturnSuccess
			})
		});
	}

	// Update employee
	function updateEmployee(event) {
		$("#updtEmpBtn").click(function(event) {
			event.preventDefault();
			var strId = $("#empIdAdd").val();
			var strName = $("#empName").val();
			var strAddress = $("#empAddress").val();
			var strPhone = $("#empPhone").val();
			var obj = { EmployeeId: strId, EmployeeName: strName, EmployeeAddress: strAddress, Phone: strPhone };
			var jsonString = JSON.stringify(obj);
			if (strId != "") {
				$.ajax({
					method: "PUT",
					url: "http://localhost:8080/EJBISWebProject/RestServlet/" + strId,
					data: jsonString,
					dataType: 'json',
					error: ajaxUpdateReturnError,
					success: ajaxUpdateReturnSuccess
				});
			}
		});
	}

	// Populate employee select box
	function populateEmployeeSelectBox() {
		$.ajax({
			method: "GET",
			url: "http://localhost:8080/EJBISWebProject/RestServlet/",
			success: function(result) {
				var selectBox = $("#employeeSelect");
				selectBox.empty();
				$.each(result, function(index, employee) {
					var option = $("<option>").val(employee.EmployeeId).text(employee.EmployeeId + " - " + employee.EmployeeName);
					selectBox.append(option);
				});
			},
			error: function(xhr, status, error) {
				console.error("Error in fetching employees:", error);
			}
		});
	}

	// Helper functions for AJAX calls
	function ajaxRestReturnSuccess(result, status, xhr) {
		parseJsonFileEmployee(result);
		$("#error-label-employee").empty();
		$("#error-label-employee").append("Chosen employee found.");
	}

	function ajaxRestReturnError(result, status, xhr) {
		alert("Error in rest Service");
		console.log("Ajax-find Employee: " + status);
		$("#error-label-employee").empty();
		$(".error-label-employee").append("Error in fetching employee");
	}

	function ajaxUpdateReturnSuccess(result, status, xhr) {
		clearFields();
		$("#empName").attr("placeholder", "Employee updated");
		alert("Success")
		displayEmployees(result);
	}

	function ajaxUpdateReturnError(result, status, xhr) {
		alert("Error updating employee");
		console.log("Ajax-update employee: " + status);
		displayEmployees(result);
	}

	function ajaxDelReturnSuccess(result, status, xhr) {
		clearFields();
		$("#EmployeeName").attr("placeholder", "Employee deleted");
		displayEmployees(result);
	}

	function ajaxDelReturnError(result, status, xhr) {
		alert("Error");
		console.log("Ajax-find Employee: " + status);
		displayEmployees(result);
	}

	function ajaxAddReturnSuccess(result, status, xhr) {
		clearFields();
		$("#EmployeeName").attr("placeholder", "Employee added");
		displayEmployees(result);
	}
	function ajaxAddReturnError(result, status, xhr) {
		alert("Error Add");
		console.log("Ajax-find employee: " + status);
		displayEmployees(result);
	}

	function parseJsonFileEmployee(result) {
		clearTable();
		clearFields();
		var row = $("<tr>");
		row.append($("<td>").text(result.EmployeeName));
		row.append($("<td>").text(result.EmployeeId));
		row.append($("<td>").text(result.EmployeeAddress));
		row.append($("<td>").text(result.Phone));
		$("#employeeTable tbody").empty().append(row);
		$("#empName").val(result.EmployeeName);
		$("#empIdAdd").val(result.EmployeeId);
		$("#empAddress").val(result.EmployeeAddress);
		$("#empPhone").val(result.Phone);
	}

	function clearFields() {
		$("#EmployeeName").text("");
		$("#EmployeeId").text("");
		$("#EmployeeAddress").text("");
		$("#EmployeePhone").text("");
	}
})();