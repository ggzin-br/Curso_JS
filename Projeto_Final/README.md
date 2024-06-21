# Calculadora Financeira

## Tecnologias

A calculadora em questão foi feita baseada nas tecnologias Web como JavaScript, HTML/CSS e subtecnologias. Foi implementado um simulador de Assembly para cálculos matemáticos genéricos, calculador de juros compostos/simples e, média simples.

* AJAX
* Bootstrap
* JQuery
* LocalStorage (Com JSON)
* DOM

## PseudoAssembly

###
<b>Funções</b>
- MOV
- ADD 
- MULT
- DIV 
- SUB
- SQRT

### Sintaxe
<b>Exemplo:</b>
```
VAR a 10;
VAR b 3.16;
VAR c 1.5;

MOV b c;

MULT a b;

RET a;
```
> Resultado: 15


## Calculador de Juros (Composto/Simples)

###
<b>Funções</b>
- Cálculo do Montante
###

### Sintaxe
<b>Exemplo:</b>
Capital (R$) ` 2500 `\
Taxa (%) ` 10 `\
Tempo ` 12 `
> Simples = 5500\
> Composto = 7846.07


## Média Aritmética

###
<b>Funções</b>
- Média Simples de N termos
###

### Sintaxe
<b>Exemplo:</b>
Valores (A B C ...) ` 10 15 1 3 `\
Quantidade ` 4 `
> Resultado = 7.25


## Histórico

### Descrição

Depois de realizar alguns cálculos é salvo o histórico contendo o resultado e os operandos. Ele é dividido por tags `<h2>` em:

###
<b>Divisões</b>
* JS: Juros Simples
* JC: Juros Compostos
* M: Média
* CALC: Assembly

###
<b>Exemplo:<b>
~~~html
<table>
    <tbody>
        <h2>CALC</h2>
        <tr>
            <td>VAR a 10;VAR b 3.16;VAR c 1.5;MOV b c;MULT a b;RET a;</td>
            <td>15</td>
        </tr>
        <h2>JC</h2>
        <tr>
            <td>2500,10,12</td>
            <td>7846.07</td>
        </tr>
        <h2>JS</h2>
        <tr>
            <td>2500,10,12</td>
            <td>5500</td>
        </tr>
        <tr>
            <td>2500,10,12</td>
            <td>5500</td>
        </tr>
        <h2>M</h2>
        <tr>
            <td>10 15 1 3,4</td>
            <td>7.25</td>
        </tr>
        <tr>
            <td>10 15 1 3,4</td>
            <td>7.25</td>
        </tr>
    </tbody>
</table>