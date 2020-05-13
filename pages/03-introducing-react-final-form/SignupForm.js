import React from 'react'
import onSubmit from '../../common/onSubmit'
import { Form, Field } from 'react-final-form'

/**
 * Objective: Rewrite our form using 🏁 React Final Form.
 * Ignore validation for now.
 *
 * Requirements:
 *  - It should call `onSubmit` when the form is submitted.
 */
export default function SignupForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {}
        if (!values.firstName) {
          errors.firstName = 'Required'
        }
        return errors
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName">
            {({ input, meta }) => (
              <div>
                <label htmlFor="firstName">First Name</label>
                <input {...input} placeholder="First Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              component="input"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              component="input"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  )
}
