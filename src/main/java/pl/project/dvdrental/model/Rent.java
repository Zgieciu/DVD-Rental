package pl.project.dvdrental.model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "rent")
public class Rent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customerId;
    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movieId;
    private LocalDate rentDate;
    private LocalDate returnDate;
    private Float rentalCost;
    private int rentDays;
    private Float additionalCost;

    private boolean payed;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Customer customerId) {
        this.customerId = customerId;
    }

    public Movie getMovieId() {
        return movieId;
    }

    public void setMovieId(Movie movieId) {
        this.movieId = movieId;
    }

    public LocalDate getRentDate() {
        return rentDate;
    }

    public void setRentDate(LocalDate rentDate) {
        this.rentDate = rentDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public Float getRentalCost() {
        return rentalCost;
    }

    public void setRentalCost(Float rentalCost) {
        this.rentalCost = rentalCost;
    }

    public int getRentDays() {
        return rentDays;
    }

    public void setRentDays(int rentDays) {
        this.rentDays = rentDays;
    }

    public Float getAdditionalCost() {
        return additionalCost;
    }

    public void setAdditionalCost(Float additionalCost) {
        this.additionalCost = additionalCost;
    }

    public boolean isPayed() {
        return payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
    }

}
