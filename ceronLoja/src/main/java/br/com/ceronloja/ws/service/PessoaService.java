package br.com.ceronloja.ws.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import br.com.ceronloja.ws.PessoaBean;
import br.com.ceronloja.ws.model.Pessoa;

@Service
public interface PessoaService {

	Collection<Pessoa> findAll();
	
	Pessoa findOne(Long id);
	
	Pessoa create(PessoaBean pessoa);
	
	Pessoa update(Pessoa pessoa);
	
	void delete(Long id);
}
