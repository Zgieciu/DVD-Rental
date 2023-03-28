package pl.project.dvdrental.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
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
}
