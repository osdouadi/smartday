import CategoryList from "@/components/site/category/category-list";
import { getCategoryList } from "@/queries/category";
import { SkeletonCard } from "@/components/global/skeleton-card";
import Error from "@/components/global/error";

const CategoryContainer: React.FC = async () => {
  let categoryData = [];
  let isLoading = true;
  let error = null;

  try {
    categoryData = await getCategoryList();
  } catch (err: any) {
    error = err.message;
  } finally {
    isLoading = false;
  }

  return (
    <section className="relative flex flex-col text-start gap-2 py-6 md:pb-0 md:py-12 px-5 md:px-7 lg:px-12 bg-transparent">
      {error ? (
        <Error />
      ) : (
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-7 md:gap-14">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <CategoryList
              categories={categoryData}
              isLoading={isLoading}
              error={error}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default CategoryContainer;
