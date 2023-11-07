import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/Banner";
import { getCategoriesByEducation } from "../../api/Categories";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import CategoriesList from "./components/CategoriesList";
import Title from "../../components/Title";
import BackButton from "../../components/BackButton";

const CategoriesByEducation = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories", id],
    queryFn: () => getCategoriesByEducation(id),
  });

  console.log(data?.categories);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <span>{error.message}</span>;
  }

  return (
    <div className="container">
      <BackButton />
      <Banner>
        <p className="lead mb-4">
          Marathon biên soạn bài giảng bám sát với chương trình của Bộ Giáo Dục,
          giúp học viên đạt thành tích học tập cao nhất.
        </p>
      </Banner>
      <Title title="Đào tạo" desc={data?.education_name} />
      <CategoriesList categoriesByEducation={data?.categories} />
    </div>
  );
};

export default CategoriesByEducation;
