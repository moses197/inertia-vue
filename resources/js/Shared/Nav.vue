<script>
import { Link } from '@inertiajs/vue3';
import NavLink from './NavLink.vue';

    export default{
        components: {
            Link,
            NavLink,
        }
    }
</script>

<template>
    <nav>
        <ul class="flex space-x-6">
            <li><NavLink href="/" :active="$page.component === 'Home'">Home</NavLink></li>
            <li><NavLink href="/users" :active="$page.component === 'Users'">Users</NavLink></li>
            <li><NavLink href="/settings" :active="$page.component === 'Settings'">Settings</NavLink></li>
            <li><Link href="/logout" class="text-blue-500 hover:underline"  method="post" :data="{ foo: 'bar'}" as="button">Log out</Link></li>

            <!-- <li><Link href="/" class="text-blue-500 hover:underline" :class="{'font-bold underline': true}">Home</Link></li>
            <li><Link href="/users" class="text-blue-500 hover:underline" >Users</Link>  </li>
            <li><Link href="/settings" class="text-blue-500 hover:underline" >Settings</Link></li> -->
        </ul>
    </nav>
</template>