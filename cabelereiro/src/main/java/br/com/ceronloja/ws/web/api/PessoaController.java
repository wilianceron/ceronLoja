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

import br.com.ceronloja.ws.PessoaBean;
import br.com.ceronloja.ws.model.Pessoa;
import br.com.ceronloja.ws.service.PessoaService;

@CrossOrigin(maxAge = 3600)
@RestController
public class PessoaController {
	
	@Autowired
	private PessoaService personService;

	public PessoaController() {
	}
	
	public PessoaController(PessoaService personService) {
		this.personService = personService;
	}
	
	@RequestMapping(value = "/persons", 
			       method = RequestMethod.GET,
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Pessoa>> getPersons() {
		Collection<Pessoa> persons = personService.findAll();
		
		return new ResponseEntity<Collection<Pessoa>>(persons, HttpStatus.OK); 
	}
	
	@RequestMapping(value = "/persons/{name}", 
				   method = RequestMethod.GET, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> findByName(@PathVariable("name") String name) {
		Pessoa person = personService.findByName(name);
		
		if(person == null)
			return new ResponseEntity<Pessoa>(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Pessoa>(person, HttpStatus.OK);
	}
	
	@Transactional
	@RequestMapping(value = "/persons", 
				   method = RequestMethod.POST, 
				 consumes = MediaType.APPLICATION_JSON_VALUE, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> createPerson(@RequestBody PessoaBean person) {
		Pessoa personToSave = personService.create(person);
		
		return new ResponseEntity<Pessoa>(personToSave, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/persons/{id}", 
			       method = RequestMethod.PUT, 
			     consumes = MediaType.APPLICATION_JSON_VALUE, 
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> update(@RequestBody Pessoa person) {
		Pessoa personUpdated = personService.update(person);
		
		if(personUpdated == null)
			return new ResponseEntity<Pessoa>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<Pessoa>(personUpdated, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/persons/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> delete(@PathVariable("id") Long id, @RequestBody Pessoa person) {
		personService.delete(id);
		
		return new ResponseEntity<Pessoa>(HttpStatus.NO_CONTENT);
	}
}
