import './App.module.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'


function App() {
  return(
    <>
      <Menu s1="Voltar 1" s2="Voltar 2" s3="Voltar 3"/>
      
      <main>
        <section id='s1'>
          primeiro
          <Btn text='Voltar Fodace' func="#s1"/>
          </section>
        <section id='s2'>
          segundo
          <Btn text='Voltar Vitor' func="#s1"/>
          </section>
        <section id='s3'>
          terceira
          <Btn text='Voltar com Bolsonaro' func="#s3"/>
          </section>
      </main>
    </>
  )
}

export default App