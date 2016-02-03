package br.com.ceronloja.ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import br.com.ceronloja.ws.PersonBean;

@Entity
public class Person {

	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	private String email;
//	private String cpf;
//	private String sexo;
//	private Date birthday;
	
	public Person() {
	}
	
	public Person(PersonBean personBean) {
		this.name = personBean.name;
		this.email = personBean.email;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
}
