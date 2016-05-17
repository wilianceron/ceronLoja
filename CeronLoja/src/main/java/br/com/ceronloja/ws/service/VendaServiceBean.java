package br.com.ceronloja.ws.service;

import br.com.ceronloja.ws.VendaBean;
import br.com.ceronloja.ws.model.Venda;

public class VendaServiceBean implements VendaService {

    public Venda novaVenda(VendaBean vendaBean) {
        Venda venda = new Venda(vendaBean);

        return venda;
    }
}
