//rjsf
import { IChangeEvent, withTheme } from '@rjsf/core'
import { RJSFValidationError } from '@rjsf/utils'
import { StyleProvider } from '@ant-design/cssinjs'
import { Theme as AntdUITheme } from '@rjsf/antd'
import validator from '@rjsf/validator-ajv8'

//datajson
import initialForm from '../data/data.json'

//css
import '../assets/css/form_antd.css'

//schema
import schema from '../data/schema'

//widget
import uiSchemaMui from '../widgets/form_mui'

const Form = withTheme(AntdUITheme)

const FormAntd = () => {
  const onChange = (data: IChangeEvent<any, any, any>, id?: string | undefined) => {
    console.log(data, id)
  }

  const onSubmit = (data: IChangeEvent<any, any, any>) => {
    console.log(data.formData)
  }

  const onError = (errors: RJSFValidationError[]) => {
    console.log(errors)
  }

  return (
    <div className='container'>
      <h1 className='py-8 text-2xl'>Researh Form JSON (Antd)</h1>
      <StyleProvider>
        <Form
          className='form_container'
          formContext={{
            descriptionLocation: 'tooltip',
            readonlyAsDisabled: false
          }}
          schema={schema}
          uiSchema={uiSchemaMui}
          formData={initialForm}
          validator={validator}
          onChange={onChange}
          onSubmit={onSubmit}
          onError={onError}
        />
      </StyleProvider>
    </div>
  )
}

export default FormAntd
