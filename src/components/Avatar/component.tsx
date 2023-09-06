import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';

export default function Avatar() {
  return (
    <AvatarRoot>
      <AvatarImage
        src="./images/umerhassan.JPG"
        alt="Colm Tuite"
      />
      <AvatarFallback delayMs={600}>Umer Hassan's Avatar</AvatarFallback>
    </AvatarRoot>
  );
}

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 80,
  height: 80,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});