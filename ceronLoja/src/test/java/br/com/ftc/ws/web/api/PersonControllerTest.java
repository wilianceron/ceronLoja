package br.com.ftc.ws.web.api;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.ResponseEntity;

import br.com.ceronloja.ws.model.Person;
import br.com.ceronloja.ws.service.PersonService;
import br.com.ceronloja.ws.web.api.PersonController;

@RunWith(MockitoJUnitRunner.class)
public class PersonControllerTest {

	@Mock
	private PersonService personService;
	
	private PersonController personController;
	
	@Before
	public void setUp() {
		personController = new PersonController(personService);
	}
//	
//	@Test
//	public void deveriaCriarNovaPessoa() {
//		when(pessoaService.create(any(Pessoa.class))).thenReturn(criaPessoaJoao());
//		
//		Pessoa pessoa = criaPessoaJoao();
//		ResponseEntity<Pessoa> response = pessoaController.criaPessoa(pessoa);
//		Pessoa pessoaCriada = response.getBody();
//		
//		verify(pessoaService,times(1)).create(pessoa);
//		
//		assertEquals("1", pessoaCriada.getId().toString());
//		assertEquals("João da Silva", pessoaCriada.getName());
//	}
	
	@Test
	public void findPersonByName() {
		when(personService.findByName("João")).thenReturn(createPersonJoao());
		
		ResponseEntity<Person> response = personController.findByName("João");
		Person person = response.getBody();
		
		verify(personService,times(1)).findByName("João");
		
		assertEquals("1", person.getId().toString());
		assertEquals("João da Silva", person.getName());
	}
	
	@Test
	public void findAllPersons() {
		Person joao = createPersonJoao();
		Person maria = createPersonMaria();
		
		when(personService.findAll()).thenReturn(Arrays.asList(joao, maria));
		
		ResponseEntity<Collection<Person>> response = personController.getPersons();
		Collection<Person> persons = response.getBody();
		
		verify(personService,times(1)).findAll();
		
		assertEquals(2, persons.size());
		assertEquals("João da Silva", new ArrayList<Person>(persons).get(0).getName());
		assertEquals("Maria das Dores", new ArrayList<Person>(persons).get(1).getName());
	}

	@Test
	public void shouldRemovePerson() {
		personController.delete(1l, createPersonJoao());
		
		verify(personService, times(1)).delete(1l);
	}
	
	private Person createPersonMaria() {
		return createPerson(2l, "Maria das Dores");
	}
	
	private Person createPersonJoao() {
		return createPerson(1l, "João da Silva");
	}

	private Person createPerson(Long id, String name) {
		Person person = new Person();
		person.setId(id);
		person.setName(name);
		return person;
	}
}
