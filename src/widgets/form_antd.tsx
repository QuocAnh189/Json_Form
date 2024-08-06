import { UiSchema } from '@rjsf/utils';
import '../assets/css/form_antd.css'

const CustomTextWidget = (props: any) => {
  return <input type="text" value={props.value} onChange={(event) => props.onChange((event.target as HTMLInputElement)?.value)} />;
};

const uiSchemaMui: UiSchema = {
  "name": {
    // "ui:widget": CustomTextWidget,
    "ui:placeholder": "Enter your name",
    'ui:classNames': 'custom-class-name',
  },
  "age": {
    // "ui:widget": CustomTextWidget,
    "ui:placeholder": "Enter your age"
  },
  "email": {
    // "ui:widget": CustomTextWidget,
    "ui:placeholder": "Enter your mail"
  },
  "gender": {
    "ui:widget": "radio",
    "ui:options": {
      "enumOptions": [
        { "value": "male", "label": "Male" },
        { "value": "female", "label": "Female" },
        { "value": "other", "label": "Other" }
      ]
    }
  },
};

export default uiSchemaMui