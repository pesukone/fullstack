import React from 'react'

const summa = (osat) => osat.reduce((yht, iter) => yht + iter.tehtavia, 0)

const Yhteensa = ({ osat }) => <p>yhteensä {summa(osat)} tehtävää</p>

export default Yhteensa
