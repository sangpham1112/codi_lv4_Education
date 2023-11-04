import { useQuery } from "@tanstack/react-query";
import { getEducations } from "../api/Educations";
import { useMemo } from "react";

export const Navigations = () => {
  const { data } = useQuery({
    queryKey: "educations",
    queryFn: getEducations,
  });

  const educations = useMemo(
    () =>
      data?.educations.data.map((item) => ({
        name: item.name,
        to: "/loai-dao-tao/" + item.id,
      })),
    [data]
  );

  const navigation = [
    {
      name: "Khoá học",
      children: educations,
    },
    {
      name: "Giảng viên",
      to: "/giang-vien",
    },
  ];

  return navigation;
};
