import { mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.element).toMatchSnapshot()
  })
})
