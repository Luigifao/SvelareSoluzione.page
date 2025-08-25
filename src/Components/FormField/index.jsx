import React from 'react';
import styles from './FormField.module.css';

function FormField({ 
    label, 
    type = 'text', 
    name, 
    value, 
    onChange, 
    placeholder, 
    required = false, 
    options = null,
    rows = 3,
    className = ''
}) {
    const fieldProps = {
        id: name,
        name,
        value,
        onChange,
        placeholder,
        required,
        className: `${styles.field} ${className}`
    };

    const renderField = () => {
        switch (type) {
            case 'select':
                return (
                    <select {...fieldProps}>
                        <option value="">{placeholder}</option>
                        {options && options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            case 'textarea':
                return (
                    <textarea 
                        {...fieldProps} 
                        rows={rows}
                    />
                );
            default:
                return <input type={type} {...fieldProps} />;
        }
    };

    return (
        <div className={styles.formField}>
            <label htmlFor={name} className={required ? styles.required : ''}>
                {label}
            </label>
            {renderField()}
        </div>
    );
}

export default FormField;
