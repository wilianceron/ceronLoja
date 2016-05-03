package br.com.ceronloja.ws.service;

import java.util.Collection;

import br.com.ceronloja.ws.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.ceronloja.ws.ProdutoBean;
import br.com.ceronloja.ws.repository.ProdutoRepository;

@Service
@Transactional(propagation = Propagation.SUPPORTS,
			      readOnly = true)
public class ProdutoServiceBean implements ProdutoService {

	@Autowired
	private ProdutoRepository repository;
	
	@Override
	public Collection<Produto> findAll() {
		return repository.findAll();
	}

	@Override
	public Produto findOne(Long id) {
		return repository.findOne(id);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, readOnly = true)
	public Produto create(ProdutoBean produtoBean) {
		if(produtoBean.id != null)
			return null;
		
		Produto produto = new Produto(produtoBean);
		return repository.save(produto);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public Produto update(Produto produto) {
		Produto produtoPersistida = findOne(produto.getId());
		if(produtoPersistida == null)
			return null;
		
		return repository.save(produto);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED,
	  readOnly = true)
	public void delete(Long id) {
		repository.delete(id);
	}

}
