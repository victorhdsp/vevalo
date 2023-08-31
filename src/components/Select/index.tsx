import css from './select.module.scss'

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    placeholder: string;
    name: string;
    children: React.ReactNode;
}

function Select(props: SelectProps) {
    const { placeholder, children, name } = props;
    
    return (
        <label className={css['label_select']}>
            <div className={css['label']}>{placeholder}</div>
            <select {...props} name={name}>
                {children}
            </select>
        </label>
    )    
}

export default Select