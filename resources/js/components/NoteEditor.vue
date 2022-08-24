<template>
    <div class="quill-editor">
        <QuillEditor theme="snow" toolbar="full" v-model:content="content" contentType="html" />
    </div>

    <pre><code>{{ content }}</code></pre>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from '@vue/reactivity';
export default {
    components: {
        QuillEditor,
    },
    setup() {
        const content = ref('');
        return {
            content,
        };
    },
};
</script>
