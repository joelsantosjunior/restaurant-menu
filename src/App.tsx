import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Menu from './routes/Menu'
import { useDispatch } from 'react-redux'
import {
  Locale,
  availableLocales,
  setLocale,
  setWebSettings,
} from './store/UISlice'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getRestaurantData } from './api/rest-api'
import { applyWebSettings } from './utils/applyWebSettings'
import LoadingSpinner from './components/ui/loading-spinner/LoadingSpinner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
])

function App() {
  const { data, status } = useQuery({
    queryKey: ['restaurantData'],
    queryFn: getRestaurantData,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    let initialLocale = (navigator?.language?.split('-')?.[0] as Locale) || 'en'

    if (!availableLocales.includes(initialLocale)) {
      initialLocale = 'en'
    }

    dispatch(setLocale(initialLocale as Locale))
  }, [])

  if (status === 'success') {
    dispatch(setWebSettings(data.webSettings))
    applyWebSettings(data.webSettings)
  }

  if (status === 'pending') {
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  )
}

export default App
