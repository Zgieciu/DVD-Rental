package pl.project.dvdrental.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.project.dvdrental.model.Movie;
import pl.project.dvdrental.service.MovieService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;
    @GetMapping("/movies")
    public List<Movie> getMovies() {
        return movieService.getMovies();
    }

    @GetMapping("/movie/{id}")
    public Movie getMovie(@PathVariable Long id) {
        return movieService.getMovie(id);
    }

    @GetMapping("/movies/category/{category}")
    public List<Movie> getMoviesByCategory(@PathVariable String category) {
        return movieService.getMoviesByCategory(category);
    }

    @GetMapping("/movies/rating/{rating}")
    public List<Movie> getMoviesByRating(@PathVariable Float rating) {
        return movieService.getMoviesByRating(rating);
    }

    @PostMapping("/movies")
    public Movie addMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    @PutMapping("/movies")
    public Movie editMovie(@RequestBody Movie movie) {
        return movieService.editMovie(movie);
    }
}