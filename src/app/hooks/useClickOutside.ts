import { RefObject, useEffect, useState } from "react";

export const useClickOutside = (ref: RefObject<HTMLDivElement | null>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const resetVisible = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Проверяем, кликнули ли мы вне нашего div
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isVisible, setIsVisible, resetVisible };
};
