import { createRouter, createWebHistory } from 'vue-router'
import CreatePost from '../views/CreatePost.vue'
import PostList from '../views/PostList.vue'

const routes = [
  {
    path: '/',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/postList',
    name: 'PostList',
    component: PostList
  },


 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
