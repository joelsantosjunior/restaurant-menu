import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Menu from './routes/Menu'
import Modal from './modals/Modal'
import OrderModal from './modals/OrderModal'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from './store/store'
import { setShowOrderModel } from './store/UISlice'

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
