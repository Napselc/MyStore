import { DirectoryItemContainer, Body, BackgroundImage } from "./direcrory-item.styles";


const DirectoryItem = (props) => {
    return (
        <DirectoryItemContainer>
          <BackgroundImage imageUrl = {props.category.imageUrl}/>
          <Body>
            <h2>{props.category.title}</h2>
            <p>Shop Now </p>
            </Body>
        </DirectoryItemContainer>
    );

} 

export default DirectoryItem;