import Input from './Input'
import Button from './Button'
import useInput from '../hooks/use-input'

function CheckoutForm(props) {
  const {
    value: firstName,
    valueTouched: firstNameTouched,
    valueIsValid: firstNameIsValid,
    valueHasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    valueReset: firstNameReset,
  } = useInput((value) => value.trim() !== '')
  const {
    value: lastName,
    valueTouched: lastNameTouched,
    valueIsValid: lastNameIsValid,
    valueHasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    valueReset: lastNameReset,
  } = useInput((value) => value.trim() !== '')
  const {
    value: email,
    valueTouched: emailTouched,
    valueIsValid: emailIsValid,
    valueHasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    valueReset: emailReset,
  } = useInput((value) => value.trim().includes('@'))
  const {
    value: address,
    valueTouched: addressTouched,
    valueIsValid: addressIsValid,
    valueHasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
    valueReset: addressReset,
  } = useInput((value) => value.trim() !== '')

  const formIsValid =
    firstNameIsValid && lastNameIsValid && emailIsValid && addressIsValid

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    firstNameTouched()
    lastNameTouched()
    emailTouched()
    addressTouched()

    if (!formIsValid) return

    firstNameReset()
    lastNameReset()
    emailReset()
    addressReset()

    await props.onSubmit({ firstName, lastName, email, address })
  }

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className='mt-8 flex w-full flex-wrap justify-between gap-y-4'>
          <Input
            label='First Name'
            errorMsg='First name cannot be empty!'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            hasError={firstNameHasError}
          />
          <Input
            label='Last Name'
            errorMsg='Last name cannot be empty!'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            hasError={lastNameHasError}
          />
          <Input
            label='Email'
            errorMsg='Email must include an @'
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            hasError={emailHasError}
          />
          <Input
            label='Street Address'
            errorMsg='Street address cannot be empty!'
            value={address}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            hasError={addressHasError}
          />
        </div>
        <div className='mt-4 flex justify-end gap-4'>
          <Button onClick={() => props.onDiscard()}>Discard</Button>
          <Button type='submit' primary={true}>
            Confirm
          </Button>
        </div>
      </form>
    </>
  )
}

export default CheckoutForm
