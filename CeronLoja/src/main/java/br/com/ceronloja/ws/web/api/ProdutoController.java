package br.com.ceronloja.ws.web.api;

import java.util.Collection;

import javax.transaction.Transactional;

import br.com.ceronloja.ws.model.Produto;
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

import br.com.ceronloja.ws.ProdutoBean;
import br.com.ceronloja.ws.service.ProdutoService;

@CrossOrigin(maxAge = 3600)
@RestController
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;

	public ProdutoController() {
	}
	
	public ProdutoController(ProdutoService produtoService) {
		this.produtoService = produtoService;
	}
	
	@RequestMapping(value = "/produto",
			       method = RequestMethod.GET,
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Produto>> getPersons() {
		Collection<Produto> produtos = produtoService.findAll();
		
		return new ResponseEntity<Collection<Produto>>(produtos, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/produto/{id}",
				   method = RequestMethod.GET, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> findByName(@PathVariable("id") Long id) {
		Produto produto = produtoService.findOne(id);
		
		if(produto == null)
			return new ResponseEntity<Produto>(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Produto>(produto, HttpStatus.OK);
	}
	
	@Transactional
	@RequestMapping(value = "/produto", 
				   method = RequestMethod.POST, 
				 consumes = MediaType.APPLICATION_JSON_VALUE, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> createPerson(@RequestBody ProdutoBean person) {
		Produto produtoToSave = produtoService.create(person);
		
		return new ResponseEntity<Produto>(produtoToSave, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/persons/{id}", 
			       method = RequestMethod.PUT, 
			     consumes = MediaType.APPLICATION_JSON_VALUE, 
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> update(@RequestBody Produto produto) {
		Produto produtoUpdated = produtoService.update(produto);
		
		if(produtoUpdated == null)
			return new ResponseEntity<Produto>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<Produto>(produtoUpdated, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/produto/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> delete(@PathVariable("id") Long id, @RequestBody Produto produto) {
		produtoService.delete(id);
		
		return new ResponseEntity<Produto>(HttpStatus.NO_CONTENT);
	}
}
