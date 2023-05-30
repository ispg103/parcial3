import "./components/export"
import { dispatch } from "./store";
import { getRecipes } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch(await getRecipes())
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('my-form');
        const recipes = this.ownerDocument.createElement('my-recipes');
        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(recipes);
    }
}

customElements.define('app-container', AppContainer)