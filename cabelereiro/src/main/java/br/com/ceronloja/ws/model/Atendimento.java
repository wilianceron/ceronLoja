package br.com.ceronloja.ws.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Atendimento {

	@Id
	@GeneratedValue
	private Long id;
	
	private Pessoa vendedor;
	private Servico servico;
	
	private List<ItemExecucao> itemExecucao;
	
	public Pessoa getVendedor() {
		return vendedor;
	}

	public void setVendedor(Pessoa vendedor) {
		this.vendedor = vendedor;
	}

	public Servico getServico() {
		return servico;
	}

	public void setServico(Servico servico) {
		this.servico = servico;
	}

	public List<ItemExecucao> getItemExecucao() {
		return itemExecucao;
	}

	public void setItemExecucao(List<ItemExecucao> itemExecucao) {
		this.itemExecucao = itemExecucao;
	}
	
	
}
