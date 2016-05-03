package br.com.ftc;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.ceronloja.CeronLojaApplication;

import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CeronLojaApplication.class)
@WebAppConfiguration
public class FtcApplicationTests {

	@Test
	public void contextLoads() {
	}

}
