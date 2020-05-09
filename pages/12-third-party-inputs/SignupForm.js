import React from 'react'
import { Form, Field } from 'react-final-form'
import validate from './validate'
import {
  Paper,
  Grid,
  Button,
  Checkbox,
  InputLabel,
  Radio,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Select,
  TextField,
} from '@material-ui/core'
import onSubmit from '../../common/onSubmit'

const AdaptedTextInput = ({ input, meta, ...rest }) => (
  <TextField
    {...rest}
    {...input}
    helperText={meta.touched && meta.error ? meta.error : undefined}
    error={meta.touched && meta.error}
  />
)

const AdaptedCheckbox = ({ input, meta, ...rest }) => (
  <Checkbox {...input} {...rest} />
)

const AdaptedSelect = ({ input, meta, fullWidth, label, ...rest }) => (
  <FormControl fullWidth={fullWidth} error={meta.touched && meta.invalid}>
    <InputLabel htmlFor={input.name}>{label}</InputLabel>
    <Select {...input} {...rest} fullWidth={fullWidth} />
    {meta.touched && meta.error && (
      <FormHelperText>{meta.error}</FormHelperText>
    )}
  </FormControl>
)

const AdaptedRadio = ({ input, meta, ...rest }) => (
  <Radio {...input} {...rest} />
)

/**
 * Objective: Convert this form to use Material-UI inputs.
 *
 * https://material-ui.com/components/text-fields/
 * https://material-ui.com/components/checkboxes/
 * https://material-ui.com/components/radio-buttons/
 * https://material-ui.com/components/selects/
 * https://material-ui.com/components/buttons/
 *
 * For bonus points, display validation errors using
 * Material-UI's API for displaying errors on text
 * and select fields.
 */
export default function SignupForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={{ tshirtColor: '#ff0000' }}
    >
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Paper style={{ padding: 16, maxWidth: 500, margin: '20px auto' }}>
            <Grid container spacing={50}>
              <Grid item xs={12}>
                <Field
                  component={AdaptedTextInput}
                  type="text"
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={AdaptedTextInput}
                  type="text"
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Field
                      name="tshirt"
                      component={AdaptedCheckbox}
                      type="checkbox"
                      color="primary"
                      fullWidth
                    />
                  }
                  label="T-Shirt?"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="tshirtSize"
                  component={AdaptedSelect}
                  label="T-Shirt Size"
                  placeholder="T-Shirt Size"
                  fullWidth
                  disabled={!values.tshirt}
                >
                  <MenuItem value="xs">Extra Small</MenuItem>
                  <MenuItem value="s">Small</MenuItem>
                  <MenuItem value="m">Medium</MenuItem>
                  <MenuItem value="l">Large</MenuItem>
                  <MenuItem value="xl">Extra Large</MenuItem>
                </Field>
              </Grid>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">T-Shirt Color</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      label="Red"
                      control={
                        <Field
                          name="tshirtColor"
                          component={AdaptedRadio}
                          type="radio"
                          value="#ff0000"
                          disabled={!values.tshirt}
                        />
                      }
                    />
                    <FormControlLabel
                      label="Green"
                      control={
                        <Field
                          name="tshirtColor"
                          component={AdaptedRadio}
                          type="radio"
                          value="#00ff00"
                          disabled={!values.tshirt}
                        />
                      }
                    />
                    <FormControlLabel
                      label="Blue"
                      control={
                        <Field
                          name="tshirtColor"
                          component={AdaptedRadio}
                          type="radio"
                          value="#0000ff"
                          disabled={!values.tshirt}
                        />
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                Submit
              </Button>
            </Grid>
          </Paper>
          <Paper style={{ padding: 16, maxWidth: 500, margin: '20px auto' }}>
            <pre>{JSON.stringify(values, undefined, 2)}</pre>
          </Paper>
        </form>
      )}
    </Form>
  )
}
