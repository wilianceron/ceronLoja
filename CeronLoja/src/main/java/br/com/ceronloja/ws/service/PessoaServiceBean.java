package br.com.ceronloja.ws.service;

import br.com.ceronloja.ws.PessoaBean;
import br.com.ceronloja.ws.ProdutoBean;
import br.com.ceronloja.ws.model.Pessoa;
import br.com.ceronloja.ws.model.Produto;
import br.com.ceronloja.ws.repository.PessoaRepository;
import br.com.ceronloja.ws.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
@Transactional(propagation = Propagation.SUPPORTS,
			      readOnly = true)
public class PessoaServiceBean implements PessoaService {

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
	public Pessoa create(PessoaBean pessoaBean) {
		if(pessoaBean.id != null)
			return null;
		
		Pessoa pessoa = new Pessoa(pessoaBean);
		return repository.save(pessoa);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public Pessoa update(Pessoa pessoa) {
		Pessoa pessoaPersistida = findOne(pessoa.getId());
		if(pessoaPersistida == null)
			return null;
		
		return repository.save(pessoa);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public void delete(Long id) {
		repository.delete(id);
	}

}
