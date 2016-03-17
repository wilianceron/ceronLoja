package br.com.ceronloja.ws.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import br.com.ceronloja.ws.ItemBean;

@Entity
public class Item {
	
	@Id
	@GeneratedValue
	private String id;
	
	private String nome;
	
	public Item(ItemBean itemBean) {
		this.id = itemBean.id;
		this.nome = itemBean.name;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public static List<Item> convert(ItemBean[] items) {
		return new ArrayList<>();
	}
	
	
	

}
