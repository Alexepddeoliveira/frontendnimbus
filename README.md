# Projeto Nimbus Meteorologia

**Propósito:**

Atualizar o histórico de dados da plataforma Cronos para que haja uma otimização estética em termos de desempenho, responsividade e intuitividade.

# 5W2H

**O que:**

Modernizar a interface do display de dados do site.

**Como:**

Utilizando git(github), VSCode, Navegador, React.js e Node.js.

**Por quê:**

Melhorar a UI do site, de forma que, aumente a captação de usuários e aprimore a experiência deles na plataforma.

**Quando:**

Ao longo do período.

**Quem:**

A defesa civil, órgãos governamentais do Rio de Janeiro, São Paulo e Curitiba, empresas de engenharia e profissionais de campo.

**Onde:**

No plataforma WEB, https://cronos.nimbusmeteorologia.com.br/, podendo ser acessado por dispositivos móveis e desktop.

**Quanto:** 

O projeto será voluntário.


# Requisitos Funcionais:
* [RF1] O sistema deve disponibilizar dados em formato de tabelas, gráficos e marcadores georreferenciados em um mapa.
* [RF2] O sistema deve conter requisição de dados através de um formulário de busca devendo inserir: **Início e Fim, Variáveis, frequência (ex:cada 24hrs), estação ou ponto de monitoramento e operação**
* [RF3] Possuir um preenchimento de cor de acordo com critérios de criticidade.
* [RF4] Criar um mapa interativo com marcadores para cada ponto de monitoramento e estação.
* [RF5] O marcador no mapa deve permitir a seleção de mais de um ponto.
* [RF6] Permitir a interação com o gráfico
* [RF7] Permitir a seleção de variáveis que serão exibidas simultaneamente.
* [RF8] Permitir que o gráfico adapte a frequência temporal (eixo horizontal) e ordem de grandeza (eixo vertical) ao tipo de variável exibida.



# Requisitos Não-Funcionais:
* [RNF1] Estar disponível para o usuário 24/7;
* [RNF2] Propor um novo layout.
* [RNF3] Ser desenvolvido com o React;
* [RNF4] Deve rodar em vários tipos de navegadores; 
* [RNF5] Estar hospedado no GitHub; 
* [RNF6] Deve possuir adaptação para mobile;



*Observações:*

Formato de dados que iremos receber será arquivo json que possuirão dados de forma estruturada, estações tem diferentes variáveis, sendo uma lista bastante extensa que muda de acordo com as estações.
- End point = endereço da API, cada entrada ou saída da API é um end point.
- Hoje não possui uma tabela no banco de dados das variáveis, eles possuem variáveis que não tem muita demanda. 
- Documentação é pelo GITHUB, a parte da API tem mais documentação que front end.

