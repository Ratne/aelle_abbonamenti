import React from 'react'
import CheckboxCustom from './checkbox/CheckboxCustom'
import InputCustom from './input/InputCustom'
import RadioCustom from './radio/RadioCustom'
import Textarea from './textArea/TextArea'
import SelectCustom2 from "../../external_lib/form/select2/Select2";

const FormControlCustom = ({
                               isSubmit,
                               errors,
                               value,
                               changeValue = () => {
                               },
                               structure,
                               onBlur,
                               dataForm
                           }: any) => {
    const dataElement = structure?.dataElement || {}

    return (
        <>
            {structure.type === 'input' && (
                <InputCustom
                    name={structure.name}
                    error={isSubmit && !!errors && !!errors[structure.name]}
                    extra={structure.extra}
                    value={dataForm[structure.name]}
                    changeValue={(val) =>
                        changeValue({name: structure.name, value: val})
                    }
                    onBlur={onBlur}
                    {...dataElement}
                />
            )}
            {structure.type === 'select' && (
                /*  <SelectCustom
                  error={isSubmit && !!errors && !!errors[structure.name]}
                  name={structure.name}
                  options={structure.options}
                  value={value}
                  {...dataElement}
                  defaultValue={structure.defaultValue}
                  changeValue={(val) =>
                    changeValue({ name: structure.name, value: val })
                  }
                /> */
                <SelectCustom2
                    options={structure.options}
                    value={dataForm[structure.name]}
                    defaultValue={structure.defaultValue}
                    changeValue={(val: any) =>
                        changeValue({name: structure.name, value: val})
                    }
                    multiple={structure.multiple}
                    {...dataElement}
                />
            )}
            {structure.type === 'radio' && (
                <RadioCustom
                    name={structure.name}
                    value={dataForm[structure.name]}
                    changeValue={(val) =>
                        changeValue({name: structure.name, value: val})
                    }
                    options={structure.options}
                    format={structure.format}
                    {...dataElement}
                />
            )}
            {structure.type === 'textarea' && (
                <Textarea
                    name={name}
                    value={dataForm[structure.name]}
                    onBlur={onBlur}
                    {...dataElement}
                    changeValue={(val) =>
                        changeValue({name: structure.name, value: val})
                    }
                />
            )}
            {structure.type === 'checkbox' && (
                <CheckboxCustom
                    name={structure.name}
                    value={dataForm[structure.name] || []}
                    changeValue={(val) =>
                        changeValue({name: structure.name, value: val})
                    }
                    options={structure.options}
                    format={structure.format}
                    {...dataElement}
                />
            )}

            {/*{typeElement === "textarea" && (*/}
            {/*  <TextArea*/}
            {/*    name={name}*/}
            {/*    value={value}*/}
            {/*    onBlur={onBlur}*/}
            {/*    {...dataElement}*/}
            {/*    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {*/}
            {/*      changeValue(event.target.value);*/}
            {/*    }}*/}
            {/*  />*/}
            {/*)}*/}
            {/*{typeElement === "radio" && (*/}
            {/*  <Row>*/}
            {/*    {options.map((ele, index) => {*/}
            {/*      return (*/}
            {/*        <Col xs="auto" key={index}>*/}
            {/*          <Radio*/}
            {/*            name={name}*/}
            {/*            value={ele.value}*/}
            {/*            label={ele.label}*/}
            {/*            checked={ele.value === value}*/}
            {/*            {...dataElement}*/}
            {/*            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>*/}
            {/*              changeValue(event.target.value)*/}
            {/*            }*/}
            {/*          />*/}
            {/*        </Col>*/}
            {/*      );*/}
            {/*    })}*/}
            {/*  </Row>*/}
            {/*)}*/}

            {/*{typeElement === "progress" && (*/}
            {/*  <Progress*/}
            {/*    value={value}*/}
            {/*    changeProgress={(event: React.ChangeEvent<HTMLInputElement>) => {*/}
            {/*      changeValue(event.target.value);*/}
            {/*    }}*/}
            {/*  />*/}
            {/*)}*/}
            {/*{typeElement === "switch" && (*/}
            {/*  <Switch*/}
            {/*    className="ml-auto"*/}
            {/*    error={isSubmit && !!errors && !!errors[name]}*/}
            {/*    name={name}*/}
            {/*    checked={value}*/}
            {/*    typeCheck={dataElement?.type}*/}
            {/*    changeSwitch={(event: React.ChangeEvent<HTMLInputElement>) => {*/}
            {/*      changeValue(dataElement && dataElement.type === 'checkbox'*/}
            {/*          ? event.target.checked*/}
            {/*          : event.target.value);*/}
            {/*    }}*/}
            {/*  ></Switch>*/}
            {/*)}*/}
        </>
    )
}

export default FormControlCustom
