package pl.project.dvdrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.project.dvdrental.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

}