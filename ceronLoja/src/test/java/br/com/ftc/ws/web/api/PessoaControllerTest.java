package br.com.ftc.ws.web.api;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
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
public class PessoaControllerTest {

	@Mock
	private PessoaService pessoaService;
	
	private PessoaController pessoaController;
	
	@Before
	public void setUp() {
		pessoaController = new PessoaController(pessoaService);
	}
	
	@Test
	public void deveriaCriarNovaPessoa() {
		when(pessoaService.create(any(Pessoa.class))).thenReturn(criaPessoaJoao());
		
		Pessoa pessoa = criaPessoaJoao();
		ResponseEntity<Pessoa> response = pessoaController.criaPessoa(pessoa);
		Pessoa pessoaCriada = response.getBody();
		
		verify(pessoaService,times(1)).create(pessoa);
		
		assertEquals("1", pessoaCriada.getId().toString());
		assertEquals("João da Silva", pessoaCriada.getNome());
	}
	
	@Test
	public void pesquisaUmaPessoa() {
		when(pessoaService.findOne(1l)).thenReturn(criaPessoaJoao());
		
		ResponseEntity<Pessoa> response = pessoaController.getPessoa(1l);
		Pessoa pessoa = response.getBody();
		
		verify(pessoaService,times(1)).findOne(1l);
		
		assertEquals("1", pessoa.getId().toString());
		assertEquals("João da Silva", pessoa.getNome());
	}
	
	@Test
	public void pesquisaVariasPessoas() {
		Pessoa pessoaJoao = criaPessoaJoao();
		Pessoa pessoaMaria = criaPessoaMaria();
		
		when(pessoaService.findAll()).thenReturn(Arrays.asList(pessoaJoao, pessoaMaria));
		
		ResponseEntity<Collection<Pessoa>> response = pessoaController.getPessoas();
		Collection<Pessoa> pessoas = response.getBody();
		
		verify(pessoaService,times(1)).findAll();
		
		assertEquals(2, pessoas.size());
		assertEquals("João da Silva", new ArrayList<Pessoa>(pessoas).get(0).getNome());
		assertEquals("Maria das Dores", new ArrayList<Pessoa>(pessoas).get(1).getNome());
	}

	@Test
	public void deveRemoverPessoa() {
		pessoaController.deletePessoa(1l, criaPessoaJoao());
		
		verify(pessoaService, times(1)).delete(1l);
	}
	
	private Pessoa criaPessoaMaria() {
		return criaPessoa(2l, "Maria das Dores");
	}
	
	private Pessoa criaPessoaJoao() {
		return criaPessoa(1l, "João da Silva");
	}

	private Pessoa criaPessoa(Long id, String nome) {
		Pessoa pessoa = new Pessoa();
		pessoa.setId(id);
		pessoa.setNome(nome);
		return pessoa;
	}
}
