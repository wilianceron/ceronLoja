package br.com.ceronloja.ws.model;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class ItemExecucao {

	@Id
	@GeneratedValue
	private Long id;
	
	private Pessoa executor;
	
	private Item item;

	public Pessoa getExecutor() {
		return executor;
	}

	public void setExecutor(Pessoa executor) {
		this.executor = executor;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	} 
	
	
}
