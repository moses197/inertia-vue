<script>
import Pagination from '../Shared/Pagination.vue';

// import Layout from '../Shared/Layout.vue';
// import { Link } from '@inertiajs/vue3';

    export default{
        components: {
            // Layout,
            // Link,
            Pagination,
        },

        // layout: Layout,

        props: {
            // time: String,
            users: Object,
        },
    }
</script>

<template>
    <Head>
        <title>Users</title>
    </Head>
    <!-- <Layout> -->
        <h1 class="text-3xl">Users</h1>
    <!-- </Layout> -->

    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:mx-6 lg:mx-8" >
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200" >
                        <tbody class="bg-white divide-y divide-gray-200" >
                            <tr v-for="user in users.data" :key="user.id" >
                                <td class="px-6 py-4 whitespace-nowrap" >
                                    <div class="flex items-center" >
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ user.name }} 
                                            </div>
                                        </div>
                                    </div>
                                </td>
        
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" >
                                    <a :href="`/users/${user.id}/edit`" class="text-indigo-600 hover:text-indigo-900" >Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <Pagination :links="users.links" class="mt-2"/>


    <!-- <div style="margin-top: 400px;">
        <p>The current time is {{ time }}</p>
        <Link href="/users" preserve-scroll>Refresh</Link>
    </div> -->
</template>