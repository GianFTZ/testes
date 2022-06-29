import { Button, FormControl, FormErrorMessage, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { FiBookOpen, FiCheck } from "react-icons/fi"

const FormsC = () => {
    const [campos, setCampos] = useState<any[]>([
        {
          nome: "a",
          price: "123"
        }
      ])
    const addCampos = (name: string, price: number) => {
        const newCampo = {
          nome: name,
          price: price
        }
        const newItems = [
          ...campos,
          newCampo
        ]
        setCampos(newItems)
      }

    function validateName(value) {
        let error
        if (value.length <= 3) {
          error = 'Digite um nome com mais de 3 letras!'
        }
        return error
      }

    return(
        <Formik
      initialValues={{ name: 'joao', value: 10 }}
      onSubmit={(values, actions) => {
      setTimeout(() => {
      addCampos(values.name, values.value)
      actions.setSubmitting(false)
      }, 1000)}}>
    {(props) => (
      <Form>
        <Field name='name' validate={validateName}>
         {({ field, form }) => (
          <FormControl isInvalid={form.errors.name && form.touched.name}>
            <FormLabel color="white" htmlFor='name'>Nome do Campo</FormLabel>
              <Input {...field} id='name' placeholder='name' />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              <FormLabel paddingTop={3} color="white" htmlFor='name'>Preço do Campo</FormLabel>
              <NumberInput max={50} min={10}>
                <NumberInputField {...field} id='price' placeholder='15' />
                 <NumberInputStepper>
                   <NumberIncrementStepper /><NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
          </FormControl>)}
        </Field>
          <Stack paddingTop={3} direction='row' spacing={3.5}>
            <Button leftIcon={<FiCheck />} colorScheme='pink' variant='solid' isLoading={props.isSubmitting} type='submit' width={250} >
              Cadastrar
            </Button>
            <Button rightIcon={<FiBookOpen />} colorScheme='pink' variant='outline' width={250} onClick={() => { alert(JSON.stringify(campos, null, 2)) }}>cadastros</Button>
          </Stack>
      </Form>)}
    </Formik>
    )
}

export default FormsC