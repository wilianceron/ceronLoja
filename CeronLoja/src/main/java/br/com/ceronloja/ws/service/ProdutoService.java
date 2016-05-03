package br.com.ceronloja.ws.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import br.com.ceronloja.ws.ProdutoBean;
import br.com.ceronloja.ws.model.Produto;

@Service
public interface ProdutoService {

	Collection<Produto> findAll();
	
	Produto findOne(Long id);

	Produto create(ProdutoBean produtoBean);
	
	Produto update(Produto produto);
	
	void delete(Long id);
}
