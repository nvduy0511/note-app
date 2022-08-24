<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';
export default {
    setup() {
        const router = useRoute();
        return { layout: computed(() => (router.meta.layout || 'default') + '-layout') };
    },
};
</script>
