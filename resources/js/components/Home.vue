<template>
    <h1>
        Welcome to Note App!<br />{{
            `${uid}           
            ${displayName} 
            ${email}`
        }}
    </h1>
</template>

<script>
import { getAuth } from 'firebase/auth';
export default {
    setup() {
        const { uid, displayName, email } = getAuth().currentUser;
        return {
            uid,
            displayName,
            email,
        };
    },
};
</script>
