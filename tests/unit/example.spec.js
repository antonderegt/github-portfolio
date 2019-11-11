import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Repos from '@/views/Repos.vue'
import { wrap } from 'module'

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

  it('receives props', () => {
    const user = 'username'
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const wrapper = shallowMount(Repos, {
      propsData: {user},
      localVue
    })
    expect(wrapper.props('user')).toBe('username')
    expect(wrapper.find('#repos').exists()).toBeTruthy()
  })

  it('load router links', () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const $route = {
      path: '/repos/antonderegt'
    }
    
    const wrapper = shallowMount(Repos, {
      mocks: {
        $route
      },
      //localVue
    })
    
    expect(wrapper.vm.$route.path).toBe('/repos/antonderegt') 
  })
})