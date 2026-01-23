import React from "react";
import FashionBanner from "./FaishonBanner/FashionBanner";
import HomeSixCardSection from "./HomeSixCardSection/HomeSixCardSection";
// import { useLoaderData } from 'react-router';
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import HomeSlider from "../Components/Slider/HomeSlider";
import HomeStats from "./HomeStats";

const Home = () => {
  const axiosSecure = useAxios();

  const {
    data: homeData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["homeCard"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/latest-products`);
      return res.data;
    },
  });
  return (
    <div>
      <HomeSlider></HomeSlider>
      <HomeSixCardSection
        homeData={homeData}
        isLoading={isLoading}
      ></HomeSixCardSection>
      <HomeStats></HomeStats>

      <FashionBanner></FashionBanner>
    </div>
  );
};

export default Home;
