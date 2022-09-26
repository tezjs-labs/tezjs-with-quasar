# TezJS with Quasar 
- Quasar is an MIT licensed open-source Vue.js-based framework, which allows you as a web developer to quickly create responsive++ websites/apps in many flavors
- Create a tezjs project
```
npm create tez@latest
```
- Install the following packages with below mentioned command
```
npm i quasar @quasar/extras 
npm i sass@1.32.12 sass-loader@12.0.0 vue-cli-plugin-quasar --save-dev
```
-   Now add it as a plugin, make a `plugins` directory and add `index.ts` inside it and add the below code
```
/plugins/index.ts
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
export default function(vue:any){
    vue.use(Quasar) 
}   
```
- Create `quasar.sass` file in `assets/` folder 
- Import the following in the `quasar.sass` file
```
/assets/quasar.sass
@import './quasar.variables.sass'
@import './../node_modules/quasar/dist/quasar.sass'
```
- Create `quasar.variables.sass` file in `assets/` folder 
- Add following code in `quasar.variables.sass` file
```
/assets/quasar.variables.sass
$primary   : #b3318c
$secondary : #26A69A
$accent    : #9C27B0
$dark      : #1D1D1D
$positive  : #21BA45
$negative  : #C10015
$info      : #31CCEC
$warning   : #F2C037
```
- To work with `quasar.sass`, import the below code in the `tez.config.ts` file
```
/tez.config.ts
import {defineTezConfig } from "@tezjs/vite"
import { routeModule } from '@tezjs/route'
export default defineTezConfig({
    client:{
        imports:['/assets/quasar.sass']
    },
    modules:[routeModule]
})
```
- It's done with tezjs. Now, you can use it inside your project.
- **Note**: Refer [Quasar](https://quasar.dev/) docs for more details about quasar.