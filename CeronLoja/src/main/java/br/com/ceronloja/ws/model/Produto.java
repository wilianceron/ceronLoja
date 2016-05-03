package br.com.ceronloja.ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import br.com.ceronloja.ws.ProdutoBean;

@Entity
public class Produto {

	@Id
	@GeneratedValue
	private Long id;

	private String codigo;

	private String nome;

	private String tamanho;

	public Produto() {
	}

	public Produto(ProdutoBean produtoBean) {
		this.nome = produtoBean.nome;
		this.tamanho = produtoBean.tamanho;
		this.codigo = produtoBean.codigo;
	}

	public String getTamanho() {
		return tamanho;
	}

	public void setTamanho(String tamanho) {
		this.tamanho = tamanho;
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

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
}
