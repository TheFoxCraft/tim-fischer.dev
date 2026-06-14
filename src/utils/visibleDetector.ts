import { RefObject, useEffect, useState } from "react";

export function useVisible<T extends Element>(ref: RefObject<T | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible]);

  return visible;
}
