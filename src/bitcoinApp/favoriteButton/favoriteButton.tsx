import StarIcon from '@mui/icons-material/Star';
import {IconButton, Tooltip} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function FavoriteButton (Props : props) {

  const favoriteaTooltip = Props.isFavorite ? 'remove selected date from favorits' : 'add selected date to favorits'

  return (
    <Tooltip title={favoriteaTooltip}>
      <IconButton onClick={()=>{Props.updateIsFavorite()}} size="large">
          {Props.isFavorite && <StarIcon />}
          {!Props.isFavorite && <StarOutlineIcon />}
      </IconButton>
  </Tooltip>
  );
}

interface props {
  isFavorite: Boolean ;
  updateIsFavorite: () => void;
}
