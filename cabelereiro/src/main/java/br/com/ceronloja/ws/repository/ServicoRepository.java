package br.com.ceronloja.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ceronloja.ws.model.Servico;

@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {
	
}
