import HomeIndex from './index'
import Login from './Components/Login/index'

// const loading = ({ isLoading, error }) => {
//   return isLoading && !error ? <div>loading...</div> : error ? <div>error</div> : null
// }

// const AsyncUserLogin = Loadable({
//   loader: () => import('./Components/Login/index.tsx'),
//   loading,
// })
const HomeRouters = [
  {
    path: '/',
    component: HomeIndex,
    exact: true,
    navOptions: {
      label: 'Markdown Editor',
    },
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    navOptions: {
      label: 'Github User Search',
    },
  },
]

export default HomeRouters