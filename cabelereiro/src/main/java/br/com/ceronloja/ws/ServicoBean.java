package br.com.ceronloja.ws;

import java.io.Serializable;

@SuppressWarnings("serial")
public class ServicoBean implements Serializable {

	public String id;
	public String descricao;
	public ItemBean[] items;
	
}
