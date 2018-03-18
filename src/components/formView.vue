<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">{{formParams.title}}</h3>
            </v-card-title>
            <v-card-text>
                <div v-for="(question, index) in formParams.content" :key="index">
                    <text-question-view v-if="question.type === 'text'" :question="question"></text-question-view>
                    <radio-question-view v-if="question.type === 'radio'" :question="question"></radio-question-view>
                    <select-question-view v-if="question.type === 'select'" :question="question"></select-question-view>
                </div>
                <div class="text-xs-center">
                    <v-btn color="success" @click="submit()">Submit</v-btn>
                </div>
                <template>
                    <v-layout row justify-center>
                        <v-dialog v-model="dialog" max-width="400">
                            <v-card>
                                <v-card-title class="headline">Form was successfully submitted</v-card-title>
                                <v-card-text>Thank you for submitting the form.</v-card-text>
                            </v-card>
                        </v-dialog>
                    </v-layout>
                </template>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import textQuestionView from "./textQuestionView";
    import radioQuestionView from "./radioQuestionView";
    import selectQuestionView from "./selectQuestionView";

    export default {
        components: {textQuestionView, radioQuestionView, selectQuestionView},
        name: "form-view",
        data () {
            return {
                formParams: {},
                dialog: false
            }
        },
        mounted: function () {
            this.formParams = JSON.parse(atob(this.$route.params.formParams));
        },
        methods: {
            submit () {
                // here filled form can be submitted to backend:
                // this.$http.post('/api', this.formParams)
                this.dialog = true;
            }
        }
    }
</script>