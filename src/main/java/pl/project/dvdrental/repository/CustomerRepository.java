package pl.project.dvdrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.project.dvdrental.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository <Customer, Long> {

}
