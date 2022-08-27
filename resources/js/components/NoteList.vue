<template>
    <div class="flex gap-4 flex-wrap">
        <note-item />
        <note-item />
        <note-item />
        <note-item />
        <note-item />
    </div>
</template>

<script>
import NoteItem from './NoteItem.vue';
export default {
    components: { NoteItem },
};
</script>
