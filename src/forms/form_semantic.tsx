//rjsf
import { IChangeEvent, withTheme } from '@rjsf/core';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { RJSFValidationError } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

//datajson
import initialForm from '../data.json'

//css
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/form_mui.css'

//schema
import schema from '../data/schema';

//widget
import uiSchemaSemantic from '../widgets/form_semantic';

const Form = withTheme(SemanticUITheme);

const FormSematic = () => {
  const onChange = (data: IChangeEvent<any, any, any>, id?: string | undefined) => {
    // console.log(data, id);
  }
  
  const onSubmit = (data: IChangeEvent<any, any, any>, event: any) => {
    console.log(data.formData);
  }

  const onError = (errors: RJSFValidationError[]) => {
    console.log(errors);
  }

  return (
    <div className="container">
        <h1 className='py-10 text-2xl'>Researh Form JSON (Sematic)</h1>
        <Form
          className='form_container'
          formContext={{
              descriptionLocation: 'tooltip',
              readonlyAsDisabled: false,
              wrapLabel: true,
              wrapContent: true,
          }}
          schema={schema}
          uiSchema={uiSchemaSemantic}
          formData={initialForm}
          validator={validator}
          onChange={onChange}
          onSubmit={onSubmit}
          onError={onError}
        />
    </div>
  )
}

export default FormSematic