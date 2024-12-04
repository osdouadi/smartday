import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "next-intl";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteCategory } from "@/queries/category";
import { constants } from "@/config/constants";

interface CategoryActionsCellProps {
  categoryId: string;
}

const CategoryActionsCell: React.FC<CategoryActionsCellProps> = ({
  categoryId,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");

  const handleDeleteCategoryById = async (categoryId: string) => {
    try {
      await deleteCategory(categoryId);
      router.refresh();
      toast({
        title: tResponse("deleteSuccess"),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponse("deleteFail"),
        description: tResponse("pleaseTryAgain"),
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem>
          <Link
            href={`${constants.links.adminUpdateCategory}${categoryId}`}
          >
            {tCallToAction("editCategory")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDeleteCategoryById(categoryId)}
          className="cursor-pointer"
        >
          {tCallToAction("deleteCategory")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryActionsCell;
