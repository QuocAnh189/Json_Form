//rjsf
import { IChangeEvent, withTheme} from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/mui';
import { RJSFValidationError } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

//datajson
import initialForm from '../data.json'

//css
import '../assets/css/form_mui.css'

//schema
import schema from '../data/schema';

//widget
import uiSchemaMui from '../widgets/form_mui';

const Form = withTheme(MuiTheme);

const FormMui = () => {
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
      <h1 className='py-8 text-2xl'>Researh Form JSON (Mui)</h1>
      <Form
        className='form_container'
        formContext={{
          descriptionLocation: 'tooltip',
          readonlyAsDisabled: false,
        }}
        schema={schema}
        uiSchema={uiSchemaMui}
        formData={initialForm}
        validator={validator}
        onChange={onChange}
        onSubmit={onSubmit}
        onError={onError}
      />
    </div>
  )
}

export default FormMui