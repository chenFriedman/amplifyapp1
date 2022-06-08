import {IconButton, Tooltip, Avatar} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function CoinButtons (Props : props) {

  const isUSD = Props.selectedCoin === 'USD';
  const coinTooltip = isUSD ? 'Set coin to ILS' : 'Set coin to USD';

  return (
    <Tooltip title={coinTooltip}>
      <IconButton size='large' onClick={() => Props.updateSelectedCoin() }>
          {isUSD && <Avatar alt='ils' src='/shekel.png' sx={{ width: 24, height: 24 }}/>}
          {!isUSD && <MonetizationOnIcon sx={{ color: 'black' }} />}
      </IconButton>
    </Tooltip>
  );
}

interface props {
  selectedCoin: String ;
  updateSelectedCoin: () => void;
}
