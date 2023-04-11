package pl.project.dvdrental.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.project.dvdrental.model.Movie;
import pl.project.dvdrental.repository.MovieRepository;
import pl.project.dvdrental.model.Rent;
import pl.project.dvdrental.repository.RentRepository;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class RentServices {

    private final RentRepository rentRepository;
    private final MovieRepository movieRepository;

    public List<Rent> getRents() {
        return rentRepository.findAll();
    }

    public Rent getRent(Long id) {
        return rentRepository.findById(id)
                .orElseThrow();
    }
}
