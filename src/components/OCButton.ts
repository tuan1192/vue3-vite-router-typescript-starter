import { defineComponent, reactive, useClick } from 'vue'

export default defineComponent({
  setup() {
    // Define the component's state
    const to = reactive('')
    const href = reactive('')
    const target = reactive('_self')
    const title = reactive('')
    const arrow = reactive(false)
    const bgColor = reactive('bgRed')
    const disable = reactive(false)

    // Define the component's logic
    const handleClick = () => {
      // Do something when the button is clicked
    }

    // Render the component's markup
    return {
      to,
      href,
      target,
      title,
      arrow,
      bgColor,
      disable,
      handleClick,
    }
  },
})
