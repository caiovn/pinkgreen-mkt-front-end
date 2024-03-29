import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  register?: any
  errorMessage?: any
}

const Input = ({
  id,
  label,
  type,
  value,
  min,
  max,
  maxLength,
  pattern,
  required,
  register,
  errorMessage,
  placeholder,
  width,
  disabled,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.MessageWrapper}>
        {label && <label className={styles.label}>{label}</label>}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
      <input
        style={{ width: width }}
        id={id}
        className={styles.input}
        type={type}
        value={value}
        min={min}
        max={max}
        maxLength={maxLength}
        pattern={pattern}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </div>
  )
}

export default Input
