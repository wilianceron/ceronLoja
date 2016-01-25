package br.com.ceronloja.ws.web.api;

import java.util.Collection;

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
	private PessoaService pessoaService;

	public PessoaController() {
	}
	
	public PessoaController(PessoaService pessoaService) {
		this.pessoaService = pessoaService;
	}
	
	@RequestMapping(value = "/api/pessoas", 
			       method = RequestMethod.GET, 
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Pessoa>> getPessoas() {
		Collection<Pessoa> pessoas = pessoaService.findAll();
		
		return new ResponseEntity<Collection<Pessoa>>(pessoas, HttpStatus.OK); 
	}
	
	@RequestMapping(value = "/api/pessoas/{id}", 
				   method = RequestMethod.GET, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> getPessoa(@PathVariable("id") Long id) {
		Pessoa pessoa = pessoaService.findOne(id);
		
		if(pessoa == null)
			return new ResponseEntity<Pessoa>(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Pessoa>(pessoa, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/pessoas", 
				   method = RequestMethod.POST, 
				 consumes = MediaType.APPLICATION_JSON_VALUE, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> criaPessoa(@RequestBody PessoaBean pessoa) {
		Pessoa pessoaSalva = pessoaService.create(pessoa);
		
		return new ResponseEntity<Pessoa>(pessoaSalva, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/api/pessoas/{id}", 
			       method = RequestMethod.PUT, 
			     consumes = MediaType.APPLICATION_JSON_VALUE, 
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> atualizaPessoa(@RequestBody Pessoa pessoa) {
		Pessoa pessoaAtualizada = pessoaService.update(pessoa);
		
		if(pessoaAtualizada == null)
			return new ResponseEntity<Pessoa>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<Pessoa>(pessoaAtualizada, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/pessoas/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pessoa> deletePessoa(@PathVariable("id") Long id, @RequestBody Pessoa pessoa) {
		pessoaService.delete(id);
		
		return new ResponseEntity<Pessoa>(HttpStatus.NO_CONTENT);
	}
}
