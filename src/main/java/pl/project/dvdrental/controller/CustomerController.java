package pl.project.dvdrental.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pl.project.dvdrental.model.Customer;
import pl.project.dvdrental.service.CustomerService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping("/customers")
    public List<Customer> getMovie() {
        return customerService.getCustomers();
    }

    @GetMapping("/customer/{id}")
    public Customer getSingleMovie(@PathVariable Long id) {
        return customerService.getCustomer(id);
    }
}
