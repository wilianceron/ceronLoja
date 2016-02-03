package br.com.ceronloja.ws.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import br.com.ceronloja.ws.PersonBean;
import br.com.ceronloja.ws.model.Person;

@Service
public interface PersonService {

	Collection<Person> findAll();
	
	Person findOne(Long id);
	
	Person findByName(String name);
	
	Person create(PersonBean person);
	
	Person update(Person person);
	
	void delete(Long id);
}
