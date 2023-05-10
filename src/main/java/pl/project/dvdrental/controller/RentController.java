package pl.project.dvdrental.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.project.dvdrental.model.Rent;
import pl.project.dvdrental.service.RentServices;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class RentController {

    private final RentServices rentServices;

    @GetMapping("/rents")
    public List<Rent> getRents() {
        return rentServices.getRents();
    }

    @GetMapping("/rent/{id}")
    public Rent getRent(@PathVariable Long id) {
        return rentServices.getRent(id);
    }

    @GetMapping("/rents/notReturned")
    public List<Rent> getRentsNotReturned() {
        return rentServices.getRentsNotReturned();
    }

    @GetMapping("/rents/notPayed")
    public List<Rent> getRentsNotPayed() {
        return rentServices.getRentsNotPayed();
    }

    @PostMapping("/rents")
    public Rent addRent(@RequestBody Rent rent) {
        return rentServices.addRent(rent);
    }

    @PutMapping("/rents")
    public Rent editRent(@RequestBody Rent rent) {
        return rentServices.editRent(rent);
    }
}
