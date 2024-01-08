import { IconChipListProps } from '@/types/map/ReviewProps';
import IconContainer from '@/app/service/map/_components/Review/IconContainer';
import { Chip, Stack } from '@mui/material';
import { v4 } from 'uuid';

function IconChipList({ item }: IconChipListProps) {
  return (
    <Stack className="mt-2" direction="row" spacing={1}>
      {item.map(value => {
        const { count, level } = value;
        return (
          <Chip
            key={v4()}
            className="shadow p-1"
            avatar={<IconContainer value={level} />}
            variant="outlined"
            label={count}
          />
        );
      })}
    </Stack>
  );
}

export default IconChipList;
