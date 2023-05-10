package pl.project.dvdrental.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.project.dvdrental.model.Rent;
import pl.project.dvdrental.repository.RentRepository;

import java.time.temporal.ChronoUnit;
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

    public List<Rent> getRentsNotPayed() {
        return  rentRepository.getRentsNotPayed();
    }

    public Rent addRent(Rent rent) {
        return rentRepository.save(rent);
    }

    @Transactional
    public Rent editRent(Rent rent) {
        Rent rentEdited = rentRepository.findById(rent.getId()).orElseThrow();

        if (rent.isPayed() == true) {
            rentEdited.setPayed(true);
            return rentEdited;
        }

        long delay = ChronoUnit.DAYS.between(rentEdited.getRentDate(), rent.getReturnDate());
        float additionalCost;

        if (delay > 7 ) {
            delay = delay - 7;
            additionalCost = (float) (((float) delay) * 1.25);
        } else {
            delay = 0;
            additionalCost = 0;
        }

        rentEdited.setReturnDate(rent.getReturnDate());
        rentEdited.setDelay((int)delay);
        rentEdited.setAdditionalCost(additionalCost);

        return rentEdited;
    }
}
