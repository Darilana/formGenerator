<template>
        <v-card>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field
                            label="Title"
                            v-model="title"
                            :rules="titleRules"
                            required
                    ></v-text-field>
                    <div class="text-xs-center">
                        <v-menu offset-y>
                            <v-btn color="primary" dark slot="activator">Add a question</v-btn>
                            <v-list>
                                <v-list-tile v-for="item in questionTypes" :key="item.title" @click="addQuestion(item.title)">
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </div>
                    <template v-for="(child, index) in questions">
                        <component :is="child" :key="child.id" :storedForm="storedForm" :id="index"></component>
                        <div class="text-xs-right">
                            <v-tooltip top>
                                <v-btn fab dark icon color="error" @click="removeQuestion(index)" slot="activator"><v-icon>delete</v-icon></v-btn>
                                <span>Remove question</span>
                            </v-tooltip>
                            <v-menu offset-y>
                                <v-tooltip top slot="activator">
                                    <v-btn  fab dark icon color="info" slot="activator"><v-icon>loop</v-icon></v-btn>
                                    <span>Change question type</span>
                                </v-tooltip>
                                <v-list>
                                    <v-list-tile v-for="item in questionTypes" :key="item.title" @click="changeQuestionType(index, item.title)">
                                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>

                        </div>
                    </template>
                </v-form>
                <div class="text-xs-center">
                    <v-btn color="success" v-show="questions.length" @click="submit()">Submit</v-btn>
                </div>
                <template>
                    <v-layout row justify-center>
                        <v-dialog v-model="dialog" max-width="400">
                            <v-card>
                                <v-card-title class="headline">Form was successfully generated</v-card-title>
                                <v-card-text>You can view and share this form by clicking the button below:</v-card-text>
                                <v-btn color="info" :href="url">View form</v-btn>
                            </v-card>
                        </v-dialog>
                    </v-layout>
                </template>
            </v-card-text>
        </v-card>
</template>

<script>
    import textQuestion from './textQuestion.vue'
    import radioQuestion from './radioQuestion.vue'
    import selectQuestion from './selectQuestion.vue'
    import Vue from 'vue'

    export default {
        name: "create-form",
        components: {
            textQuestion,
            radioQuestion,
            selectQuestion
        },
        data () {
            return {
                title: '',
                titleRules: [
                    v => !!v || 'Name is required',
                ],
                questionTypes: [
                    {
                        title: 'text'
                    },
                    {
                        title: 'radio'
                    },
                    {
                        title: 'select'
                    }
                ],
                questions: [],
                storedForm: [],
                submitted: false,
                dialog: false,
                url: '',
            }
        },
        methods: {
            addQuestion (questionType) {
                if (questionType === 'text') {
                    this.questions.push(textQuestion);
                }
                else if (questionType === 'radio') {
                    this.questions.push(radioQuestion);
                }
                else if (questionType === 'select') {
                    this.questions.push(selectQuestion);
                }
            },
            removeQuestion (index) {
                this.questions.splice(index, 1);
            },
            changeQuestionType (index, questionType) {
                if (questionType === 'text') {
                    this.questions.splice(index, 1, textQuestion);
                }
                else if (questionType === 'radio') {
                    this.questions.splice(index, 1, radioQuestion);
                }
                else if (questionType === 'select') {
                    this.questions.splice(index, 1, selectQuestion);
                }
            },
            submit () {
                if (this.$refs.form.validate()) {
                    const savedQuestions = JSON.stringify({content: this.storedForm, title: this.title});
                    this.url = '/#/user/' + encodeURIComponent(savedQuestions);
                    this.dialog = true;
                }
            }
        }
    }
</script>
