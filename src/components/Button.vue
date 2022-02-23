<script setup lang="ts">
type Props = {
    text: String
}
defineProps<Props>();
</script>

<template>
    <div>
        <button>{{text}}</button>
    </div>
</template>
