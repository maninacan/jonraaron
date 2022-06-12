import classNames from 'classnames';

export interface IconButtonProps {
  onClick?: () => void;
  iconName: string;
  className?: string;
  iconClassName?: string;
}

export function IconButton({
  onClick,
  iconName,
  className,
  iconClassName,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className="rounded-full p-3 shadow hover:shadow-black dark:hover:shadow-white"
      onClick={onClick}
    >
      <div className={className}>
        <i className={classNames(iconName, iconClassName)} />
      </div>
    </button>
  );
}

IconButton.defaultExports = {
  onClick: () => null,
  className: '',
  iconClassName: '',
};

export default IconButton;
