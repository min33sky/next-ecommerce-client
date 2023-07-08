import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import Filters from "./Filters";

interface Props {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilters({ sizes, colors }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className="lg:hidden">
          <Plus size={16} className="mr-2" />
          필터
        </Button>
      </SheetTrigger>
      {/* @ts-expect-error */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>상품 필터링</SheetTitle>
          <SheetDescription>
            원하는 조건으로 검색할 수 있습니다.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <Filters valueKey="size" name="사이즈" data={sizes} />
          <Filters valueKey="color" name="색상" data={colors} />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">확인</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
