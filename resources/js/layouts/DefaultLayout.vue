<template>
    <v-app id="inspire" v-if="user">
        <v-navigation-drawer
            expand-on-hover
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            permanent
            theme="dark"
            rail
        >
            <v-list>
                <v-list-item
                    :prepend-avatar="
                        user.photoURL ||
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
                    "
                    :title="user.displayName"
                    :subtitle="user.email"
                ></v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list v-model:opened="open">
                <v-list-group value="Notes">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            prepend-icon="mdi-notebook"
                            title="Notes"
                        ></v-list-item>
                    </template>

                    <v-list-item
                        prepend-icon="mdi-plus-box-outline"
                        title="Create note"
                        value="createNote"
                        to="/create-note"
                    ></v-list-item>

                    <v-list-item
                        prepend-icon="mdi-note-multiple"
                        title="Note list"
                        value="noteList"
                        to="/note-list"
                    ></v-list-item>
                </v-list-group>

                <v-list-item
                    prepend-icon="mdi-cash-multiple"
                    title="Money"
                    value="money"
                ></v-list-item>
                <v-list-item
                    prepend-icon="mdi-format-list-checks"
                    title="Todo list"
                    value="todoList"
                ></v-list-item>
                <v-list-group value="Settings">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            prepend-icon="mdi-cog"
                            title="Setting"
                        ></v-list-item>
                    </template>
                    <v-list-item
                        prepend-icon="mdi-account"
                        title="Account"
                        value="account"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-logout"
                        title="Logout"
                        value="logout"
                        @click="handleLogout"
                    ></v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <!--  -->

            <div class="p-4">
                <div class="mb-15 flex justify-between w-100">
                    <v-breadcrumbs class="p-0 text-sm" :items="breadCrumbs" divider="/" />
                    <div
                        v-if="
                            pathRoute.includes('/create-note') || pathRoute.includes('/note-list')
                        "
                        class="text-gray-500 gap-3 flex cursor-pointer"
                    >
                        <span class="text-sm">Share</span>
                        <v-icon size="small">mdi-comment-text</v-icon>
                        <v-icon size="small">mdi-timelapse</v-icon>
                        <v-icon size="small">mdi-star-outline</v-icon>
                        <v-icon size="small">mdi-dots-horizontal</v-icon>
                    </div>
                </div>
                <slot />
            </div>
        </v-main>
    </v-app>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const auth = getAuth();
        const open = ref([]);
        const router = useRouter();
        let user = null;
        if (auth.currentUser) user = auth.currentUser;

        const handleLogout = () => {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    router.push('/login');
                })
                .catch((error) => {
                    // An error happened.
                    console.log('Error when signOut', { error });
                });
        };
        return {
            open,
            handleLogout,
            user,
        };
    },
    computed: {
        breadCrumbs() {
            if (typeof this.$route.meta.breadCrumb === 'function') {
                return this.$route.meta.breadCrumb.call(this, this.$route);
            }
            return this.$route.meta.breadCrumb;
        },
        pathRoute() {
            console.log(this.$route);
            return this.$route.path;
        },
    },
};
</script>
