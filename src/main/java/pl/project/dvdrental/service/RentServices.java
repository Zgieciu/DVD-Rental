package pl.project.dvdrental.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.project.dvdrental.model.Rent;
import pl.project.dvdrental.repository.RentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RentServices {

    private final RentRepository rentRepository;

    public List<Rent> getRents() {
        return rentRepository.findAll();
    }

    public Rent getRent(Long id) {
        return rentRepository.findById(id)
                .orElseThrow();
    }

    public List<Rent> getRentsNotReturned() {
        return rentRepository.getRentsNotReturned();
    }

    public Rent addRent(Rent rent) {
        return rentRepository.save(rent);
    }

    @Transactional
    public Rent editRent(Rent rent) {
        Rent rentEdited = rentRepository.findById(rent.getId()).orElseThrow();
        rentEdited.setReturnDate(rent.getReturnDate());
        return rentEdited;
    }
}
