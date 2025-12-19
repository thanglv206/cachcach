---
trigger: always_on
---

- Use Composition API + <script setup> + typescript if required
- Do not break the default Nuxt architecture.
- Props must have a clear type and defaults when needed.
- Emits must be clearly defined (defineEmits).
- No mutate props
- UI/local state use ref
- Shared state use Pinia/useState
- Tailwind/scoped style is preferred.
- Avoid inline styles