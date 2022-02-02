import Button from '../Button'
import style from './Home.module.scss'

export default function Home(): JSX.Element {
  return (
    <div className={style.mainWrapper}>
      <div className={style.btnContainer}>
        <Button>BTN</Button>
      </div>
    </div>
  )
}
