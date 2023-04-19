package pl.project.dvdrental.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.project.dvdrental.model.Customer;
import pl.project.dvdrental.repository.CustomerRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomer(Long id) {
        return customerRepository.findById(id)
                .orElseThrow();
    }

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
