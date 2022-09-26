import {defineTezConfig } from "@tezjs/vite"
import { routeModule } from '@tezjs/route'
export default defineTezConfig({
    client:{
        imports:['/assets/quasar.sass']
    },
    modules:[routeModule]
})