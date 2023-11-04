import Banner from "../../components/Banner";
import Loading from "../../components/Loading";
import { getTeachers } from "../../api/Teacher";
import TeacherList from "./components/TeacherList";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../../components/BackButton";
import Pagination from "../../components/Pagination";
import usePaginate from "../../hooks/usePaginate";

const Teachers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });
  const teachers = data?.teachers;

  const { setCurrentPage, currentDataList, pageNumbers, currentPage } =
    usePaginate(teachers);

  // console.log(pageNumbers);
  return (
    <div className="container">
      <BackButton />
      <Banner title="Đội ngũ giáo viên tại Marathon Education">
        <span className="small-text">
          Giỏi chuyên môn - Giàu kinh nghiệm - Phương pháp dễ hiểu
        </span>
      </Banner>
      {isLoading && <Loading />}
      {isError && <span>{error.message}</span>}
      <TeacherList teachers={currentDataList} />
      {pageNumbers > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={pageNumbers}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Teachers;
