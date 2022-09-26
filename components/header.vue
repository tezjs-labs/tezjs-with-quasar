<template>
  <div class="relative bg-white">
     
                    <div class="q-pa-md">

                        <div class="row justify-center">
                             <div class="col-md-10 col-lg-9 col-xl-8 col-sm-11 col-12 ">
                                <q-toolbar class=" border-bottom q-pb-lg">
                                    <img
                                        class=""
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        width="45" height="45"
                                        alt=""
                                    />
                                    <q-space />
                                    <q-tabs v-model="tab" shrink>
                                        <tez-link to="/" style="text-decoration:none" class="text-black"><q-tab name="tab2" label="Home" /> </tez-link>
                                        <tez-link to="/quasar" style="text-decoration:none" class="text-black"><q-tab name="tab2" label="Quasar" /> </tez-link>
                                        <a href="https://github.com/tezjs/tezjs" class="text-grey-14" style="text-decoration:none"><q-tab name="tab3" label="TezJS" /></a>
                                    </q-tabs>
                                </q-toolbar>
                            </div>
                        </div>
                    </div>
               
  </div>
</template>