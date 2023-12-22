import clsx from 'clsx';

interface ButtonProps {
  handler: () => void;
  content: string;
  color: string;
  submit?: boolean;
  outline?: boolean;
  disabled?: boolean;
}

function Button({
  handler,
  content,
  color,
  submit,
  outline,
  disabled,
}: ButtonProps) {
  const buttonClassName = clsx('w-full rounded-lg h-12', {
    [`border-2 border-${color} text-${color}`]: outline,
    [`bg-${color} border-none text-white`]: !outline,
    'disabled:pointer-events-none bg-disabled': disabled,
  });

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      onClick={handler}
    >
      {content}
    </button>
  );
}

export default Button;
