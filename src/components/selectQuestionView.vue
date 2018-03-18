<template>
    <v-container fluid xs6>
        <v-layout column wrap>
            <v-flex>
                <v-subheader><span class="blue--text">{{question.selectQuestionName}}</span></v-subheader>
            </v-flex>
            <v-flex>
                <v-select v-model="question.answer"
                        :items="question.selectQuestionOptions"
                        label="Select"
                        single-line
                ></v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "select-question-view",
        props: ['question'],
    }
</script>