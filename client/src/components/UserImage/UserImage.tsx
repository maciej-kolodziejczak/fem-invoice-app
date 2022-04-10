import s from './UserImage.module.scss';

type UserImageProps = {
  src: string;
}

export function UserImage({ src }: UserImageProps) {
  return (
    <div className={s.root}>
      <img src={src} alt='' />
    </div>
  )
}