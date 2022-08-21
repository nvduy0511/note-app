<template>
    <div
        class="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-300 overflow-hidden flex items-center"
    >
        <div class="h-auto w-1/2 hidden md:block">
            <NoteImage />
        </div>
        <div id="firebaseui-auth-container" class="m-auto"></div>
    </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { getAuth } from 'firebase/auth';
import NoteImage from '../storyset/NoteImage.vue';
import { uiConfig } from '../configs/firebaseConfig';
const auth = getAuth();

export default {
    components: {
        NoteImage,
    },
    setup() {
        const user = ref('nvduy');
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);

        return {
            user,
        };
    },
};
</script>
