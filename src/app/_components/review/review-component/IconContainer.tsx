import * as React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { IconContainerProps } from '@mui/material';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { COLOR } from '@/styles/color';

export const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentSatisfiedOutlinedIcon sx={{ color: COLOR.primary }} />,
    label: '흥미진진',
  },
  2: {
    icon: <ThumbUpOutlinedIcon color="primary" />,
    label: '나이스',
  },
  3: {
    icon: <TipsAndUpdatesOutlinedIcon sx={{ color: COLOR.star }} />,
    label: '도움이 돼요',
  },
  4: {
    icon: <FavoriteOutlinedIcon color="error" />,
    label: '공감해요',
  },
  5: {
    icon: <SentimentDissatisfiedOutlinedIcon color="error" />,
    label: '화나요',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value]?.icon}</span>;
}

export default IconContainer;
