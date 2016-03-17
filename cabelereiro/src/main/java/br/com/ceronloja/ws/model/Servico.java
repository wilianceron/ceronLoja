package br.com.ceronloja.ws.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import br.com.ceronloja.ws.ServicoBean;

@Entity
public class Servico {

	@Id
	@GeneratedValue
	private Long id;
	
	private String descricao;
	
	private List<Item> items;
	
	public Servico() {
	}
	
	public Servico(ServicoBean servicoBean) {
		this.setDescricao(servicoBean.descricao);
		this.items = Item.convert(servicoBean.items);
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
}
