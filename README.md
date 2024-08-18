# Gerenciamento de Ativos em Estrutura de Árvore

## Visão Geral

Este projeto é uma Aplicação em Estrutura de Árvore desenvolvida para exibir a hierarquia dos ativos de uma empresa, incluindo locais, ativos e componentes. A aplicação permite que os usuários explorem e gerenciem os ativos de forma eficiente por meio de uma estrutura de árvore dinâmica.

## Funcionalidades

### Visualização Dinâmica em Árvore

- Exibe uma estrutura hierárquica de locais, ativos e componentes.

### Capacidades de Filtragem

- **Pesquisa por Texto**: Permite a busca por componentes, ativos ou locais específicos dentro da árvore.
- **Sensores de Energia**: Filtra e isola sensores de energia na árvore.
- **Status Crítico do Sensor**: Destaca os ativos com status crítico dos sensores.

### Design Responsivo

- A aplicação é adaptável a diferentes tamanhos de tela, garantindo uma experiência de usuário otimizada.

## Estrutura do Projeto

A aplicação é estruturada em torno de três entidades principais:

1. **Locais/Sub-Locais**

   - Representam os locais onde os ativos estão situados.
   - Podem conter sub-locais para manter a hierarquia organizada.

2. **Ativos/Sub-Ativos**

   - Representam ativos dentro de um local.
   - Podem conter sub-ativos ou componentes.

3. **Componentes**
   - São partes constituintes de um ativo.
   - Podem estar vinculados a ativos ou locais.

## Exemplo de Estrutura

```plaintext
- Raiz
  ├── Local A
  │   ├── Ativo 1
  │   │   ├── Componente A1
  │   │   ├── Componente A2
  │   ├── Ativo 2
  │       ├── Componente B1
  │       ├── Componente B2
  ├── Local B
  │   ├── Sub-Local C
  │   │   ├── Ativo 3
  │   │   │   ├── Componente C1
  │   │   │   ├── Componente C2
  │   │   ├── Componente D1
  └── Componente X
```

## Design

[Link para o Figma](https://www.figma.com/file/F52Yv8RmGoGOYcV9CiuIZ1/%5BCareers%5D-Frontend-Challenge-v2?type=design&node-id=0-1&mode=design&t=r3n2A4W0ZFUwVjAs-0)

## API de Demonstração

A API suporta apenas requisições GET e possui os seguintes endpoints:

- `/companies` - Retorna todas as empresas.
- `/companies/:companyId/locations` - Retorna todos os locais da empresa.
- `/companies/:companyId/assets` - Retorna todos os ativos da empresa.

API: [fake-api.tractian.com](https://fake-api.tractian.com)
