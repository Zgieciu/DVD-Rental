package pl.project.dvdrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.project.dvdrental.model.Rent;

@Repository
public interface RentRepository extends JpaRepository <Rent, Long> {

}
