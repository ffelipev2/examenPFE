<template>
    <div id="app" class="container mt-5">
        <h1>Carrito de Compras</h1>

        <!-- Lista de productos -->
        <ul v-for="product in products" :key="product.id">
            <li>{{ product.name }} - {{ product.price }}</li>
            <button @click="addToCart(product)" class="btn btn-primary">Agregar al Carrito</button>
        </ul>

        <hr />

        <h2>Productos en el Carrito</h2>

        <!-- Lista de productos en el carrito -->
        <ul v-for="item in cart" :key="item.product.id">
            <li>{{ item.product.name }} - {{ item.quantity }}</li>
            <button @click="removeFromCart(item)" class="btn btn-danger">Remover del Carrito</button>
        </ul>

        <hr />

        <!-- Total del carrito -->
        <p>Total: {{ total }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    {id: 1, name: 'Producto A', price: 10},
                    {id: 2, name: 'Producto B', price: 15},
                    {id: 3, name: 'Producto C', price: 20}
                ],
                cart: [],
            };
        },
        computed: {
            total() {
                return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
            }
        },
        methods: {
            addToCart(product) {
                let cartItem = this.cart.find(item => item.product.id === product.id);
                if (cartItem) {
                    cartItem.quantity++;
                } else {
                    this.cart.push({product: product, quantity: 1});
                }
            },
            removeFromCart(item) {
                let index = this.cart.indexOf(item);
                if (index !== -1) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        this.cart.splice(index, 1);
                    }
                }
            }
        }
    };
</script>

<style scoped>
    /* Estilos específicos del componente */
    ul {
        list-style-type: none;
        padding: 0;
    }
    button {
        margin-left: 10px;
    }
</style>
