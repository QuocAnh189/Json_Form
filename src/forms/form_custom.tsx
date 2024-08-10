import { useState } from 'react'
//rjsf
import { withTheme } from '@rjsf/core'
import { Theme as MuiTheme } from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'

//datajson
// import initialForm from '../data/data.json'

//css
import '../assets/css/form_mui.css'

//schema
import schemaCustom from '../data/custom.json'

//widget
import uiSchemaMui from '../widgets/form_mui'

const Form = withTheme(MuiTheme)

const FormCustom = () => {
  const [schema, setSchema] = useState(schemaCustom)
  //   const [currentSession, setCurrentSession] = useState(schemaCustom)
  const [formData, setFormData] = useState({})

  const addObjectToSchema = (objectName: any) => {
    const number = Math.random()
    setSchema((prevSchema: any) => ({
      ...prevSchema,
      properties: {
        ...prevSchema.properties,
        [`Session${number}`]: { $ref: `#/definitions/${objectName}` }
      }
    }))
  }

  const onChange = ({ formData }: any) => {
    setFormData(formData)
  }

  const onSubmit = ({ formData }: any) => {
    console.log(formData)
  }

  return (
    <div className='container'>
      <h1 className='py-8 text-2xl'>Researh Form JSON (Custom)</h1>
      <nav className='w-full h-full flex items-center justify-center gap-8'>
        <button className='px-6 py-2 rounded-md bg-slate-200' onClick={() => addObjectToSchema('object1')}>
          Session Header
        </button>
        <button className='px-6 py-2 rounded-md bg-slate-200' onClick={() => addObjectToSchema('object2')}>
          Session Content
        </button>
        <button className='px-6 py-2 rounded-md bg-slate-200' onClick={() => addObjectToSchema('object3')}>
          Session AfterContent
        </button>
        <button className='px-6 py-2 rounded-md bg-slate-200' onClick={() => addObjectToSchema('object4')}>
          Session Footer
        </button>
      </nav>
      <Form
        className='form_container'
        formContext={{
          descriptionLocation: 'tooltip',
          readonlyAsDisabled: false
        }}
        schema={schema}
        formData={formData}
        onChange={onChange}
        uiSchema={uiSchemaMui}
        onSubmit={onSubmit}
        // formData={initialForm}
        validator={validator}
      />
    </div>
  )
}

export default FormCustom
