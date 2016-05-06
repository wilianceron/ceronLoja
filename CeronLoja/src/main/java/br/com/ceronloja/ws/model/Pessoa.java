package br.com.ceronloja.ws.model;

import br.com.ceronloja.ws.PessoaBean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Pessoa {

    @Id
    @GeneratedValue
    private Long id;

    private String nome;

    private String sexo;

    public Pessoa() {

    }

    public Pessoa(PessoaBean pessoaBean) {
        this.nome = pessoaBean.nome;
        this.sexo = pessoaBean.sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getSexo() {
        return sexo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
