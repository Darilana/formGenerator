<template>
    <v-container fluid>
        <v-layout column>
            <v-flex>
                <v-subheader><span class="blue--text">{{question.textQuestionName}}</span></v-subheader>
            </v-flex>
            <v-flex>
                <v-text-field
                        name="input-1"
                        label="Answer"
                        v-model="question.answer"
                ></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "text-question-view",
        props: ['question'],
    }
</script>
