import react, {Component} from "react";

class Form extends Component {

    constructor(props){

        super(props)

        this.state = {

            name: "",
            nota: ""
        }
    }

             

        handleImputChange(e) {

            this.setState({
                name: e.target.value
            }
            )

    }
     
     render() {
        const {name} = this.state
        return (
    
            <section>

            <form>
            <label>
            Qual seu Nome?
            <input onChange={this.handleImputChange} type="text" placeholder="Nome"/>
            </label>
            {/* <button type="submit">Enviar</button> */}
            </form>


            <form>
            <label>
            Qual sua idade?
            <input onChange={this.handleImputChange} type="text" placeholder="Idade"/>
            </label>
            {/* <button type="submit">Enviar</button> */}
            </form>

            <form>
            <label>
            Qual seu E-mail?
            <input onChange={this.handleImputChange} type="text" placeholder="Email"/>
            </label>
            {/* <button type="submit">Enviar</button> */}
            </form>

            <form>
            <label>
            Escolaridade?
            <input onChange={this.handleImputChange} type="text" placeholder="Escolaridade"/>
            </label>
            {/* <button type="submit">Enviar</button> */}
            </form>
            <button type="submit">Enviar</button>
            <h3> {name}  </h3>
            </section>
    
        )
        }

}


export default Form;