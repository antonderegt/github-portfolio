import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Repos from '@/views/Repos.vue'

describe('Repos.vue', () => {
  // Inspect the raw component options
  it('has created function selectTab', () => {
    expect(typeof Repos.methods.getData).toBe('function')
  })

  it('has created mount', () => {
    expect(typeof Repos.mounted).toBe('function')
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
   // localVue.use(VueRouter)

    const $route = {
      path: '/repos/antonderegt'
    }
    
    const wrapper = shallowMount(Repos, {
      mocks: {
        $route
      },
      localVue
    })
    
    expect(wrapper.vm.$route.path).toBe('/repos/antonderegt') 
  })

  it('fetches async when a button is clicked', done => {
    const user = 'antonderegt'
    const wrapper = shallowMount(Repos, {
      propsData: {username: "antonderegt"}
    })
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.repos).toBe(user)
      done()
    })
  })
})