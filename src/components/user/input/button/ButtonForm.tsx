import styles from './buttonForm.module.scss';

type ButtonProps = {
  name: string
}

export const ButtonForm = ({name}:ButtonProps) => {
  return (
    <button
        type="submit"
        className={`${styles.buttonForm} hover:bg-violet-400 transition duration-300 mt-6`}
      >{name}
      </button>
  )
}
