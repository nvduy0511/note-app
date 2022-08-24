<template>
    <v-app id="inspire">
        <v-navigation-drawer
            expand-on-hover
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            permanent
            theme="dark"
            rail
        >
            <v-list>
                <v-list-item
                    prepend-avatar="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/107966166_1172185269806218_4096158675165172194_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NaIJ7WbGrG0AX8UiWCQ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9Tb5qbPbpAeetdkqaby00b7MZMkPXVntWj35biBtNMCA&oe=632BC3BA"
                    title="Nguyen Van Duy"
                    subtitle="nvduy.k19hutech@gmailcom"
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
                    ></v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <!--  -->
            <div class="p-4">
                <slot />
            </div>
        </v-main>
    </v-app>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup() {
        const open = ref([]);
        return {
            open,
        };
    },
};
</script>
