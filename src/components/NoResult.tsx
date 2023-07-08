import { SearchX } from "lucide-react";

export default function NoResult() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-4 text-slate-500">
      <SearchX size={48} className="mb-4 text-slate-400" />
      검색 대상을 찾을 수 없습니다.
    </div>
  );
}
