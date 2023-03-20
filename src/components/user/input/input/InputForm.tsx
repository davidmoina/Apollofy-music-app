import styles from './input.module.scss'

type InputProps = {inputType: string, id: string, placeholder: string }


export const InputForm = ({ inputType, id, placeholder }:InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={inputType}
        id={id}
        className={styles.formInput}
        placeholder={placeholder}
        autoComplete="given-name"
        />
      <label
        htmlFor={id}
        className={styles.formLabel}
        >
      {placeholder}
      </label>
    </div>
  )
}

