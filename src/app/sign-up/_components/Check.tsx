import { COLOR } from '@/styles/color';
import { CheckCircle } from 'lucide-react';

function Check({ isChecked }: { isChecked?: boolean }) {
  return isChecked ? (
    <CheckCircle color={COLOR.grey400} strokeWidth={0.5} />
  ) : (
    <CheckCircle color={COLOR.primary} strokeWidth={0.5} />
  );
}

export default Check;
