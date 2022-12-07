<template>
  <li>
    <v-card variant="outlined">
        <v-card-title style="word-break: break-word" class="d-flex justify-center text-wrap">
            {{message}}
        </v-card-title>
        <v-card-subtitle class="d-flex justify-center">
            <h4>{{health}} <font-awesome-icon icon="fa-solid fa-heart-pulse" /> </h4>
        </v-card-subtitle>
        <v-card-options class="d-flex justify-center">
            <v-btn @click="damage" :disabled="isLoading" color="primary" text>Damage</v-btn>
            <v-btn @click="heal" :disabled="isLoading" color="primary" text>Heal</v-btn>
        </v-card-options>
    </v-card>
  </li>
</template>

<script>
export default {
    name: 'EntryItem',
    props: {
        id:{
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        health: {
            type: Number,
            required: true
        },
        isLoading: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        damage(){
            this.$emit('damage', this.id);
            console.log('damage', this.id);
        },
        heal(){
            this.$emit('heal', this.id)
        }
    },
    emts: ['damage', 'heal']
}
</script>

<style>

</style>