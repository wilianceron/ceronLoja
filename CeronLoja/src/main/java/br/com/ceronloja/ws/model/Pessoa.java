package br.com.ceronloja.ws.model;

import br.com.ceronloja.ws.PessoaBean;

import javax.persistence.*;
import java.util.List;

@Entity
public class Pessoa {

    @Id
    @GeneratedValue
    private Long id;

    private String nome;

    private String sexo;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pessoa")
    private List<Venda> vendas;

    public Pessoa() {

    }

    public Pessoa(PessoaBean pessoaBean) {
        this.nome = pessoaBean.nome;
        this.sexo = pessoaBean.sexo;
    }

    public List<Venda> getVendas() {
        return vendas;
    }

    public void setVendas(List<Venda> vendas) {
        this.vendas = vendas;
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
