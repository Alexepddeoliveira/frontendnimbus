# Projeto Nimbus Meteorologia
**Sobre a empresa:**

Empresa do Rio de Janeiro que foi formada durante a pandemia, possui parceria com centro de operações Rio e monitora pontos de obras por todo território brasileiro e as chuvas para identificar pontos de melhoria. Atuam em todo território brasileiro.

**Como é a plataforma:** 

Absorve dados meteorológicos por radar em tempo real, dados de raios e estações que fazem monitoramento de chuva, assim como dados de obras (cronograma, localização etc. Exibe também previsão do tempo de até 15 dias. Cliente alvo é a defesa civil, rio de Janeiro, são Paulo e Curitiba, e o produto é vendido para empresas, engenheiros e funcionários de campo utilizam o celular para acessar a plataforma, modelo de assinatura mensal dependendo no número de funcionários e acessos.

**O site:**

**CronosCity:**
Previsão personalizada por área, alertas de deslocamento e tempestades em tempo real, e históricos de dados disponíveis para exportação para relatórios e laudos

**Qual o objetivo do display do histórico de dados:**

O histórico de dados é recuperado através de uma API e exportados no formato de arquivo de tabela.
Fluxo de dados ocorre o tempo todo, existem clientes que trabalham 24hrs por dia, outros durante horário comercial. Algumas empresas de engenharia procuram para saber se durante uma janela de tempo ocorrerá obras, tempestades etc. Ou seja, para saber se a condição meteorológica estará positiva.

# Proposta:

Criar uma página mais robusta, que disponibilize os seguintes formatos: 
* Tabelas
*	Gráficos(informações)
*	Marcadores

Os dados são buscados por: **Início e Fim, Variáveis, frequência (ex:cada 24hrs), estação ou ponto de monitoramento e operação**

**Criação do layout completo, podendo inovar, mas seguindo os seguintes requisitos:**

* Botões para exportação pura CSV, PDF e PNG
* Interação entre os componentes
* Mapa interativo com marcadores (cores dinâmicas baseadas em critérios), para cada ponto de monitoramento ou estação. Desenhar um retângulo (selecionar uma área) e saber que estações estão na área e passar uma lista de identificadores para a API.
* Gráficos esteticamente otimizados, que possuem os seguintes dados: Velocidade do vento, rajada de vento e direção do vento. Ser responsivo, podem selecionar quais dados quer mostrar no momento. O eixo se adapta dependendo da frequência que o usuário selecionou.
* Em relação a tabela, melhorar sua visualização com propostas novas de layout, além da opção de exporta-la. O problema é que ela não é exibida no site, eles utilizam Excel.
* Adaptação para mobile, no celular deve conseguir utilizar de maneira prática (como fazer movimento de pinça no mapa)

*Observações:*

Formato de dados que iremos receber será arquivo json que possuirão dados de forma estruturada, estações tem diferentes variáveis, sendo uma lista bastante extensa que muda de acordo com as estações.
- End point = endereço da API, cada entrada ou saída da API é um end point.
- Hoje não possui uma tabela no banco de dados das variáveis, eles possuem variáveis que não tem muita demanda. 
- Documentação é pelo GITHUB, a parte da API tem mais documentação que front end.

