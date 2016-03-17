package br.com.ceronloja.ws.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import br.com.ceronloja.ws.PessoaBean;
import br.com.ceronloja.ws.model.Pessoa;

@Service
public interface PessoaService {

	Collection<Pessoa> findAll();
	
	Pessoa findOne(Long id);
	
	Pessoa findByName(String name);
	
	Pessoa create(PessoaBean person);
	
	Pessoa update(Pessoa person);
	
	void delete(Long id);
}
