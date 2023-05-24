import { useState } from "react"
import styles from '../button.module.css'

export default function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <body>
      <div className="container">
        <h1>Meu Contador: {contador}</h1>
        <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      </div>
    </body>
  );
}
