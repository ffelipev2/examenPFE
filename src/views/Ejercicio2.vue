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
        <ul v-if="cart.length > 0">
            <li v-for="item in cart" :key="item.product.id" class="cart-item">
                <div class="cart-item-info">
                    <span>{{ item.product.name }}</span>
                    <span>Cantidad: {{ item.quantity }}</span>
                </div>
                <div>
                    <button @click="removeFromCart(item)" class="btn btn-danger">Remover</button>
                </div>
            </li>
        </ul>
        <p v-else class="empty-cart-message">No hay productos en el carrito.</p>

        <hr />

        <!-- Total del carrito -->
        <p class="total-label">Total: {{ total }}</p>
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
                cart: []
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
    #app {
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }

    h1, h2 {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
        color: #333;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn {
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-primary {
        background-color: #007bff;
        color: white;
        border: none;
    }

    .btn-danger {
        background-color: #dc3545;
        color: white;
        border: none;
    }

    .empty-cart-message {
        font-style: italic;
        color: gray;
    }

    .total-label {
        font-weight: bold;
        font-size: 20px;
        margin-top: 20px;
    }
</style>
