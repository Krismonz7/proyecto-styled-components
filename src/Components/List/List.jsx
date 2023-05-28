import React from "react";
import { Box , Btn} from "../UI";
import { lista } from "../../info";
import { Card } from "../Card/Card";


export const List = () => {

  return (
    <Box>

      Lista:

      {
        lista.cargos.map((cargo,i)=>(
          <Card key={i} cargo={cargo}>
          </Card>
        ))
      }

      <Btn>Ver mas</Btn>
    </Box>
  )
}

