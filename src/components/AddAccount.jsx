import { Stack, Select, Input, InputGroup, InputLeftAddon, Button} from "@chakra-ui/react"
import { useState } from "react"

function AddAccount({cuentas, setCuentas}){
    let [select, setSelect] = useState()
    let [inpMon, setInpMon] = useState(0)

    return(
        <Stack>
            <Select value={select} placeholder="Tipo de Cuenta" onChange={e => setSelect(e.target.value)}>
                <option value="Caja De Ahorro">Caja de Ahorro</option>
                <option value="Cuenta Sueldo">Cuenta Sueldo</option>
                <option value="Cuenta Corriente">Cuenta Corriente</option>
                <option value="Cuenta Prestamo">Cuenta Prestamo</option>
            </Select>
            <InputGroup>
                <InputLeftAddon children='$' />
                <Input placeholder='Cantidad Cuenta' value={inpMon} onChange={e => setInpMon(e.target.value)}/>
            </InputGroup>
            <Button colorScheme='blue' onClick={() => funcionCuenta(select, inpMon, cuentas, setCuentas)}>Agregar Cuenta</Button>
        </Stack>
    )
}

function funcionCuenta(select, inpMon, cuentas, setCuentas){
    if(!select) return alert("Seleccione un tipo de cuenta.")
    if(!inpMon) return alert("Ingrese el valor para la cuenta")

    let codigo = Math.round(Math.random()*999999)
    let codigoCuenta = `0323-${codigo} / 001`

    let cuenta = {"id": (cuentas.length + 1), "typeAccount": select, "numberAccount": codigoCuenta, "balance": inpMon}
    cuentas.push(cuenta)

    setCuentas(cuentas)
}

export default AddAccount