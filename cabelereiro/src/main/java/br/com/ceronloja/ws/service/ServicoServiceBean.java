package br.com.ceronloja.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.ceronloja.ws.PessoaBean;
import br.com.ceronloja.ws.model.Pessoa;
import br.com.ceronloja.ws.repository.PessoaRepository;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class ServicoServiceBean implements ServicoService {

	@Autowired
	private PessoaRepository repository;
	
	@Override
	public Collection<Pessoa> findAll() {
		return repository.findAll();
	}

	@Override
	public Pessoa findOne(Long id) {
		return repository.findOne(id);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, readOnly = true)
	public Pessoa create(PessoaBean personBean) {
		if(personBean.id != null)
			return null;
		
		Pessoa person = new Pessoa(personBean);
		return repository.save(person);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public Pessoa update(Pessoa person) {
		Pessoa personPersistida = findOne(person.getId());
		if(personPersistida == null)
			return null;
		
		return repository.save(person);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public void delete(Long id) {
		repository.delete(id);
	}

	@Override
	public Pessoa findByName(String name) {
		return repository.findByName(name);
	}

}
