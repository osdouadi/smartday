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
import { deleteBlog } from "@/queries/blog";
import { constants } from "@/config/constants";
import Link from "next/link";

interface BlogActionsCellProps {
  blogId: string;
}

const BlogActionsCell: React.FC<BlogActionsCellProps> = ({ blogId }) => {
  const router = useRouter();
  const { toast } = useToast();
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");

  const handleDeleteBlogById = async (blogId: string) => {
    try {
      await deleteBlog(blogId);
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
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={`${constants.links.adminUpdateBlog}${blogId}`}>
            {tCallToAction("editBlog")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDeleteBlogById(blogId)}
          className="cursor-pointer"
        >
          {tCallToAction("deleteBlog")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BlogActionsCell;
