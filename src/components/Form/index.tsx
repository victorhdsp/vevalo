import FormCard from './Card'
import css from './form.module.scss'

const Form = () => {
    return (
        <div className={css["form"]}>
          <h2>Formulario</h2>
          <FormCard />
        </div>
    )
}

export default Form