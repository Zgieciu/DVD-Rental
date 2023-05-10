package pl.project.dvdrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.project.dvdrental.model.Rent;

import java.util.List;

@Repository
public interface RentRepository extends JpaRepository <Rent, Long> {

    @Query("SELECT rent FROM Rent rent WHERE rent.returnDate = NULL")
    List<Rent> getRentsNotReturned();

    @Query("SELECT rent FROM Rent rent WHERE rent.payed = FALSE AND rent.returnDate IS NOT NULL")
    List<Rent> getRentsNotPayed();
}
