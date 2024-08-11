import { RJSFSchema } from '@rjsf/utils'

const schema: RJSFSchema = {
  // "title": "Researh Form JSON",
  definitions: {
    myex: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'string' }
      },
      required: ['name', 'age']
    }
  },

  type: 'object',
  required: ['name', 'age', 'email', 'gender', 'school'],
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      minLength: 1,
      maxLength: 30
    },
    age: {
      type: 'integer',
      title: 'Age',
      minimum: 18,
      maximum: 200
    },
    email: {
      type: 'string',
      title: 'Email',
      format: 'email'
    },
    gender: {
      type: 'string',
      title: 'Gender',
      enum: ['male', 'female', 'other']
      // "enumNames": ["Select your school", "HCMUIT", "HCMUTE", "HCMUS"]
    },
    school: {
      type: 'string',
      title: 'School',
      enum: ['', 'HCMUIT', 'HCMUTE', 'HCMUS']
      // "enumNames": ["Select your school", "HCMUIT", "HCMUTE", "HCMUS"]
      // "oneOf": [
      //   { "const": "", "title": "Select you shool" },
      //   { "const": "HCMUIT", "title": "HCMUIT" },
      //   { "const": "HCMUTE", "title": "HCMUTE" },
      //   { "const": "HCMUS", "title": "HCMUS" }
      // ]
    },
    ex: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      },
      // "items": { $ref: '#/definitions/myex' },
      additionalItems: {
        type: 'boolean'
      }
    },
    favorite: {
      type: 'array',
      title: 'A multiple-choice list',
      items: {
        type: 'string'
        // "enum": ['football', 'baseketball', 'badminton', 'swimming'],
      },
      minItems: 1,
      maxItems: 3,
      uniqueItems: true
    }
  },

  dependencies: {
    school: {
      oneOf: [
        {
          properties: {
            school: {
              enum: ['']
            }
          }
        },
        {
          properties: {
            school: {
              enum: ['HCMUIT', 'HCMUTE', 'HCMUS']
            },
            major: {
              type: 'string',
              title: 'Major',
              enum: ['', 'Software Engineering', 'Computer Science', 'Information Technology']
              //   enumNames: ['Select you major', 'Software Engineering', 'Computer Science', 'Information Technology']
            }
          },
          required: ['major']
        }
      ]
    }
  }
}

export default schema
