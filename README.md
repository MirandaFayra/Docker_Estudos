# 🐳 Docker

O Docker é uma ferramenta para a criação de containers (ambiente isolado), possibilitando separar o ambiente  das lógicas e configurações criadas. Com isso, permite a centralização do ambiente de desenvolvimento, produção e teste e a diminuição de possíveis erros de versionamento. Essa tecnologia baseia-se em abordagem mais granular onde as aplicações são divididas por processos.

**Há 4 estruturas principais no Docker :**

1. Imagens (Images) → Template de instruções para a criação de Containers;
2. Containers → Local onde armazena tudo que a aplicação precisa para rodar dentro desse container ou em outros containers ("um mini sistema operacional"). Eles se comunicam através de portas;
3. Redes (Networks) → Modo de gerenciamento e comunicação de dados entre containers 
4. Discos (Volumes) →

Definição de Container em sí → Forma de Virtualização que permite rodar múltiplos sistemas em um só. Dividir responsabilidades isolando os processos de cada ferramentas. Melhora a escalabilidade. Containers em produção facilita o gerenciamento por meio dos orquestradores.

Docker File → Arquivo com todas as configurações necessárias para a aplicação rodar no servidor.

Docker Hub → Biblioteca que disponibiliza imagens docker
