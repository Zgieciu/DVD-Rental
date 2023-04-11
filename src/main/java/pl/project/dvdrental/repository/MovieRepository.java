package pl.project.dvdrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.project.dvdrental.model.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

    @Query("SELECT movie FROM Movie movie WHERE movie.category = ?1")
    List<Movie> getMoviesByCategory(String category);

    @Query("SELECT movie FROM Movie movie WHERE movie.rating >= ?1")
    List<Movie> getMoviesByRating(Float rating);

}