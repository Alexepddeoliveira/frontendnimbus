# Projeto Nimbus Meteorologia

**Propósito:**

A Nimbus disponibiliza seu serviço de absorção de dados meteorológicos por radar em tempo real, dados de raios e estações que fazem monitoramento de chuva, assim como dados de obras (cronograma, localização etc.) Também entrega uma revisão personalizada por área, alertas de deslocamento e tempestades em tempo real, e históricos de dados disponíveis para exportação para relatórios e laudos em um site que será desenvolvido para facilitar a distribuição dessas informaçoes a empresas de engenharia, defesa civil ou orgãos governamentais do Rio de Janeiro,Sao Paulo e Curitiba
# 5W2H

**O que:**

Modernizar a interface do display de dados do site.

**Como:**

Utilizando git(github), VSCode, Navegador, React.js e Node.js.

**Por quê:**

Melhorar a UI do site, de forma que, aumente a captação de usuários e aprimore a experiência deles na plataforma.

**Quando:**

Fluxo de dados ocorre o tempo todo, existem clientes que trabalham 24hrs por dia, outros durante horário comercial. Algumas empresas de engenharia procuram para saber se durante uma janela de tempo ocorrerá obras, tempestades etc. Ou seja, para saber se a condição meteorológica estará positiva.

**Quem:**

A defesa civil, órgãos governamentais do Rio de Janeiro, São Paulo e Curitiba, empresas de engenharia e profissionais de campo.

**Onde:**

No plataforma WEB, https://cronos.nimbusmeteorologia.com.br/, podendo ser acessado por dispositivos móveis e desktop.

**Quanto:** 

O projeto será voluntário.


# Requisitos Funcionais:
* [RF1] O sistema deve disponibilizar dados em formato de tabelas, gráficos e marcadores georreferenciados em um mapa.
* [RF2] O sistema deve conter requisição de dados através de um formulário de busca devendo inserir: **Início e Fim, Variáveis, frequência (ex:cada 24hrs), estação ou ponto de monitoramento e operação**
* [RF3] O sistema deve possuir um preenchimento de cor de acordo com critérios de criticidade.
* [RF4] O sistema precisa contar com um mapa interativo com marcadores para cada ponto de monitoramento e estação.
* [RF5] O marcador no mapa do sistema deve permitir a seleção de mais de um ponto.
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

