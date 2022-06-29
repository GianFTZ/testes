import { useEffect, useMemo, useState } from "react"
import React from "react";
import FormsC from "../components/forms";
import { Container } from "@chakra-ui/react";


export default function Home() {
  useEffect(() => {
    console.log("entrou no site")
    setTimeout(() => {
      alert("Esse site tem o proposito de integrar uma api com o front-end, fique avontade para testa-lo")
    }, 2000)
  }, [])
return (
  <>
  <Container marginTop={70} padding={150} bg='blueviolet' borderRadius={10}>
    <FormsC />
  </Container>
  </>
  )
}
