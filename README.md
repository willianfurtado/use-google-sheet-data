# Componente que retorna cotações usando React-Native + Google Scripts + Google Sheets

## Descrição das tecnologias
 - Google Apps Script é uma plataforma de script desenvolvida pelo Google para desenvolvimento de aplicativos leves na plataforma Google Workspace.
 - O Google Sheets é um programa de planilhas incluído como parte do pacote gratuito de Editores de Documentos Google baseado na Web oferecido pelo Google. 

## Descrição do funcionamento 
 - Este componente retorna a cotação do milho, soja, boi gordo e dólar.
 - Utilizando o Google Apps Script, foi desenvolvido um script que fará o scraping das cotações. 
 - Após conseguir realizar a requisição, o script salva os valores das cotações dentro de uma planilha no Google Sheets.
 - Só então o componente faz uma requisição para essa planilha que contém as cotações. 

 - Planilha que contém as cotações

 ![Resultado obtido no app React-Native](assets/planilha.png)


## Como instalar o componente?
```js
   npm install use-google-sheet-data
```


## Realizando a importação
```js
   import useGoogleSheetData from 'use-google-sheet-data/App';
```


## Exemplo de utilização do componente:

```js
    import { StatusBar } from 'expo-status-bar';
    import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
    import { useEffect } from 'react';
    import useGoogleSheetData from 'use-google-sheet-data/App';

    export default function App() {
    const API_KEY = "AIzaSyD36C-k9xtxWnkzTv5RxZIf-rqyAtLWed4";
    const SPREADSHEET_ID = "1ND0uPKjC1WQYCZJoxAtD-A4f1zMqijXw6z36Cs-8hhc";
    const RANGE = "Preços!A1:B10"; 

    const { data } = useGoogleSheetData(API_KEY, SPREADSHEET_ID, RANGE);

    useEffect(() => {
        console.log("Dados da planilha:", data);
    }, [data]);
    
    return (
        <View style={styles.container}>
        <Text>Olá </Text>
        </View>
    );
    }
```


## Parâmetros do componente
 - API_KEY: chave de API que deve ser gerada no console do Google
 - SPREADSHEET_ID: é o ID da planilha
 - RANGE: intervalo das células da planilha

 OBS: Como a planilha já está criada, fica de recomendação utilizar o SPREADSHEET_ID e o range que foi passado no exemplo, pois são os links da planilha que contém as cotações. Já em relação à API_KEY, uma nova pode ser gerada ou pode ser usada essa do exemplo.


## Retorno do componente
 - Dentro do componente é retornado um objeto: 
    ```js
        return { data, error };
    ```

 - Isso significa que o useGoogleSheetData retorna algo assim: 
    ```js
        {
            data: [...],
            error: null
        }
    ```

 - Quando usamos precisamos fazer uma desestruturação:
    ```js
        const { data } = useGoogleSheetData(...);
    ```

 - No terminal espera-se algo assim: 

 ![Resultado obtido no terminal](assets/terminal.png)


## Link da planilha que contém os valores das cotações:
 - Link: https://docs.google.com/spreadsheets/d/1ND0uPKjC1WQYCZJoxAtD-A4f1zMqijXw6z36Cs-8hhc/edit?usp=sharing

## Como acessar o script que faz o scraping?
 - Para acessar o script, o primeiro passo é acessar a planilha pelo link disponibilizado no item acima.
 - Após isso, no menu de funcionalidades, é preciso acessar Extensões->AppsScript.






