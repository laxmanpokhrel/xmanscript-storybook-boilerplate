interface IIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  className = '',
  iconClassName = 'material-symbols-outlined',
  onClick,
  ...rest
}: IIconProps): JSX.Element {
  return (
    <span role="presentation" className="flex h-fit items-center" onKeyUp={() => {}} onClick={onClick} {...rest}>
      <i
        className={`cursor-pointer select-none text-icon-sm duration-300
        lg:text-icon-md ${iconClassName} ${className}`}
      >
        {name}
      </i>
    </span>
  );
}
