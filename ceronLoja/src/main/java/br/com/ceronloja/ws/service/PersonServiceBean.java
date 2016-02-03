package br.com.ceronloja.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.ceronloja.ws.PersonBean;
import br.com.ceronloja.ws.model.Person;
import br.com.ceronloja.ws.repository.PersonRepository;

@Service
@Transactional(propagation = Propagation.SUPPORTS,
			      readOnly = true)
public class PersonServiceBean implements PersonService {

	@Autowired
	private PersonRepository repository;
	
	@Override
	public Collection<Person> findAll() {
		return repository.findAll();
	}

	@Override
	public Person findOne(Long id) {
		return repository.findOne(id);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, readOnly = true)
	public Person create(PersonBean personBean) {
		if(personBean.id != null)
			return null;
		
		Person person = new Person(personBean);
		return repository.save(person);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public Person update(Person person) {
		Person personPersistida = findOne(person.getId());
		if(personPersistida == null)
			return null;
		
		return repository.save(person);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public void delete(Long id) {
		repository.delete(id);
	}

	@Override
	public Person findByName(String name) {
		return repository.findByName(name);
	}

}
