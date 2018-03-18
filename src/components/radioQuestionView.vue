<template>
    <v-container fluid>
        <v-layout column wrap>
        <v-flex>
            <v-subheader><span class="blue--text">{{question.radioQuestionName}}</span></v-subheader>
        </v-flex>
        <v-radio-group v-model="question.answer">
            <v-radio
                    v-for="(answer, index) in question.radioQuestionOptions"
                    :key="index"
                    :label="answer"
                    :value="answer"
            ></v-radio>
        </v-radio-group>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "radio-question-view",
        props: ['question'],
    }
</script>
