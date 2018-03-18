<template>
    <div>
        <v-text-field
                label="Enter question text"
                v-model="textQuestionName"
                @input="saveQuestion()"
        >
        </v-text-field>
        <v-text-field
                label="Short answer"
                :disabled="true"
                >
        </v-text-field>
    </div>
</template>

<script>
    export default {
        name: "text-question",
        props: ['storedForm', 'id'],
        data () {
            return {
                textQuestionName: ''
            }
        },
        methods: {
            saveQuestion () {
                this.storedForm[this.id] = {textQuestionName: this.textQuestionName, type: 'text'};
            }
        }
    }
</script>