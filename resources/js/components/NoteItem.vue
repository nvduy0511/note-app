<template>
    <v-card class="cursor-pointer" max-width="344">
        <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
        ></v-img> -->
        <div class="h-[200px] p-3 overflow-hidden bg-gray-50" v-html="html"></div>

        <v-card-title> Note CTDL </v-card-title>

        <v-card-subtitle> 27/7/2020 </v-card-subtitle>

        <v-card-actions>
            <v-btn color="red-lighten-2" variant="text"> Delete </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    setup() {
        return {
            html: `<h1><strong>Xin chào mọi người hôm này mình sẽ mang đến nội dung khá là quan trọng đấy</strong></h1><p>Làm ơn hãy theo dõi</p><pre class=\"ql-syntax\" spellcheck=\"false\">#include&lt;sdtio.h&gt;\nint main()\n{\n  int a;\n  int b;\n  int c;\n}\n</pre>`,
        };
    },
};
</script>
