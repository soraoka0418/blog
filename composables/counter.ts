export const useCounter = () => {
  const count = useState('count', () => 0)
  const increment = () => count.value++
  const decrement = () => count.value--
  const doubleCount = computed(() => {
    return count.value * 2
  })

  return {
    count: readonly(count),
    increment,
    decrement,
    doubleCount
  }
}
