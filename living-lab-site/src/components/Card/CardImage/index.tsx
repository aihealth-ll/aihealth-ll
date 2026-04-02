import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
interface CardImageProps {
  className?: string;
  style?: CSSProperties;
  cardImageUrl: string;
  alt: string;
  title: string;
}
const CardImage: React.FC<CardImageProps> = ({
  className,
  style,
  cardImageUrl,
  alt,
  title,
}) => {
  const generatedCardImageUrl = useBaseUrl(cardImageUrl);
  return (
    <img
      className={clsx('card__image', className)}
      style={{ width: '100%', height: '250px', objectFit: 'cover', ...style }}
      src={generatedCardImageUrl} alt={alt} title={title}
    />
  );
};
export default CardImage;