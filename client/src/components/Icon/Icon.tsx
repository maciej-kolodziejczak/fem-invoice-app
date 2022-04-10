import s from './Icon.module.scss';

type IconName =
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'calendar'
  | 'check'
  | 'delete'
  | 'moon'
  | 'plus'
  | 'sun';

type IconProps = {
  size: number;
  icon: IconName;
}

export function Icon({ size, icon }: IconProps) {
  return (
    <img className={s.root} src={`/icon-${icon}.svg`} alt={icon} width={size} />
  );
}