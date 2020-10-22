export default function ValidateInfo(values) {
  let errors = {}

  if(!values.username.trim()) {
    errors.username = "Username required"
  }

  if(!values.email) {
    errors.email = "Email required"
  }

  if(!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 4) {
    errors.password = "Password needs to be 4 characters or more"
  }

  if(!values.password2) {
    errors.password2 = "Password is required"
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match"
  }

  return errors;
}
