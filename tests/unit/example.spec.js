import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Repos from '@/views/Repos.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Repos.vue', () => {
  // Inspect the raw component options
  it('has created function selectTab', () => {
    expect(typeof Repos.methods.getData).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Repos.data).toBe('function')
    const defaultData = Repos.data()
    expect(defaultData.username).toBe('')
    expect(defaultData.repos).toBe(null)
  })
})