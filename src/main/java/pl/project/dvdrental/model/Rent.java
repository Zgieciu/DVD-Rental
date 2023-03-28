package pl.project.dvdrental.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Rent {
    @Id
    private Long id;
    private Long userId;
    private Long movieId;
    private LocalDate rentDate;
    private LocalDate returnDate;
    private Float rentalCosts;
    private int delay;
    private Float additionalCosts;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
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

    public Float getRentalCosts() {
        return rentalCosts;
    }

    public void setRentalCosts(Float rentalCosts) {
        this.rentalCosts = rentalCosts;
    }

    public int getDelay() {
        return delay;
    }

    public void setDelay(int delay) {
        this.delay = delay;
    }

    public Float getAdditionalCosts() {
        return additionalCosts;
    }

    public void setAdditionalCosts(Float additionalCosts) {
        this.additionalCosts = additionalCosts;
    }
}
