import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Menu from './routes/Menu'
import Modal from './components/modals/Modal'
import OrderModal from './components/modals/OrderModal'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from './store/store'
import {
  Locale,
  availableLocales,
  setLocale,
  setShowOrderModel,
} from './store/UISlice'
import { useEffect } from 'react'
import { setMenu } from './store/menuSlice'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
])

function App() {
  const dispatch = useDispatch()

  const showOrderModal = useSelector(
    (state: AppState) => state.ui.showOrderModel
  )

  useEffect(() => {
    let initialLocale = (navigator?.language?.split('-')?.[0] as Locale) || 'en'

    if (!availableLocales.includes(initialLocale)) {
      initialLocale = 'en'
    }

    dispatch(setLocale(initialLocale as Locale))
    dispatch(setMenu(initialLocale))
  }, [])

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
