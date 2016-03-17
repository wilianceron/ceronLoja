package br.com.ceronloja.ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import br.com.ceronloja.ws.PessoaBean;

@Entity
public class Pessoa {

	@Id
	@GeneratedValue
	private Long id;
	
	private String nome;
	private String email;
	
	public Pessoa() {
	}
	
	public Pessoa(PessoaBean pessoaBean) {
		this.nome = pessoaBean.name;
		this.email = pessoaBean.email;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return nome;
	}
	
	public void setName(String name) {
		this.nome = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
}
