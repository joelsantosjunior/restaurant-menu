import React from 'react'
import { useDispatch } from 'react-redux'
import { setShowOrderModel } from '../../store/UISlice'
import styles from './Footer.module.scss'
import UIButton from '../ui/button/Button'
import useOrder from '../../hooks/useOrder'

const Footer: React.FC = () => {
  const dispatch = useDispatch()

  const order = useOrder()

  const handleFinishOrder = () => {
    dispatch(setShowOrderModel(true))
  }

  return (
    <>
      <div className={styles.footer}>
        <div>
          <a href="">View allergy information</a>
        </div>
        <div>
          {order.length > 0 && (
            <UIButton type="primary" onClick={handleFinishOrder}>
              Your basket • {order.length} item
            </UIButton>
          )}
        </div>
      </div>
    </>
  )
}

export default Footer
