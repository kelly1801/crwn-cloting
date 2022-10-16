import {DirectoryItemContainer, Category, Body} from "./Directory-item.styles.js";
import { useNavigate } from "react-router-dom";


function DirectoryItem({ category}) {

    const {imageUrl,title} = category
   const navigate = useNavigate()
    
   const onNavigateHandler = () => navigate(`shop/${title}`)
   return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      
      <Category bgImage={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
