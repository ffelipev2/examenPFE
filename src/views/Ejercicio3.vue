<template>
    <div class="container">
        <h1>Carrito de compras</h1>

        <!-- Lista de productos -->
        <ul v-for="product in products" :key="product.id">
            <li class="product-item">
                <img :src="`src/assets/img/product-${product.id}.jpg`" alt="Imagen del producto" />
                <div class="product-info">
                    <span>{{ product.name }} - Precio $: {{ product.price }}</span>
                    <button @click="addToCart(product)" class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        Agregar al carrito
                    </button>
                </div>
            </li>
        </ul>

        <hr />

        <h2>Productos en el carrito</h2>

        <!-- Lista de productos en el carrito -->
        <ul v-for="item in cart" :key="item.product.id">
            <li class="cart-item">
                <img :src="`src/assets/img/product-${item.product.id}.jpg`" alt="Imagen del producto" />
                <div class="cart-info">
                    <span>{{ item.product.name }} - Cantidad: {{ item.quantity }}</span>
                    <button @click="removeFromCart(item)" class="remove-from-cart-btn">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        Remover del carrito
                    </button>
                </div>
            </li>
        </ul>

        <hr />

        <!-- Total a pagar -->
        <p class="total-label">Total a pagar: {{ total }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    {id: 1, name: 'Frutillas', price: 10},
                    {id: 2, name: 'Durazno', price: 15},
                    {id: 3, name: 'Sandía', price: 20}
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
                    if (cartItem.quantity < 3) {
                        cartItem.quantity++;
                    } else {
                        alert("¡No puedes agregar más de 3 unidades de este producto!");
                    }
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
    .container {
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .product-item,
    .cart-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    .product-info,
    .cart-info {
        flex: 1;
    }

    .add-to-cart-btn,
    .remove-from-cart-btn {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .add-to-cart-btn i,
    .remove-from-cart-btn i {
        margin-right: 10px;
    }

    .total-label {
        font-weight: bold;
        font-size: 20px;
        margin-top: 20px;
    }
</style>
