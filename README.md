# 📡 Projeto Nimbus Meteorologia 

A Nimbus é uma empresa do Rio de Janeiro que foi formada durante a pandemia, possui parceria com centro de operações Rio e monitora pontos de obras por todo território brasileiro e as chuvas para identificar pontos de melhoria. Atuam em todo território brasileiro. Por meio de seu sistema, fornecem previsões, diárias e semanais, dos impactos das condições climáticas no local da obra, o que facilita o planejamento e reduz a chance de atrasos no cronograma de obras.

# 🎯 **Propósito:**

A Nimbus disponibiliza seu serviço de absorção de dados meteorológicos por radar em tempo real, dados de raios e estações que fazem monitoramento de chuva, assim como dados de obras (cronograma, localização etc.) Também entrega uma revisão personalizada por área, alertas de deslocamento e tempestades em tempo real, e históricos de dados disponíveis para exportação para relatórios e laudos em um site que será desenvolvido para facilitar a distribuição dessas informaçoes a empresas de engenharia, defesa civil ou orgãos governamentais do Rio de Janeiro, Sao Paulo e Curitiba. O objetivo é atualizar o histórico de dados da plataforma Cronos para que haja uma otimização estética em termos de desempenho, responsividade e intuitividade.

# 📋 5W2H

Perguntas | Respostas
--------------------------------|------------------------------------------------------------
**O que?** | <ol><li>O sistema é uma ferramenta que oferece uma previsão personalizada por área, alertas de deslocamento e tempestades em tempo real, e históricos de dados disponíveis para exportação para relatórios e laudos.</li><li>O projeto é para modernizar a interface do display de dados do site.</li></ol> 
**Como?** | <ol><li>O sistema absorve dados meteorológicos por radar em tempo real, dados de raios e estações que fazem monitoramento de chuva, assim como dados de obras (cronograma, localização etc).</li><li> No projeto iremos criar o novo histórico de dados utilizando git(github), VSCode, Navegador, React.js e Node.js. </li> </ol>
**Por quê?** | <ol><li> A previsão metereológica do sistema auxilia a tomada de decisão dos profissionais de campo para determinar como estará a condição climática durante o periodo de obras. </li><li> O objetivo do projeto é melhorar a UI do site, de forma que, aumente a captação de usuários e aprimore a experiência deles na plataforma. </li> </ol>
**Quando?** | <ol><li> Fluxo de dados do sistema ocorre o tempo todo, existem clientes que trabalham 24hrs por dia, outros durante horário comercial. Algumas empresas de engenharia procuram para saber se durante uma janela de tempo ocorrerá obras, tempestades etc. Ou seja, para saber se a condição meteorológica estará positiva.</li><li>O projeto será realizado durante o segundo semestre de 2023.</li> </ol>
**Quem?** | <ol><li> O sistema é utilizado pela defesa civil, órgãos governamentais do Rio de Janeiro, São Paulo e Curitiba, empresas de engenharia e profissionais de campo. </li><li> O projeto será realizado pelo grupo DedSec </li> </ol>
**Onde?** | <ol><li> O sistema é acessado nos campos de obra e escritórios de engenharia, podendo ser acessado pela plataforma WEB, https://cronos.nimbusmeteorologia.com.br/, ou ser acessado por dispositivos móveis e desktop. </li><li> O projeto será realizado no IBMEC para a disciplina de Projeto Front-End.</li> </ol>


# Requisitos Funcionais:
* [RF1] O **sistema** deve disponibilizar dados em formato de tabelas, gráficos e marcadores georreferenciados em um mapa.
* [RF2] O **sistema** deve conter requisição de dados através de um formulário de busca devendo inserir: **Início e Fim, Variáveis, frequência (ex:cada 24hrs), estação ou ponto de monitoramento e operação**
* [RF3] O **sistema** deve possuir um preenchimento de cor de acordo com critérios de criticidade.
* [RF4] O **sistema** precisa contar com um mapa interativo com marcadores para cada ponto de monitoramento e estação.
* [RF5] O **sistema** deve permitir um marcador que faça a seleção de mais de um ponto no mapa.
* [RF6] O **sistema** deve ter a possibilidade de realizar a exportação para CSV, PDF e PNG
* [RF7] O **sistema** deve permitir a interação com o gráfico
* [RF8] O **sistema** deve permitir a seleção de variáveis que serão exibidas simultaneamente.
* [RF9] O **sistema** deve permitir que o gráfico adapte a frequência temporal (eixo horizontal) e ordem de grandeza (eixo vertical) ao tipo de variável exibida.



# Requisitos Não-Funcionais:
* [RNF1] Estar disponível para o usuário 24/7;
* [RNF2] Possuir um novo layout.
* [RNF3] Ser desenvolvido com o React;
* [RNF4] Deve rodar em vários tipos de navegadores; 
* [RNF5] Estar hospedado no GitHub; 
* [RNF6] Deve possuir adaptação para mobile;
* [RNF7] Deve tratar o JSON recebido com os dados.

# 📇Casos de Uso:
<p> <strong>Nome</strong>: Exportação de Dados</p>   
 <p><strong>Atores </strong>: O usuário</p>
 <p><strong>Pré-condições</strong>: Estar logado no sistema cronos</p>
 
 <strong>Fluxo Básico</strong>:  
 
 <p>1️⃣ O usuário deve selecionar a opção " visualizar dados e variáveis meteorlógicas" do sistema</p> 
 <p>2️⃣ O sistema apresenta as opções de visualização para o usuário</p>
 <p>3️⃣ O usuário escolhe como deseja visualizar os dados</p>
 <p>4️⃣ O sistema apresenta opções para refinar os dados apresentados</p>
 <p>5️⃣ O usário escolhe as opções de modo à detalhar a apresentação de acordo com suas necessidades</p>
 <p>6️⃣ O sistema exibe os dados de acordo com as escolhas do usuário</p>
  <p>7️⃣ O sistema apresenta opções de exportação, sendo elas CSV,PDF e PNG</p>
  <p>8️⃣ O usuário escolhe como deseja exportar os dados visualizados</p>
  <p>9️⃣ O sistema exporta os dados para a máquina do usuário</p>
 <strong>Pós-condições</strong>: 
  <p>1️⃣ O arquivo é exportado para a maquina do usuário</p>
  <p>2️⃣ O sistema apresenta uma mensagem demonstrando que o arquivo foi exportado com sucesso </p>
  <p>3️⃣ A exportação é lançada no histórico do cliente</p>
 
 



# ✏️ Observações:

 * Formato de dados que iremos receber será arquivo json que possuirão dados de forma estruturada, estações tem diferentes variáveis, sendo uma lista bastante extensa que muda de acordo com as estações.
 * End point = endereço da API, cada entrada ou saída da API é um end point.
 * Hoje não possui uma tabela no banco de dados das variáveis, eles possuem variáveis que não tem muita demanda. 
 * Documentação é pelo GITHUB, a parte da API tem mais documentação que front end.

# 👤 Integrantes
 * Alex Oliveira
 * Bernardo Mascarenhas
 * Daniel Schiffino
 * Guilherme Duran Duran
 * Maria Eduarda Castello

