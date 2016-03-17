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

import br.com.ceronloja.ws.model.Pessoa;
import br.com.ceronloja.ws.service.PessoaService;
import br.com.ceronloja.ws.web.api.PessoaController;

@RunWith(MockitoJUnitRunner.class)
public class PersonControllerTest {

	@Mock
	private PessoaService personService;
	
	private PessoaController personController;
	
	@Before
	public void setUp() {
		personController = new PessoaController(personService);
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
		
		ResponseEntity<Pessoa> response = personController.findByName("João");
		Pessoa person = response.getBody();
		
		verify(personService,times(1)).findByName("João");
		
		assertEquals("1", person.getId().toString());
		assertEquals("João da Silva", person.getName());
	}
	
	@Test
	public void findAllPersons() {
		Pessoa joao = createPersonJoao();
		Pessoa maria = createPersonMaria();
		
		when(personService.findAll()).thenReturn(Arrays.asList(joao, maria));
		
		ResponseEntity<Collection<Pessoa>> response = personController.getPersons();
		Collection<Pessoa> persons = response.getBody();
		
		verify(personService,times(1)).findAll();
		
		assertEquals(2, persons.size());
		assertEquals("João da Silva", new ArrayList<Pessoa>(persons).get(0).getName());
		assertEquals("Maria das Dores", new ArrayList<Pessoa>(persons).get(1).getName());
	}

	@Test
	public void shouldRemovePerson() {
		personController.delete(1l, createPersonJoao());
		
		verify(personService, times(1)).delete(1l);
	}
	
	private Pessoa createPersonMaria() {
		return createPerson(2l, "Maria das Dores");
	}
	
	private Pessoa createPersonJoao() {
		return createPerson(1l, "João da Silva");
	}

	private Pessoa createPerson(Long id, String name) {
		Pessoa person = new Pessoa();
		person.setId(id);
		person.setName(name);
		return person;
	}
}
