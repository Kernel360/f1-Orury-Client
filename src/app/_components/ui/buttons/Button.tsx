import clsx from 'clsx';

interface ButtonProps {
  handler: () => void;
  content: string;
  color: string;
  outline?: boolean;
}

function Button({ handler, content, color, outline }: ButtonProps) {
  const buttonClassName = clsx('w-full rounded-lg', {
    [`border-2 border-${color} text-${color}`]: outline,
    [`bg-${color} border-none text-white`]: !outline,
  });

  return (
    <button className={buttonClassName} type="button" onClick={handler}>
      {content}
    </button>
  );
}

export default Button;
