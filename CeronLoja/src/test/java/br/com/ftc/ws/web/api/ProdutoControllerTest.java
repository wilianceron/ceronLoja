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

import br.com.ceronloja.ws.model.Produto;
import br.com.ceronloja.ws.service.ProdutoService;
import br.com.ceronloja.ws.web.api.ProdutoController;

@RunWith(MockitoJUnitRunner.class)
public class ProdutoControllerTest {

	@Mock
	private ProdutoService produtoService;
	
	private ProdutoController produtoController;
	
	@Before
	public void setUp() {
		produtoController = new ProdutoController(produtoService);
	}
	
	@Test
	public void findAllPersons() {
		Produto joao = createPersonJoao();
		Produto maria = createPersonMaria();
		
		when(produtoService.findAll()).thenReturn(Arrays.asList(joao, maria));
		
		ResponseEntity<Collection<Produto>> response = produtoController.getPersons();
		Collection<Produto> produtos = response.getBody();
		
		verify(produtoService,times(1)).findAll();
		
		assertEquals(2, produtos.size());
		assertEquals("João da Silva", new ArrayList<Produto>(produtos).get(0).getNome());
		assertEquals("Maria das Dores", new ArrayList<Produto>(produtos).get(1).getNome());
	}

	@Test
	public void shouldRemovePerson() {
		produtoController.delete(1l, createPersonJoao());
		
		verify(produtoService, times(1)).delete(1l);
	}
	
	private Produto createPersonMaria() {
		return createPerson(2l, "Maria das Dores");
	}
	
	private Produto createPersonJoao() {
		return createPerson(1l, "João da Silva");
	}

	private Produto createPerson(Long id, String name) {
		Produto produto = new Produto();
		produto.setId(id);
		produto.setNome(name);
		return produto;
	}
}
