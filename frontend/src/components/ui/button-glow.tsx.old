import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface SyncPointerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  x: number;
  y: number;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant: 'default' | 'destructive';
}

interface SyncPointerFunction {
  (
    pointerProps: Omit<SyncPointerProps, 'className' | 'asChild'> & {
      className?: string;
      asChild?: boolean;
      xCoord: number;
      yCoord: number;
      size: number;
      variant: string;
      children: React.ReactNode | null;
    }
  ): void
}


/**
 * This function syncs the pointer position with the provided coordinates.
 * @param pointerProps - The props for the sync pointer operation.
 */
const syncPointer: SyncPointerFunction = ({
  x: pointerX,
  y: pointerY,
  size: pointerSize,
  variant: pointerVariant,
  className: pointerClassName,
  asChild: pointerAsChild,
  children: pointerChildren,
}) => {
  const { x: initialX, y: initialY, size, variant, className, asChild }: SyncPointerProps = {
    x: pointerX,
    y: pointerY,
    size: pointerSize,
    variant: pointerVariant,
    className: pointerClassName,
    asChild: pointerAsChild,
    children: null,
  };

  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
  document.documentElement.style.setProperty('--yp', yp);
};

const SyncPointer = React.forwardRef<HTMLButtonElement, SyncPointerProps>(
  ({ variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const listener = useCallback((event: PointerEvent) => {
      syncPointer({ x: event.clientX, y: event.clientY });
    }, []);

    useEffect(() => {
      listenerRef.current = listener;
    }, [listener]);

    useEffect(() => {
      const debouncedListener = (event: PointerEvent) => {
        if (listenerRef.current) {
          listenerRef.current(event);
        }
      };

      document.body.addEventListener('pointermove', debouncedListener);

      return () => {
        document.body.removeEventListener('pointermove', debouncedListener);
      };
    }, []);

    const buttonStyles = useMemo(
      () =>
        css`
          border-radius: 1rem;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.1ch;
          background: var(--bg);
          border: 4px solid transparent;
          box-shadow: 0 1px hsl(0 0% 100% / 0.15) inset;
          cursor: pointer;
          background: linear-gradient(var(--bg), var(--bg)) paddingBox,
            var(--glow),
            linear-gradient(black, black) border-box;
          transition: backgroundSize 0.24s;
          touch-action: none;
          position: relative;
          padding: 1rem 2rem;
        ` as SerializedStyles,
      []
    );

    const listenerRef = useRef<(event: PointerEvent) => void>();
    return (
      <Comp
        className={cn(buttonVariants({ style, variant, size, className, ref , children}))}
        style={{
          background: 'var(--background)',
          color: 'var(--foreground)',
          boxShadow: '0px 0px 105px 45px rgba(45,255,196,0.9)',
          width: '100px',
          height: '100px',
          left: '0',
          top: '0',
          transform: 'translate(0, 0)',
          ...buttonStyles
        }}
        ref={ref}
        children={children}
        size={size}
        style={style}
        variant={variant}
        {...props}
      />
    );
  }
);


// Helper components/functions are not provided in the original snippet.
// Assuming Slot is a component and cn, buttonVariants are functions returning string or something similar.

export default SyncPointer;