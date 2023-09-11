import { Flex, Stack, Box, Icon,
    Accordion, AccordionItem, AccordionButton, AccordionPanel} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import CardsAccount from "./AccountCard"
import AddAccount from './AddAccount'
import { useState } from 'react'

import Accounts from "../bankaccounts.json"

export default function Account(){
    let [cuentas, setCuentas] = useState(Accounts)
    return(
        <Stack align="center" width="90%" margin="1" border="0.5px">
            <button onClick={() => console.log(cuentas)}>Mostrar cuentas</button>
            <Accordion allowToggle width="95%">
                <AccordionItem>
                    <AccordionButton bg="gray" _expanded={{bg: "gray.100"}} padding="15px" borderRadius="3px">
                        <Box as="span" flex='1' textAlign='left'/>
                        <Icon as={AddIcon}/>
                    </AccordionButton>
                    <AccordionPanel>
                        <AddAccount cuentas={cuentas} setCuentas={setCuentas}/>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Flex wrap="wrap" gap="15px" justify="center" width="100%">
                <CardsAccount cuentas={cuentas} setCuentas={setCuentas}/>
            </Flex>
        </Stack>
    )
}