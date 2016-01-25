package br.com.ceronloja.ws.model;

import java.util.Date;

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
	private String cpf;
	private String sexo;
	private String email;
	
	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Date getDataAniversario() {
		return dataAniversario;
	}

	public void setDataAniversario(Date dataAniversario) {
		this.dataAniversario = dataAniversario;
	}

	private Date dataAniversario;
	
	public Pessoa() {
	}

	public Pessoa(PessoaBean pessoaBean) {
		this.nome = pessoaBean.nome;
		this.email = pessoaBean.email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
