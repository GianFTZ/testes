import { useEffect, useMemo, useState } from "react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  Button,
  ButtonGroup,
  Stack
} from '@chakra-ui/react'

import { 
  FiCheck,
  FiBookOpen,
} from "react-icons/fi";
import { Field, Form, Formik } from "formik";
import React from "react";


export default function Home() {
  class HideController extends React.Component {
    constructor(props: any) {
      super(props);
      this.handleShowClick = this.handleShowClick.bind(this)
      this.handleHideClick = this.handleHideClick.bind(this)
      this.state = {isHide: true}
    }
    handleShowClick() {
      this.setState({isHide: false})
    }
    handleHideClick() {
      this.setState({isHide: true})
    }

    render() {
      const isHide = this.state.isHide
      let button: any;
        if(isHide) {
          button = <Button rightIcon={<FiBookOpen />} colorScheme='pink' variant='outline' width={250}>cadastros</Button>
        } else {
          button = <Button rightIcon={<FiBookOpen />} colorScheme='pink' variant='outline' width={250}>fechar</Button>
        }
        /* resto do codigo */
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
      
        useEffect(()=>{
          console.log("entrou no site")
          setTimeout(()=>{
            alert("Esse site tem o proposito de integrar uma api com o front-end, fique avontade para testa-lo")
          }, 2000)
        },[])
      
        useEffect(()=>{
          console.log("atualizou no banco")
        },[campos])
      
        useEffect(()=>{
          console.log("hide mudou")
        }, [])
      
        const manyCampos = useMemo(()=>{
          return campos.length
        }, [campos])
      
          function validateName(value) {
            let error
            if (value.length <= 3) {
              error = 'Digite um nome com mais de 3 letras!'
            // } else if (value.toLowerCase() !== 'naruto') {
            //   error = "Jeez! You're not a fan 😱"
            }
            return error
          }
          return (
            <>
            
            <Container marginTop={70} padding={150} bg='blueviolet' borderRadius={10}>
            <Formik
              initialValues={{ name: 'joao', value: 10 }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  addCampos(values.name, values.value)
                  /** sethide */
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
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
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                        </NumberInput>
                      </FormControl>  
                    )}
                  </Field>
                  {/* <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={props.isSubmitting}
                    type='submit'
                  >
                    Submit
                  </Button> */}
                  <Stack paddingTop={3} direction='row' spacing={3.5}>
                    <Button 
                    leftIcon={<FiCheck />}  
                    colorScheme='pink' 
                    variant='solid'
                    isLoading={props.isSubmitting}
                    type='submit'
                    width={250}
                    >
                      Cadastrar
                    </Button>
                    {button}
                  </Stack>
                </Form>
              )}
            </Formik>
            <div hidden={true}>
              <ul>
                {campos.map(campo =>(
                  <li>
                    <div>{campo.nome}</div>
                    <div>{campo.price}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div>
              Quantidade de campos cadastrados no banco: {manyCampos}
            </div> */}
            </Container>
            </>
          )
    }
  }
      
}
