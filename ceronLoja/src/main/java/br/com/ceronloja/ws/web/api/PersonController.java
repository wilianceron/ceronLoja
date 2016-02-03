package br.com.ceronloja.ws.web.api;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.ceronloja.ws.PersonBean;
import br.com.ceronloja.ws.model.Person;
import br.com.ceronloja.ws.service.PersonService;

@CrossOrigin(maxAge = 3600)
@RestController
public class PersonController {
	
	@Autowired
	private PersonService personService;

	public PersonController() {
	}
	
	public PersonController(PersonService personService) {
		this.personService = personService;
	}
	
	@RequestMapping(value = "/persons", 
			       method = RequestMethod.GET,
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Person>> getPersons() {
		Collection<Person> persons = personService.findAll();
		
		return new ResponseEntity<Collection<Person>>(persons, HttpStatus.OK); 
	}
	
	@RequestMapping(value = "/persons/{name}", 
				   method = RequestMethod.GET, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Person> findByName(@PathVariable("name") String name) {
		Person person = personService.findByName(name);
		
		if(person == null)
			return new ResponseEntity<Person>(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Person>(person, HttpStatus.OK);
	}
	
	@Transactional
	@RequestMapping(value = "/persons", 
				   method = RequestMethod.POST, 
				 consumes = MediaType.APPLICATION_JSON_VALUE, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Person> createPerson(@RequestBody PersonBean person) {
		Person personToSave = personService.create(person);
		
		return new ResponseEntity<Person>(personToSave, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/persons/{id}", 
			       method = RequestMethod.PUT, 
			     consumes = MediaType.APPLICATION_JSON_VALUE, 
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Person> update(@RequestBody Person person) {
		Person personUpdated = personService.update(person);
		
		if(personUpdated == null)
			return new ResponseEntity<Person>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<Person>(personUpdated, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/persons/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Person> delete(@PathVariable("id") Long id, @RequestBody Person person) {
		personService.delete(id);
		
		return new ResponseEntity<Person>(HttpStatus.NO_CONTENT);
	}
}
