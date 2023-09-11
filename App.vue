<script>
    import { createApp } from 'vue'
    import App from './App.vue'

    const app = createApp({
        message: "Hello, world"
    })
</script>

<body>
    {{message}}
</body>
