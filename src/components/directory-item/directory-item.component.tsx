import { useNavigate } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';
import { DirectoryCategory } from '../directory/directory.component';

export type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
