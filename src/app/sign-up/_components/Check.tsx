import { CheckCircle } from 'lucide-react';

function Check({ isChecked }: { isChecked?: boolean }) {
  return isChecked ? (
    <CheckCircle color="#96A2AC" strokeWidth={0.5} />
  ) : (
    <CheckCircle color="#96A2AC" strokeWidth={0.5} />
  );
}

export default Check;
