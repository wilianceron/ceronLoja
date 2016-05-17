package br.com.ceronloja.ws.model;

import br.com.ceronloja.ws.ProdutoBean;
import br.com.ceronloja.ws.VendaBean;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Venda {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "VENDA_PRODUTO", joinColumns = {
            @JoinColumn(name = "VENDA_ID") },
            inverseJoinColumns = { @JoinColumn(name = "PRODUTO_ID") })
    private List<Produto> produtos;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "venda")


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PESSOA_ID", nullable = false)
    private Pessoa pessoa;

    public Venda(VendaBean vendaBean) {
        if(produtos == null)
            produtos = new ArrayList<>();

        for (ProdutoBean produtoBean : vendaBean.produtos) {
            produtos.add(new Produto(produtoBean));
        }

        this.pessoa = new Pessoa(vendaBean.pessoa);

    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }
}
