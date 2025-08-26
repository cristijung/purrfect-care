# Projeto PurrfectCare
## Projeto código base Angular

### Tecnologias & instalações
- Angular CLI: `npm install -g @angular/cli`
- Angular: `ng new nome-do-projeto`
- ìcones: `npm install @ng-icons/core @ng-icons/heroicons`
- Material Angular: `ng add @angular/material`

### Criação de componentes
Comando e variações:
- Componente simples: `ng g c nome-do-componente`
- Variações:
    - por extenso: `ng generate component nome-do-componente`
    - Já no diretóriod desejado: `ng c caminho/para/o/componente/nome-do-componente`
- Opções úteis:
    - `--skip-tests (ou -S):` Pula a criação do arquivo de testes (.spec.ts): ng g c meu-componente --skip-tests    
    - `--inline-template:` Coloca o HTML diretamente no arquivo .ts do componente, em vez de criar um arquivo .html separado: ng g c meu-componente --inline-template
    - `--inline-style:` Coloca os estilos CSS diretamente no arquivo .ts do componente: ng g c meu-componente --inline-style
