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
import { deleteContact } from "@/queries/contact";
import { constants } from "@/config/constants";

interface ContactActionsCellProps {
  contactId: string;
}

const ContactActionsCell: React.FC<ContactActionsCellProps> = ({
  contactId,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");

  const handleDeleteOrderById = async (id: string) => {
    try {
      await deleteContact(id);
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
          <Link href={`${constants.links.adminViewContact}${contactId}`}>
            {tCallToAction("viewOrder")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDeleteOrderById(contactId)}
          className="cursor-pointer"
        >
          {tCallToAction("deleteOrder")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ContactActionsCell;
