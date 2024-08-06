import { UiSchema } from '@rjsf/utils';
import '../assets/css/form_mui.css'

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
    "ui:placeholder": "Enter your age"
  },
  "email": {
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
  "ex": {
    'ui:options': {
      orderable: true,
      addable: true,
      copyable: true,
      removable: true,
    },
  },
  "favorite": {
    // 'ui:widget': 'checkboxes',
  }
};

export default uiSchemaMui