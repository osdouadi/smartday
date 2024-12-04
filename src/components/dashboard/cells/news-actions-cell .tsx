import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { deleteNews } from "@/queries/news";

interface NewsActionsCellProps {
  newsId: string;
}

const NewsActionsCell: React.FC<NewsActionsCellProps> = ({ newsId }) => {
  const router = useRouter();
  const { toast } = useToast();
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");

  const handleDeleteNewsById = async (id: string) => {
    try {
      await deleteNews(id);
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
    <Button
      onClick={() => handleDeleteNewsById(newsId)}
      className="cursor-pointer text-white"
    >
      {tCallToAction("deleteNews")}
    </Button>
  );
};

export default NewsActionsCell;
