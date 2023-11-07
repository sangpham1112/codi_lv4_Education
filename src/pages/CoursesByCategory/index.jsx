import { useQuery } from "@tanstack/react-query";
import { getCoursesByCategory } from "../../api/Courses";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import CoursesList from "./components/CoursesList";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import TabNavigate from "./components/TabNavigate";
import BackButton from "../../components/BackButton";
import Pagination from "../../components/Pagination";
import usePaginate from "../../hooks/usePaginate";
import { useEffect, useState } from "react";

const CoursesByCategory = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const grade = location.search;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", id, grade],
    queryFn: () => getCoursesByCategory(id, grade),
  });

  useEffect(() => {
    const availableCoures = data?.courses.filter(
      (course) => course.status == 1
    );
    setCourses(availableCoures);
  }, [data]);

  const { setCurrentPage, currentDataList, pageNumbers, currentPage } =
    usePaginate(courses);

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
      <TabNavigate allGrade={data?.all_grade} />
      <hr className="w-50 mx-auto" />
      <Title title="Khoá học" desc={`Các khoá học ` + data?.category_name} />
      <CoursesList courses={currentDataList} />
      {pageNumbers > 1 && (
        <Pagination
          totalPages={pageNumbers}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default CoursesByCategory;
