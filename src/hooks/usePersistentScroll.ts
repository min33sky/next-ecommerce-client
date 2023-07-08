import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const usePersistentScroll = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const persistentScroll = localStorage.getItem("persistentScroll");
    if (persistentScroll === null) return;

    window.scrollTo({ top: Number(persistentScroll) });

    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem("persistentScroll");
  }, [searchParams]);

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("persistentScroll", window.scrollY.toString());
  }, []);

  const setSearchParam = useCallback(
    (key: string, value: string) => {
      const currentParams = searchParams?.toString();
      const params = new URLSearchParams(currentParams);

      params.set(key, value);

      if (currentParams === params.toString()) return;

      saveScrollPosition();
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router, saveScrollPosition],
  );

  return { setSearchParam, saveScrollPosition };
};
