<h1 align="center">
    <img alt="Desafio CIC" title="Desafio CIC" src=".github/cic-logo.png" width="250px" />
</h1>
<h1 align="center">
    <a href="https://teste-cic.netlify.app/">
    <img alt="Desafio Cic" title="Demo" src="https://api.netlify.com/api/v1/badges/705d1f5f-b560-47c6-887a-5230713cf937/deploy-status" />
    </a>
  </a>
</h1>
<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunobach/cic">
	
  <a href="https://www.linkedin.com/in/bruno-bach/">
    <img alt="Made by Bruno Bach" src="https://img.shields.io/badge/made%20by-brunobach-%2304D361">
  </a>
  
  <a href="https://github.com/brunobach/cic/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunobach/cic">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/brunobach/cic/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/brunobach/cic?style=social">
  </a>
</p>

## Funcionalidades
- :heavy_check_mark: Exibir todas as editoras junto com a média de avaliação dos seus livros : Funcionalidade Disponível ao Clicar sobre a Seta de Rolagem para baixo.

- :heavy_check_mark: Possibilidade de filtrar pelo nome da editora : Funcionalidade Disponível no Header da Tabela de todas as editoras.
:heavy_check_mark: Possibilidade de ordenar pelas editoras mais bem avaliadas : Ao clicar sobre o Header da tabela reorganizará os itens.

- :heavy_check_mark: Possibilidade de filtrar pelo título e nome da editora : Com o input de pesquisa é possivel realizar a pesquisa do título do livro.

- :heavy_check_mark: Possibilidade de ordenar pela média de avaliação ou pela data de
publicação : Ao selecionar a tabela de todos os livros é possível ordenar da maneira que desejar.


> Verificado que a API fornecida está com CORS (https://teste-cic.netlify.app/ has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. foi necessario subir uma aplicaçao no Heroku de Cors-anywhere para Acesso da mesma pelo Netlify)


| Check | Descriçao | Tecnologias |
|:---:|---------|:-----------:|
| :heavy_check_mark: |Teste CIC| ![npm](https://img.shields.io/npm/v/react?color=green&label=React&logo=react)  ![npm](https://img.shields.io/npm/v/typescript?color=blue&label=Typescript&logo=typescript&logoColor=blue) ![npm](https://img.shields.io/npm/v/styled-components?color=purple&label=styled-components&logo=styled-components&logoColor=purple)  |


To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

From your command line:

### Install API 

```bash
# Clone this repository
$ git clone https://github.com/brunobach/cic

# Go into the repository
$ cd cic

# Install dependencies
$ yarn

# Start server
$ yarn start

# running on port 3000
```



## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/brunobach/ecoleta/blob/master/LICENSE) for details.
