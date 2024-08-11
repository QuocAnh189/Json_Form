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

// dnd-kit
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import SortableItem from '../components/Sort'

const Form = withTheme(MuiTheme)

const FormCustom = () => {
  const [schema, setSchema] = useState(schemaCustom)
  //   const [currentSession, setCurrentSession] = useState(schemaCustom)
  const [formData, setFormData] = useState({})
  const [sessionOrder, setSessionOrder] = useState<any>([])

  const addObjectToSchema = (objectName: any) => {
    const number = Math.random()
    const sessionId = `Session${number}`

    setSchema((prevSchema: any) => ({
      ...prevSchema,
      properties: {
        ...prevSchema.properties,
        [sessionId]: { $ref: `#/definitions/${objectName}` }
      }
    }))

    setSessionOrder((prevOrder: any) => [...prevOrder, sessionId])
  }

  const onChange = ({ formData }: any) => {
    setFormData(formData)
  }

  const onSubmit = ({ formData }: any) => {
    console.log(formData)
  }

  const handleDragEnd = (event: any) => {
    const { active, over }: any = event

    if (active.id !== over.id) {
      setSessionOrder((items: any) => {
        const oldIndex = items.indexOf(active?.id)
        const newIndex = items.indexOf(over?.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
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
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sessionOrder} strategy={verticalListSortingStrategy}>
          {sessionOrder.map((sessionId: any) => (
            <SortableItem key={sessionId} id={sessionId}>
              <div className='session-container'>
                <Form
                  className='form_container'
                  formContext={{
                    descriptionLocation: 'tooltip',
                    readonlyAsDisabled: false
                  }}
                  schema={{
                    type: 'object',
                    properties: {
                      [sessionId]: { type: 'string' }
                      //   name: { type: 'string' },
                      //   age: { type: 'string' }
                    }
                  }}
                  uiSchema={uiSchemaMui}
                  formData={formData}
                  onChange={onChange}
                  validator={validator}
                />
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default FormCustom
