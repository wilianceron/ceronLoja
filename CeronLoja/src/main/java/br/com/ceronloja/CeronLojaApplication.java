package br.com.ceronloja;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@SpringBootApplication
public class CeronLojaApplication {

    public static void main(String[] args) {
        SpringApplication.run(CeronLojaApplication.class, args);
    }
}
