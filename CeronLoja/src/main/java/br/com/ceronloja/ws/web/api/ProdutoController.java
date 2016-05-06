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
	public ResponseEntity<Collection<Produto>> getProdutos() {
		Collection<Produto> produtos = produtoService.findAll();
		
		return new ResponseEntity<>(produtos, HttpStatus.OK);
	}

	@Transactional
	@RequestMapping(value = "/produto", 
				   method = RequestMethod.POST, 
				 consumes = MediaType.APPLICATION_JSON_VALUE, 
				 produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> criaProduto(@RequestBody ProdutoBean produto) {
		Produto produtoToSave = produtoService.create(produto);
		
		return new ResponseEntity<>(produtoToSave, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/produto/{id}",
			       method = RequestMethod.PUT, 
			     consumes = MediaType.APPLICATION_JSON_VALUE, 
			     produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> update(@RequestBody ProdutoBean produto) {
		Produto produtoUpdated = produtoService.update(produto);
		
		if(produtoUpdated == null)
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<>(produtoUpdated, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/produto/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Produto> delete(@PathVariable("id") Long id) {
		produtoService.delete(id);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
