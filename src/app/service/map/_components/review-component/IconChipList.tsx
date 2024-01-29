import { IconChipListProps } from '@/types/map/ReviewProps';
import IconContainer from '@/app/service/map/_components/review-component/IconContainer';
import { Chip, Stack } from '@mui/material';
import { v4 } from 'uuid';
import { useMemo } from 'react';

export enum IconChip {
  interest = 1,
  like = 2,
  help = 3,
  thumb = 4,
  angry = 5,
}

function getItem(
  item: {
    type: 'help' | 'interest' | 'like' | 'thumb' | 'angry';
    count: number;
  }[],
  myReaction: string | null,
) {
  if (!myReaction) {
    return item;
  }

  return item.map(value => {
    if (value.type === myReaction) {
      return {
        ...value,
        count: value.count + 1,
      };
    }
    return value;
  });
}

function IconChipList({ item, myReaction }: IconChipListProps) {
  const newItem = useMemo(
    () => getItem(item, myReaction),
    [item, myReaction],
  ).sort((a, b) => b.count - a.count);
  return (
    <Stack className="mt-2" direction="row" spacing={1}>
      {newItem
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
