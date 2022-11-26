import {render, h} from "vue";

window.React = {createElement:h};

const VueRoot = require("/src/presenters/VueRoot.js").default;

render( 
    <VueRoot/>, document.getElementById('root')
);
