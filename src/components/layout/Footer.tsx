import React from 'react'
import { useDispatch } from 'react-redux'
import { setShowOrderModel } from '../../store/UISlice'
import styles from './footer.module.scss'
import UIButton from '../ui/button/Button'
import useOrder from '../../hooks/useOrder'
import LocalizeText from '../ui/localize-text/LocalizeText'

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
          <a href="">
            <LocalizeText>page.menu.footer.allergy</LocalizeText>
          </a>
        </div>
        <div>
          {order.length > 0 && (
            <UIButton type="primary" onClick={handleFinishOrder}>
              <LocalizeText>page.menu.footer.button.basket</LocalizeText> •{' '}
              {order.length} item
            </UIButton>
          )}
        </div>
      </div>
    </>
  )
}

export default Footer
