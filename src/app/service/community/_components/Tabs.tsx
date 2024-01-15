'use client';

import clsx from 'clsx';
import TABS from '@/constants/community/tabs';
import { usePostsState } from '@/store/community/postsStore';

function Tabs() {
  const { categoryId, setCategoryId } = usePostsState();

  const liClassName = (id: number) => {
    return clsx('flex  border-b-4', {
      'border-b-purple-600': categoryId === id,
      'border-b-white': categoryId !== id,
    });
  };

  const buttonClassName = (id: number) => {
    return clsx('w-full h-full flex justify-center items-center', {
      'text-disabled': categoryId !== id,
    });
  };

  const clickHandler = (id: number) => {
    setCategoryId(id);
  };

  return (
    <ul className="grid grid-cols-3 h-12 pt-1">
      {Object.values(TABS).map(tab => (
        <li key={tab.title} className={liClassName(tab.id)}>
          <button
            type="button"
            onClick={() => clickHandler(tab.id)}
            className={buttonClassName(tab.id)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
