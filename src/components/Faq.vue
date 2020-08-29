<template>
  <div class="faq">
      <Nav/>
        <div class="faq-title">
            Frequently Asked Questions
        </div>
        <div class="faq-subtitle">
            Have a question? Proceed
        </div>
        <div class="faq-rows-wrapper">
            <div class="faq-rows">
                <div class="faq-content">
                    <div class="faq-contents">
                        <div class="faq-contents-title">
                            TAGS
                        </div>
                        <div v-for="(tag, i) in tags" :key="i" class="faq-tag">
                            <svg class="faq-tag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 14.824V12.5A3.5 3.5 0 0014.5 9h-2A1.5 1.5 0 0111 7.5V5.176A2.395 2.395 0 0012.4 3a2.4 2.4 0 10-4.8 0c0 .967.576 1.796 1.4 2.176V7.5A1.5 1.5 0 017.5 9h-2A3.5 3.5 0 002 12.5v2.324A2.396 2.396 0 003 19.4a2.397 2.397 0 001-4.576V12.5A1.5 1.5 0 015.5 11h2c.539 0 1.044-.132 1.5-.35v4.174a2.396 2.396 0 001 4.576 2.397 2.397 0 001-4.576V10.65c.456.218.961.35 1.5.35h2a1.5 1.5 0 011.5 1.5v2.324A2.395 2.395 0 0014.6 17a2.4 2.4 0 104.8 0c0-.967-.575-1.796-1.4-2.176zM10 1.615a1.384 1.384 0 110 2.768 1.384 1.384 0 010-2.768zm-7 16.77a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77z"/></svg>
                            <div style="margin-left: 12px;">
                                {{tag.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="faq-info">
                    <div v-for="(message, i) in messages" :key="i" class="info-contents">
                        <div class="info-contents-wrapper">
                            <div class="info-header-one">
                                <div style="display: flex; justify-content: flex-start; align-items: center;">
                                    <img class="info-contents-prof" :src="message.url" alt="">
                                    <div class="info-contents-name">
                                        {{message.name}}
                                    </div>
                                </div>
                            </div>
                            <div class="info-header-two">
                                    <div v-if="message.status == 'usage'" class="info-header-bubble-green">
                                        <svg class="info-header-bubble-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 14.824V12.5A3.5 3.5 0 0014.5 9h-2A1.5 1.5 0 0111 7.5V5.176A2.395 2.395 0 0012.4 3a2.4 2.4 0 10-4.8 0c0 .967.576 1.796 1.4 2.176V7.5A1.5 1.5 0 017.5 9h-2A3.5 3.5 0 002 12.5v2.324A2.396 2.396 0 003 19.4a2.397 2.397 0 001-4.576V12.5A1.5 1.5 0 015.5 11h2c.539 0 1.044-.132 1.5-.35v4.174a2.396 2.396 0 001 4.576 2.397 2.397 0 001-4.576V10.65c.456.218.961.35 1.5.35h2a1.5 1.5 0 011.5 1.5v2.324A2.395 2.395 0 0014.6 17a2.4 2.4 0 104.8 0c0-.967-.575-1.796-1.4-2.176zM10 1.615a1.384 1.384 0 110 2.768 1.384 1.384 0 010-2.768zm-7 16.77a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77z"/></svg>
                                        <div>{{message.status}}</div>
                                    </div>

                                    <div v-if="message.status == 'issue'" class="info-header-bubble-red">
                                        <svg class="info-header-bubble-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 14.824V12.5A3.5 3.5 0 0014.5 9h-2A1.5 1.5 0 0111 7.5V5.176A2.395 2.395 0 0012.4 3a2.4 2.4 0 10-4.8 0c0 .967.576 1.796 1.4 2.176V7.5A1.5 1.5 0 017.5 9h-2A3.5 3.5 0 002 12.5v2.324A2.396 2.396 0 003 19.4a2.397 2.397 0 001-4.576V12.5A1.5 1.5 0 015.5 11h2c.539 0 1.044-.132 1.5-.35v4.174a2.396 2.396 0 001 4.576 2.397 2.397 0 001-4.576V10.65c.456.218.961.35 1.5.35h2a1.5 1.5 0 011.5 1.5v2.324A2.395 2.395 0 0014.6 17a2.4 2.4 0 104.8 0c0-.967-.575-1.796-1.4-2.176zM10 1.615a1.384 1.384 0 110 2.768 1.384 1.384 0 010-2.768zm-7 16.77a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77z"/></svg>
                                        <div>{{message.status}}</div>
                                    </div>
                            </div>
                        </div>
                        <div class="info-message">
                            {{message.question}}
                        </div>
                        <div class="info-footer">
                            <div class="answer-btn">
                                <!-- <svg :class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 6v7c0 1.1-.9 2-2 2h-4v3l-4-3H4c-1.101 0-2-.9-2-2V6c0-1.1.899-2 2-2h12c1.1 0 2 .9 2 2z"/></svg> -->
                                Answer
                            </div>
                            <div v-if="message.answersCount == 0" class="answers-count">
                                No answers yet
                            </div>

                            <div v-if="message.answersCount != 0" class="answers-count">
                                {{message.answersCount}} answers
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
  </div>
</template>

<script>
import Nav from './Nav'

export default {
    name: 'faq',
    components: {
        Nav
    },
    methods: {

    },
    data(){
        return {
            tags: [
                {
                    name: 'Usage'
                },
                {
                    name: 'Issues'
                }
            ],
            messages: [
                {
                    name: 'Lewis',
                    question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consequatur sit quaerat quidem, blanditiis possimus laudantium vel architecto accusamus voluptatum autem, eveniet eligendi. Enim corrupti, nam voluptatem vitae hic quas! ',
                    status: 'issue',
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    answersCount: 0
                },
                {
                    name: 'Lewis',
                    question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consequatur sit quaerat quidem, blanditiis possimus laudantium vel architecto accusamus voluptatum autem, eveniet eligendi. Enim corrupti, nam voluptatem vitae hic quas! ',
                    status: 'usage',
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    answersCount: 2
                },
                {
                    name: 'Lewis',
                    question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consequatur sit quaerat quidem, blanditiis possimus laudantium vel architecto accusamus voluptatum autem, eveniet eligendi. Enim corrupti, nam voluptatem vitae hic quas! ',
                    status: 'issue',
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    answersCount: 0
                }
            ]
        }
    }
}
</script>

<style>
    @import "../styles/faq.scss";
</style>