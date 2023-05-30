import { dispatch } from "../../store";
import { saveRecipe } from "../../store/actions";
import { Recipe } from "../../types/recipe";

const userInputs: Recipe = {
    name: "",
    ingredients: "",
    instructions: "",
    image:"",
}

class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const Name = this.ownerDocument.createElement('label');
        Name.textContent = "Name";
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e: any) =>{
            userInputs.name = e.target.value;
        })

        const Ingredients = this.ownerDocument.createElement('label');
        Ingredients.textContent = "Ingredients";
        const ingredients = this.ownerDocument.createElement('input');
        ingredients.type ="string";
        ingredients.addEventListener("change", (e: any) =>{
            userInputs.ingredients = e.target.value;
        })

        const Instructions = this.ownerDocument.createElement('label');
        Instructions.textContent = "Instrucions";
        const instructions = this.ownerDocument.createElement('input');
        instructions.type ="string";
        instructions.addEventListener("change", (e: any) =>{
            userInputs.instructions = e.target.value;
        })

        const Image = this.ownerDocument.createElement('label');
        Image.textContent = "Image";
        const image = this.ownerDocument.createElement('input');
        image.type ="image";
        image.addEventListener("change", (e: any) =>{
            userInputs.image = e.target.value;
        })

        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Submit";
        btn.addEventListener("click", async ()=>{
            console.log(userInputs);
            dispatch(await saveRecipe(userInputs))
        })
        
        this.shadowRoot?.appendChild(Name);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(Ingredients);
        this.shadowRoot?.appendChild(ingredients);
        this.shadowRoot?.appendChild(Instructions);
        this.shadowRoot?.appendChild(instructions);
        this.shadowRoot?.appendChild(Image);
        this.shadowRoot?.appendChild(image)
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('my-form', Form);
export default Form;