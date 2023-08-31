import css from './input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    name: string;
}

function Input(props: InputProps) {
    const { type, placeholder, name } = props;

    return (
        <label className={css['label_input']}>
            <div className={css['label']}>{placeholder}</div>
            <input required min={1} {...props} type={type} placeholder={placeholder} name={name} />
        </label>
    )    
}

export default Input