package br.com.ceronloja.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ceronloja.ws.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
	
	Person findByName(String name);

}
