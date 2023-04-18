import "./directory.styles.scss"
import DirectoryItem from "../direcrory-item/direcrory-item.component";
const Directory = (props) => {
     return (
        <div className = "directory-container">
       {props.categories.map((category) => (
        <DirectoryItem key = {category.id} category = {category}></DirectoryItem>
       ))} 
    </div>
     )
}

export default Directory;