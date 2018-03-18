<template>
    <v-container fluid px-0>
        <v-text-field xs12
                      label="Question text"
                      v-model="radioQuestionName"
        >
        </v-text-field>
        <v-text-field v-for="(option, index) in radioQuestionOptions" :key="option.id"
                      label="Option"
                      prepend-icon="panorama_fish_eye"
                      append-icon="cancel"
                      :append-icon-cb="removeOption.bind(null, index)"
                      v-model="radioQuestionOptions[index]"
                      @input="saveQuestion()"
        >
        </v-text-field>
        <v-tooltip bottom>
            <v-btn fab dark icon color="info" @click="addOption()" slot="activator"><v-icon dark>add</v-icon></v-btn>
            <span>Add option</span>
        </v-tooltip>
    </v-container>
</template>

<script>
    export default {
        name: "radio-question",
        props: ['storedForm', 'id'],
        data () {
            return {
                radioQuestionOptions: [''],
                radioQuestionName: '',
            }
        },
        methods: {
            addOption () {
                this.radioQuestionOptions.push('');
            },
            removeOption (index) {
                this.radioQuestionOptions.splice(index, 1);
            },
            saveQuestion () {
                this.storedForm[this.id] = {radioQuestionOptions: this.radioQuestionOptions, radioQuestionName: this.radioQuestionName, type: 'radio'};
            }
        }
    }
</script>