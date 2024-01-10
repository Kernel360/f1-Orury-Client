import { IconChipListProps } from '@/types/map/ReviewProps';
import IconContainer from '@/app/service/map/_components/Review/IconContainer';
import { Chip, Stack } from '@mui/material';
import { v4 } from 'uuid';

export enum IconChip {
  interest = 1,
  like = 2,
  help = 3,
  thumb = 4,
  angry = 5,
}

function IconChipList({ item }: IconChipListProps) {
  return (
    <Stack className="mt-2" direction="row" spacing={1}>
      {item
        .filter(value => value.count !== 0)
        .map(value => {
          const { count, type } = value;
          return (
            <Chip
              key={v4()}
              className="shadow p-1"
              avatar={<IconContainer value={IconChip[type]} />}
              variant="outlined"
              label={count}
            />
          );
        })}
    </Stack>
  );
}

export default IconChipList;
