<template>
  <div>
    <h1>hello</h1>
    <div>
      <button @click="fetchThis">fetch from test-set-cookie</button>
      <button @click="readCookie">read test-cookie</button>
    </div>
  </div>
</template>

<script setup>
console.log('app.vue setup')

const fetchThis = async () => {
  console.log('fetching')
  const response = await $fetch('/api/test-set-cookie')
  console.log('response :', response)
}

const readCookie = () => {
  const testCookie = useCookie('test-cookie').value
  console.log('testCookie :', testCookie)
}
</script>
