<template>
  <div class="faq-tag">
    <svg class="faq-tag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 14.824V12.5A3.5 3.5 0 0014.5 9h-2A1.5 1.5 0 0111 7.5V5.176A2.395 2.395 0 0012.4 3a2.4 2.4 0 10-4.8 0c0 .967.576 1.796 1.4 2.176V7.5A1.5 1.5 0 017.5 9h-2A3.5 3.5 0 002 12.5v2.324A2.396 2.396 0 003 19.4a2.397 2.397 0 001-4.576V12.5A1.5 1.5 0 015.5 11h2c.539 0 1.044-.132 1.5-.35v4.174a2.396 2.396 0 001 4.576 2.397 2.397 0 001-4.576V10.65c.456.218.961.35 1.5.35h2a1.5 1.5 0 011.5 1.5v2.324A2.395 2.395 0 0014.6 17a2.4 2.4 0 104.8 0c0-.967-.575-1.796-1.4-2.176zM10 1.615a1.384 1.384 0 110 2.768 1.384 1.384 0 010-2.768zm-7 16.77a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm7 0a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77z"/></svg>
    <div style="margin-left: 8px;">
        {{this.name}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        name: String
    }
}
</script>

<style>
    .faq-tag {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    font-size: 16px;
    color: #434C5A;
    background-color: #82899421;
    border-radius: 4px;
    padding: 8px;
    }

    .faq-tag-icon {
        fill: #65bbf8;
        height: 20px;
    }
</style>