import React from 'react';

const Checkbox = ({
                      name,
                      value,
                      label,
                      onChange,
                      checked
                  }: {
        name: string,
        label?: string,
        value: any,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        checked: boolean
    }) => {
        return (
            <div className={"shared-checkbox check-item"}>
                <input
                    id={value}
                    className={"checkbox-sh"}
                    type="checkbox"
                    value={value}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                <label htmlFor={value} className="ml-6">
                    {label}
                </label>
            </div>
        );
    }
;

export default Checkbox;
