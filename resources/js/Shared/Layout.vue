<script>
import Nav from './Nav.vue';
export default{
    components: {
        Nav,
    },

    computed: {
        username() {
            return this.$page.props.auth.user.username
        }
    }
    
}

</script>

<template>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">

                <h1 class="font-bold text-lg">My App</h1>
    
                <p class="text-sm ml-4">Welcome Back, {{ username }}</p>
            </div>
    
            <Nav/>
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <iframe class="mb-6"width="100%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/7b274140-6dc1-4bfb-b268-93ca492a1c99?dark=false"></iframe>
            <slot />
        </div>
    </section>
    

</template>