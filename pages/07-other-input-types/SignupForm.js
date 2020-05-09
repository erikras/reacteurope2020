import React from 'react'
import { Form, Field } from 'react-final-form'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Implement a checkbox for a boolean, a set of
 * checkboxes for an array, a radio button, a single select,
 * and a multiple select.
 *
 * We are ignoring validation and going back to the
 * component="input" pattern.
 */
export default function SignupForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <h3>Do you agree to the terms?</h3>
          <div>
            <div>
              <label>
                <Field name="agreed" component="input" type="checkbox" /> Yes
              </label>
            </div>
          </div>
          <h3>Which months have 30 days?</h3>
          <div>
            {months.map((month) => (
              <div>
                <label>
                  <Field
                    name="months"
                    component="input"
                    type="checkbox"
                    value={month}
                  />{' '}
                  {month}
                </label>
              </div>
            ))}
          </div>
          <h3>This workshop is amazing</h3>
          <div>
            <div>
              <label>
                <Field name="rating" component="input" type="radio" value="5" />{' '}
                Strongly Agree
              </label>
            </div>
            <div>
              <label>
                <Field name="rating" component="input" type="radio" value="4" />{' '}
                Agree
              </label>
            </div>
            <div>
              <label>
                <Field name="rating" component="input" type="radio" value="3" />{' '}
                Meh
              </label>
            </div>
            <div>
              <label>
                <Field name="rating" component="input" type="radio" value="2" />{' '}
                Disagree
              </label>
            </div>
            <div>
              <label>
                <Field name="rating" component="input" type="radio" value="1" />{' '}
                Strongly Disagree
              </label>
            </div>
          </div>
          <h3>Favorite Simpson?</h3>
          <div>
            <Field name="favoriteSimpson" component="select">
              <option />
              <option value="bart">Bart</option>
              <option value="lisa">Lisa</option>
              <option value="maggie">Maggie</option>
              <option value="marge">Marge</option>
              <option value="homer">Homer</option>
              <option value="grandpa">Grandpa</option>
            </Field>
          </div>
          <h3>Toppings</h3>
          <div>
            <Field name="toppings" component="select" multiple>
              <option value="pepperoni">Pepperoni</option>
              <option value="sausage">Sausage</option>
              <option value="ham">Ham</option>
              <option value="mushrooms">Mushrooms</option>
              <option value="olives">Olives</option>
              <option value="pineapple">Pineapple</option>
            </Field>
          </div>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  )
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
