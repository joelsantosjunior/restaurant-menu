import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Menu from './routes/Menu'
import Modal from './modals/Modal'
import OrderModal from './modals/OrderModal'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from './store/store'
import { setShowOrderModel } from './store/UISlice'
import { useEffect } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
])

function App() {
  const showOrderModal = useSelector((state: AppState) => {
    return state.UI?.showOrderModel
  })

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('showOrderModal', showOrderModal)
  }, [showOrderModal])

  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      {showOrderModal && (
        <Modal>
          <OrderModal
            onClose={() => {
              console.log('close')
              dispatch(setShowOrderModel(false))
            }}
          ></OrderModal>
        </Modal>
      )}
    </>
  )
}

export default App
