import HomeView from "../views/HomeView.vue"


export default
function HomePresenter(props){

    return <HomeView greeting="hello" word={props.model.word}/>
}