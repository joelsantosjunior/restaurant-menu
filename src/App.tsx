import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Menu from './routes/Menu'
import Modal from './modal'
import OrderModal from './components/modals/OrderModal'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from './store/store'
import {
  Locale,
  availableLocales,
  setLocale,
  setShowOrderModel,
  setWebSettings,
} from './store/UISlice'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getRestaurantData } from './api/rest-api'
import { applyWebSettings } from './utils/applyWebSettings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
])

function App() {
  const { data, isPending, isFetching, isError } = useQuery({
    queryKey: ['restaurantData'],
    queryFn: getRestaurantData,
  })

  const showOrderModal = useSelector(
    (state: AppState) => state.ui.showOrderModel
  )

  const dispatch = useDispatch()

  if (data) {
    dispatch(setWebSettings(data.webSettings))
    applyWebSettings(data.webSettings)
  }

  // TODO: Move to a custom hook
  useEffect(() => {
    let initialLocale = (navigator?.language?.split('-')?.[0] as Locale) || 'en'

    if (!availableLocales.includes(initialLocale)) {
      initialLocale = 'en'
    }

    dispatch(setLocale(initialLocale as Locale))
  }, [])

  if (isPending || isFetching) {
    // TODO: create a loading spinner component
    return <div>Loading...</div>
  }

  if (isError) {
    // TODO: Implement a proper error handling
    return <div>Error fetching data</div>
  }

  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      {showOrderModal && (
        <Modal>
          <OrderModal
            onClose={() => {
              dispatch(setShowOrderModel(false))
            }}
          ></OrderModal>
        </Modal>
      )}
    </>
  )
}

export default App
