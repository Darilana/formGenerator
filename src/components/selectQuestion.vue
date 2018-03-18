<template>
    <v-container fluid px-0>
        <v-text-field xs12
                      label="Question text"
                      v-model="selectQuestionName"
        >
        </v-text-field>
        <v-text-field v-for="(option, index) in selectQuestionOptions" :key="option.id"
                      label="Option"
                      prepend-icon="fiber_manual_record"
                      append-icon="cancel"
                      :append-icon-cb="removeOption.bind(null, index)"
                      v-model="selectQuestionOptions[index]"
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
        name: "select-question",
        props: ['storedForm', 'id'],
        data () {
            return {
                selectQuestionOptions: [''],
                selectQuestionName: '',
            }
        },
        methods: {
            addOption () {
                this.selectQuestionOptions.push('');
            },
            removeOption (index) {
                this.selectQuestionOptions.splice(index, 1);
            },
            saveQuestion () {
                this.storedForm[this.id] = {selectQuestionOptions: this.selectQuestionOptions, selectQuestionName: this.selectQuestionName, type: 'select'};
            }
        }
    }
</script>