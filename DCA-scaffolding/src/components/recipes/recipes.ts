import { addObserver, appState } from "../../store";

class Recipes extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML="";

        appState.recipe.forEach((r: any) =>{
            const rContainer = this.ownerDocument.createElement('section');
            const recipeName = this.ownerDocument.createElement('h2');
            recipeName.textContent = r.name;

            const rIngredients = this.ownerDocument.createElement('section');
            const recipeIngredients = this.ownerDocument.createElement('p');
            recipeIngredients.textContent = r.ingredients;
        
            const rInstructions = this.ownerDocument.createElement('section');
            const recipeInstructions = this.ownerDocument.createElement('p');
            recipeInstructions.textContent = r.instructions;

            const rImage = this.ownerDocument.createElement('section');
            const recipeImage = this.ownerDocument.createElement('image');
            recipeImage.textContent = r.image;

            rContainer?.appendChild(recipeName);
            rIngredients?.appendChild(recipeIngredients);
            rInstructions?.appendChild(recipeInstructions);
            rImage?.appendChild(recipeImage);
            this.shadowRoot?.appendChild(rContainer);
        })
    }
}

customElements.define('my-recipes', Recipes)
export default Recipes;