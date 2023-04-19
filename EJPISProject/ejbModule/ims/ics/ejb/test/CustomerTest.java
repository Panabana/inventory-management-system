package ims.ics.ejb.test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Set;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import ims.ics.ejb.Customer;
import ims.ics.ejb.Purchase;

class CustomerTest {
	private int expectedId;
	private String expectedName;
	private String expectedAddress;
	private int expectedPhoneNumber;
	private Set<Purchase> expectedPurchases;
	
	private Customer customer;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		expectedId = 1;
		expectedName = "Rikard";
		expectedAddress = "Lejonhjärtastaden";
		expectedPhoneNumber = 12345;
		// expectedPurchases = expectedPurchases.add(Purchase p);
		
		customer = new Customer(expectedId, expectedName, expectedAddress, expectedPhoneNumber);
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	final void testGetCustomerId() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testSetCustomerId() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testGetName() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testSetName() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testGetAddress() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testSetAddress() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testGetPhoneNbr() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testSetPhoneNbr() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testGetPurchases() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	final void testSetPurchases() {
		fail("Not yet implemented"); // TODO
	}

}
