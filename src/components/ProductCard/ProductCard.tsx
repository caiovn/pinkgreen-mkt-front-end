import Image from 'next/image'
import React from 'react'
import ROUTES from '@/routes/routes'
import { convertToBRLCurrency } from '@/utils/currency'
import styles from './ProductCard.module.scss'

const ProductCard = ({
  id,
  skuCode = '',
  name,
  price,
  mainImageUrl,
  href = null,
}) => {
  const handleChangeHref = () => {
    if (!href) return `${ROUTES.PRODUCT_PAGE}/${id}/${skuCode}`
    return href
  }

  return (
    <a href={handleChangeHref()}>
      <div className={styles.container}>
        {mainImageUrl && (
          <img
            className={styles.imageWrapper}
            src={`${mainImageUrl}`}
            alt={name}
          />
        )}
        <div className={styles.textWrapper}>
          <h2 className={styles.productName}>{name}</h2>
          <p className={styles.price}>{convertToBRLCurrency.format(price)}</p>
        </div>
      </div>
    </a>
  )
}

export default ProductCard
