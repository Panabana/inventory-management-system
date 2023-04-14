<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.List, ims.ics.ejb.Employee"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<title>IMS - Customers</title>
</head>
<body>
	<%@ include file="header.jsp"%>
	<%@ include file="sidebar.jsp"%>
	<main>
		<div class="main-content">
			<h1>Customer</h1>
			<div class="table-container">
				<table>
					<thead>
						<tr>
							<th>Customer ID</th>
							<th>Name</th>
							<th>Address</th>
							<th>Phone Number</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="customer" items="${customers}">
							<tr>
								<td>${customer.customerId}</td>
								<td>${customer.name}</td>
								<td>${customer.address}</td>
								<td>${customer.phoneNbr}</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
			<div class="form-container">
				<div class="form-field">
					<label for="customer-id">Customer ID</label> <input type="text"
						id="customer-id" name="customer-id" />
				</div>
				<div class="form-field">
					<label for="customer-name">Name</label> <input type="text"
						id="customer-name" name="customer-name" />
				</div>
				<div class="form-field">
					<label for="customer-address">Address</label> <input type="text"
						id="customer-address" name="customer-address" />
				</div>
				<div class="form-field">
					<label for="customer-phone">Phone Number</label> <input type="text"
						id="customer-phone" name="customer-phone" />
				</div>
				<div class="button-group">
					<button type="submit" class="add-button">Add</button>
					<button type="submit" class="update-button">Update</button>
					<button type="submit" class="remove-button">Remove</button>
				</div>
			</div>
		</div>
	</main>
	<%@ include file="footer.jsp"%>
</body>
</html>