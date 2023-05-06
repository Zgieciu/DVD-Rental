package pl.project.dvdrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.project.dvdrental.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository <Customer, Long> {
    @Query("SELECT customer FROM Customer customer WHERE customer.phoneNumber = ?1")
    Customer getCustomerByPhoneNumber(String phoneNumber);
}
