<script>
// import Layout from '../Shared/Layout.vue';
// import { Link } from '@inertiajs/vue3';

    export default{
        components: {
            // Layout,
            // Link,
        },

        // layout: Layout,

        props: {
            time: String,
        },
    }
</script>

<template>
    <!-- <Layout> -->
        <h1 class="text-3xl">Users</h1>
    <!-- </Layout> -->

    <div style="margin-top: 400px;">
        <p>The current time is {{ time }}</p>
        <Link href="/users" preserve-scroll>Refresh</Link>
    </div>
</template>