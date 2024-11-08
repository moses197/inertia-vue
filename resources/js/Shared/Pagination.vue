<script>

    export default{
        props: {
            links: Array
        }
    }
</script>

<template>
        <div>
        <component :is="link.url ? 'Link' : 'span'" v-for="link in links" :href="link.url" v-html="link.label" class="px-3" :class="link.url ? '' : 'text-gray-500'" preserve-scroll />
    </div>
</template>