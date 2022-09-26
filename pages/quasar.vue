<template lang="">
    <div>
        <div class="row justify-center ">
            <div class="col-md-10 col-lg-9 col-xl-8 col-sm-11 col-12 q-pt-lg q-pb-lg ">
                <h3 class="text-center font-bold text-5xl">Enjoy your tasty food with amazing restaurents</h3>
                <div class="row q-pl-xl q-pr-xl">
                    <div class="col-12 col-md-6 col-lg-4 q-mt-lg q-pl-md q-pr-md justify-between" v-for= "product of products" :key="product.id">
                          <q-intersection v-for="index in 1" :key="index" transition="flip-right" class="example-item">
                            <q-card class="my-card">
                                <img height="200" class="img-fluid" :src="(`${product.ImageUrl}`)" alt="image"/>
                                <q-card-section>
                                <q-btn
                                    fab
                                    color="primary"
                                    icon="place"
                                    class="absolute"
                                    style="top: 0; right: 12px; transform: translateY(-50%);"
                                />

                                <div class="row no-wrap items-center">
                                    <div class="col text-h6 ellipsis">
                                    {{product.Name}}
                                    </div>
                                    <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                                    <q-icon name="place" />
                                    250 ft
                                    </div>
                                </div>

                                <q-rating s:max="5" v-model="stars" size="32px" />
                                </q-card-section>

                                <q-card-section class="q-pt-none">
                                <div class="text-subtitle1">
                                    {{product.Price}}
                                </div>
                                <div class="text-caption text-grey">
                                    {{product.Discription}}
                                </div>
                                </q-card-section>

                                <q-separator />

                                <q-card-actions>
                                <q-btn flat round icon="event" />
                                <q-btn flat color="primary">
                                    Reserve
                                </q-btn>
                                </q-card-actions>
                            </q-card>
                        </q-intersection>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    layoutName:'default',
     setup () {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  },
  data(){
        return{
        products:  [
            {Name:"McDonald's",Discription:'Fast Food, Burger,Bevera...',Price:'₹79 for one',ImageUrl:'https://b.zmtcdn.com/data/pictures/chains/1/110271/98f61bae7f08ccd13f1522c72700c536_o2_featured_v2.jpg?output-format=webp'},
            {Name:'Pizza Hut',Discription:'Pizza,Fast Food, Pasta, Fri...',Price:'₹150 for one',ImageUrl:'https://b.zmtcdn.com/data/pictures/chains/6/110316/c708fcdb888abd4f493c0fdc67ac766e_o2_featured_v2.jpg?output-format=webp'},
            {Name:'Burger King',Discription:'Burger, Fast Food, Desserts, Bev...',Price:'₹60 for one',ImageUrl:'https://b.zmtcdn.com/data/pictures/chains/2/18549832/1edc341a1cb0b7bd57c812b93e6ce333_o2_featured_v2.jpg?output-format=webp'},
            {Name:'Hocco Eatery',Discription:'North Indian, Fast Food, Pizza...',Price:'₹180 for one',ImageUrl:'https://b.zmtcdn.com/data/pictures/chains/5/110155/53f46f3c1ba67002bfc583883bc73dba_o2_featured_v2.jpg'},
            {Name:'The Belgian Waffle Co.',Discription:'Waffle, Pancake, Desserts ...',Price:'₹100 for one',ImageUrl:'https://b.zmtcdn.com/data/pictures/chains/1/18543621/79aee586ce52810ecb2e32236a6a04d8_o2_featured_v2.jpg'},
            {Name:'New Freeze Land',Discription:'Sandwich, Pizza, Fast Food, Street...',Price:'₹200 for one',ImageUrl:'https://b.zmtcdn.com/data/pictures/8/18173198/a19c386ba8b3e447f4a7f67526ac7163_o2_featured_v2.jpg'}
        ],
        stars:0
        }
    }
}
</script>
<style lang="css">
    .border{
        border: 1px solid black;
    }
</style>