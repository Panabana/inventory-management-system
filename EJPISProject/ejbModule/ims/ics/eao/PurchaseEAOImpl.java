package ims.ics.eao;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import ims.ics.ejb.Employee;
import ims.ics.ejb.Purchase;

/**
 * Session Bean implementation class PurchaseEAOImpl
 */
@Stateless
public class PurchaseEAOImpl implements PurchaseEAOLocal {

	@PersistenceContext(unitName = "LabEJBSql")
	private EntityManager em;
    
    public PurchaseEAOImpl() {}
    
    public Purchase findPurchaseById(int purchaseId) {
    	return em.find(Purchase.class, purchaseId);
    }
    
    public Purchase createPurchase(Purchase purchase) {
    	em.persist(purchase);
    	return purchase;
    }
    
    public void updatePurchase(Purchase purchase) {
    	Purchase existingPurchase = em.find(Purchase.class, purchase.getPurchaseId());
    	if(existingPurchase != null) {
    		existingPurchase.setEmployee(purchase.getEmployee());
    		existingPurchase.setCustomer(purchase.getCustomer());
    		em.merge(existingPurchase);
    	}
    }
    
    public void deletePurchase(int purchaseId) {
    	Purchase purchase =em.find(Purchase.class, purchaseId);
    	if(purchase != null) {
    		em.remove(purchase);
    	}
    }

}
