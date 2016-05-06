package br.com.ceronloja.ws.web.api;

import br.com.ceronloja.ws.PessoaBean;
import br.com.ceronloja.ws.ProdutoBean;
import br.com.ceronloja.ws.model.Pessoa;
import br.com.ceronloja.ws.model.Produto;
import br.com.ceronloja.ws.service.PessoaService;
import br.com.ceronloja.ws.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Collection;

@CrossOrigin(maxAge = 3600)
@RestController
public class PessoaController {

	@Autowired
	private PessoaService pessoaService;

	public PessoaController() {
	}

	public PessoaController(PessoaService pessoaService) {
		this.pessoaService = pessoaService;
	}
	
	@RequestMapping(value = "/pessoa",
			       method = RequestMethod.GET,
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Pessoa>> getPessoas() {
		Collection<Pessoa> pessoas = pessoaService.findAll();
		
		return new ResponseEntity<>(pessoas, HttpStatus.OK);
	}

	@Transactional
	@RequestMapping(value = "/pessoa",
				   method = RequestMethod.POST, 
				 consumes = MediaType.APPLICATION_JSON_VALUE, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> criaPessoa(@RequestBody PessoaBean pessoa) {
		Pessoa pessoaSalva = pessoaService.create(pessoa);
		
		return new ResponseEntity<>(pessoaSalva, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/pessoa/{id}",
			       method = RequestMethod.PUT, 
			     consumes = MediaType.APPLICATION_JSON_VALUE, 
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> update(@RequestBody Pessoa pessoa) {
		Pessoa pessoaAtualizada = pessoaService.update(pessoa);
		
		if(pessoaAtualizada == null)
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<>(pessoaAtualizada, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/pessoa/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> delete(@PathVariable("id") Long id) {
		pessoaService.delete(id);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
