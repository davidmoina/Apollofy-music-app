import styles from './buttonForm.module.scss'

export const ButtonForm = () => {
  return (
    <button
        type="submit"
        className={`${styles.buttonForm} md:span-2`}
      >Sign In
      </button>
  )
}
