package pl.project.dvdrental.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.project.dvdrental.model.Movie;
import pl.project.dvdrental.repository.MovieRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;
    public List<Movie> getMovies() {
        return movieRepository.findAll();
    }

    public Movie getMovie(Long id) {
        return movieRepository.findById(id)
                .orElseThrow();
    }

    public List<Movie> getMoviesByCategory(String category) {
        return movieRepository.getMoviesByCategory(category);
    }

    public List<Movie> getMoviesByRating(Float rating) {
        return movieRepository.getMoviesByRating(rating);
    }

    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Transactional
    public Movie editMovie(Movie movie) {
        Movie movieEdited = movieRepository.findById(movie.getId()).orElseThrow();
        movieEdited.setQuantity(movie.getQuantity());
        return movieEdited;
    }
}
