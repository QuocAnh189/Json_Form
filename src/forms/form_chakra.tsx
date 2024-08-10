//chakra
import { ChakraProvider } from '@chakra-ui/react'

//rjsf
import { IChangeEvent, withTheme } from '@rjsf/core'
import { Theme as ChakraUITheme } from '@rjsf/chakra-ui'
import { RJSFValidationError } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'

//datajson
import initialForm from '../data/data.json'

//css
import '../assets/css/form_chakra.css'

//schema
import schema from '../data/schema'

//widget
import uiSchemaChakra from '../widgets/form_chakra'

const Form = withTheme(ChakraUITheme)

const FormChakra = () => {
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
      <h1 className='py-8 text-2xl'>Researh Form JSON (Chakra-ui)</h1>
      <ChakraProvider>
        <Form
          className='form_container'
          formContext={{
            descriptionLocation: 'tooltip',
            readonlyAsDisabled: false
          }}
          schema={schema}
          uiSchema={uiSchemaChakra}
          formData={initialForm}
          validator={validator}
          onChange={onChange}
          onSubmit={onSubmit}
          onError={onError}
        />
      </ChakraProvider>
    </div>
  )
}

export default FormChakra
