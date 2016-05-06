package br.com.ceronloja.ws.service;

import br.com.ceronloja.ws.PessoaBean;
import br.com.ceronloja.ws.ProdutoBean;
import br.com.ceronloja.ws.model.Pessoa;
import br.com.ceronloja.ws.model.Produto;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public interface PessoaService {

	Collection<Pessoa> findAll();
	
	Pessoa findOne(Long id);

	Pessoa create(PessoaBean pessoaBean);
	
	Pessoa update(Pessoa pessoa);
	
	void delete(Long id);
}
