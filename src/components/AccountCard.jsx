import { Card, CardHeader, CardBody, CardFooter, Text, Button, Divider, Stack } from '@chakra-ui/react'

function CardAccount({cuenta, cuentas, functionCuentas}){
    return(
        <Card key={cuenta.id} variant="outline" align="space-betwen" colorScheme='gray' width="30%">
            <CardHeader>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='2xl'>{cuenta.typeAccount}</Text>
                    <Button borderRadius="100%" onClick={() => deleteAccount(cuenta.id, cuentas, functionCuentas)}>X</Button>
                </Stack>
                </CardHeader>
            <Divider colorScheme="blackAlpha"/>
            <CardBody>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='3xl' color="gray" align="match-parent">Saldo</Text>
                    <Text fontSize='3xl' color="gray" align="match-parent">${cuenta.balance}</Text>
                </Stack>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='2x1' color="gray">Nro De Cuenta:</Text>
                    <Text fontSize='2x1' color="gray">{cuenta.numberAccount}</Text>
                </Stack>
            </CardBody>
            <CardFooter justify="end">
                <Button colorScheme='gray' variant='outline'>Transferir</Button>
            </CardFooter>
        </Card>
    )
}

function deleteAccount(id, cuentas, setCuentas){
    let filtroCuentas = cuentas.filter(c => c.id !== id)
    setCuentas(filtroCuentas)
}

function CardsAccount({cuentas, setCuentas}){
    const vista = []
    if(cuentas.length === 0) vista.push(<Text textAlign="center">No hay cuentas disponibles.</Text>)
    cuentas.forEach(c => vista.push(<CardAccount cuenta={c} cuentas={cuentas} functionCuentas={setCuentas}/>))

    return vista
}

export default CardsAccount