import style from "./index.module.css"

export default function MapControlButton({ children }) {
  return (
    <button className={style.container} type="button">
      {children}
    </button>
  )
}
