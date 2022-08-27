<template>
    <div class="quill-editor w-[600px] mx-auto">
        <QuillEditor
            theme="bubble"
            toolbar="full"
            v-model:content="content"
            contentType="html"
            @ready="onEditorReady"
        />
    </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
// import { ref } from '@vue/reactivity';
import { ref } from 'vue';
export default {
    components: {
        QuillEditor,
    },
    setup() {
        const content = ref(
            '<h1><strong>Xin chào mọi người mình là Duy đây</strong></h1><p><br></p><p><span class="ql-size-large">Nội dung hôm nay sẽ bao gồm:</span></p><ul><li><em class="ql-size-large">Học về lập trình</em></li><li><em class="ql-size-large">Tương lai nghề nghiệp</em></li><li><em class="ql-size-large">Mọi thứ về lập trình</em></li></ul><p><em class="ql-size-large">Chương trình C đầu tiên:</em></p><pre class="ql-syntax" spellcheck="false">#include&lt;stdio.h&gt;\nint main()\n{\n  int a;\n  cin&gt;&gt;a;\n  cout&lt;&lt;a;\n  return 0;\n}\n</pre>',
        );

        const onEditorReady = (editor) => {
            console.log('ready', { editor });
            editor.focus();
        };
        return {
            content,
            onEditorReady,
        };
    },
};
</script>
