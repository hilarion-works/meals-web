'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
// import Chart from './chart';
// import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'

import Search from '~/components/widgets/Search';

let meals = [
  {
    idMeal: "52772",
    strMeal: "Teriyaki Chicken Casserole",
    strDrinkAlternate: null,
    strCategory: "Chicken",
    strArea: "Japanese",
    strInstructions: "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
    strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strTags: "Meat,Casserole",
    strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    strIngredient1: "soy sauce",
    strIngredient2: "water",
    strIngredient3: "brown sugar",
    strIngredient4: "ground ginger",
    strIngredient5: "minced garlic",
    strIngredient6: "cornstarch",
    strIngredient7: "chicken breasts",
    strIngredient8: "stir-fry vegetables",
    strIngredient9: "brown rice",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "3/4 cup",
    strMeasure2: "1/2 cup",
    strMeasure3: "1/4 cup",
    strMeasure4: "1/2 teaspoon",
    strMeasure5: "1/2 teaspoon",
    strMeasure6: "4 Tablespoons",
    strMeasure7: "2",
    strMeasure8: "1 (12 oz.)",
    strMeasure9: "3 cups",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null
  },
];

const urlMeals = "https://themealdb.com/api/json/v1/1";

// export const mealList: MealProps = () => {
export const MealDetail = () => {  
  const [keyword, setKeyword] = useState("");
  const [newMeals, setMeals] = useState([])
  const params = useParams()

  const getMeal = async () => {
    axios.get((urlMeals + "/lookup.php?i=" + params.id),
      // { headers: headerData }
    )
      .then((dataMeal) => {
        console.log("dataMeal: ", dataMeal);
        setMeals(dataMeal.data.meals);
        // console.log("newMeals: ", newMeals);
      })
      .catch((err) => {
        console.log("err catch: ", err);
      })
    // const response = await fetch(urlMeals);
    // console.log("response: ", response);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch data');
    // }
  };

  useEffect(() => {
    getMeal();
  }, [])

  
  return (
    <>
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div></div>
      <Grid numItemsSm={1} numItemsLg={1} className="gap-6">
        {
            newMeals !== null && newMeals !== undefined && newMeals.length > 0
              ? 
              newMeals.map((item, i) => {
            return (
              <Card key={item.idMeal} className='border-solid border-2 border-sky-500 rounded-md'>
                <Title className='font-bold text-lg'>{item.strMeal}</Title>
                <Flex className='mt-6'>
                  <div className="col items-center justify-center">
                    <Image
                      className="rounded-full"
                      src={item.strMealThumb}
                      height={200}
                      width={200}
                      alt={""}
                    />
                  </div>
                </Flex>
                  <Flex className="mt-6">
                    <div className='col'>
                      <Text className="text-left">Country: {item.strArea}</Text>
                      <Text className="text-left mt-6 w-200px">{item.strInstructions}</Text>
                      <Text className="text-left mt-6">Category: {item.strCategory}</Text>
                      <Text className="text-left mt-2">Tags: {item.strTags}</Text>
                      <Text className="text-left mt-2">Link Youtube:
                        <a className='italic text-cyan-600' href={item.strYoutube}> here</a>
                      </Text>
                      <Text className="text-left mt-2 mb-1">Ingredients:</Text>
                      <Text className="text-left">{item.strIngredient1 ? "- " + item.strIngredient1 : ""}</Text>
                      <Text className="text-left">{item.strIngredient2 ? "- " + item.strIngredient2 : ""}</Text>
                      <Text className="text-left">{item.strIngredient3 ? "- " + item.strIngredient3 : ""}</Text>
                      <Text className="text-left">{item.strIngredient4 ? "- " + item.strIngredient4 : ""}</Text>
                      <Text className="text-left">{item.strIngredient5 ? "- " + item.strIngredient5 : ""}</Text>
                      <Text className="text-left">{item.strIngredient6 ? "- " + item.strIngredient6 : ""}</Text>
                      <Text className="text-left">{item.strIngredient7 ? "- " + item.strIngredient7 : ""}</Text>
                      <Text className="text-left">{item.strIngredient8 ? "- " + item.strIngredient8 : ""}</Text>
                      <Text className="text-left">{item.strIngredient9 ? "- " + item.strIngredient9 : ""}</Text>
                      <Text className="text-left">{item.strIngredient10 ? "- " + item.strIngredient10 : ""}</Text>
                      <Text className="text-left">{item.strIngredient11 ? "- " + item.strIngredient11 : ""}</Text>
                      <Text className="text-left">{item.strIngredient12 ? "- " + item.strIngredient12 : ""}</Text>
                      <Text className="text-left">{item.strIngredient13 ? "- " + item.strIngredient13 : ""}</Text>
                      <Text className="text-left">{item.strIngredient14 ? "- " + item.strIngredient14 : ""}</Text>
                      <Text className="text-left">{item.strIngredient15 ? "- " + item.strIngredient15 : ""}</Text>
                      <Text className="text-left">{item.strIngredient16 ? "- " + item.strIngredient16 : ""}</Text>
                      <Text className="text-left">{item.strIngredient17 ? "- " + item.strIngredient17 : ""}</Text>
                      <Text className="text-left">{item.strIngredient18 ? "- " + item.strIngredient18 : ""}</Text>
                      <Text className="text-left">{item.strIngredient19 ? "- " + item.strIngredient19 : ""}</Text>
                      <Text className="text-left">{item.strIngredient20 ? "- " + item.strIngredient20 : ""}</Text>
                      
                      <Text className="text-left mt-2 mb-1">Measurements:</Text>
                      <Text className="text-left">{item.strMeasure1 !== " " ? "- " + item.strMeasure1 : ""}</Text>
                      <Text className="text-left">{item.strMeasure2 !== " " ? "- " + item.strMeasure2 : ""}</Text>
                      <Text className="text-left">{item.strMeasure3 !== " " ? "- " + item.strMeasure3 : ""}</Text>
                      <Text className="text-left">{item.strMeasure4 !== " " ? "- " + item.strMeasure4 : ""}</Text>
                      <Text className="text-left">{item.strMeasure5 !== " " ? "- " + item.strMeasure5 : ""}</Text>
                      <Text className="text-left">{item.strMeasure6 !== " " ? "- " + item.strMeasure6 : ""}</Text>
                      <Text className="text-left">{item.strMeasure7 !== " " ? "- " + item.strMeasure7 : ""}</Text>
                      <Text className="text-left">{item.strMeasure8 !== " " ? "- " + item.strMeasure8 : ""}</Text>
                      <Text className="text-left">{item.strMeasure9 !== " " ? "- " + item.strMeasure9 : ""}</Text>
                      <Text className="text-left">{item.strMeasure10 !== " " ? "- " + item.strMeasure10 : ""}</Text>
                      <Text className="text-left">{item.strMeasure11 !== " " ? "- " + item.strMeasure11 : ""}</Text>
                      <Text className="text-left">{item.strMeasure12 !== " " ? "- " + item.strMeasure12 : ""}</Text>
                      <Text className="text-left">{item.strMeasure13 !== " " ? "- " + item.strMeasure13 : ""}</Text>
                      <Text className="text-left">{item.strMeasure14 !== " " ? "- " + item.strMeasure14 : ""}</Text>
                      <Text className="text-left">{item.strMeasure15 !== " " ? "- " + item.strMeasure15 : ""}</Text>
                      <Text className="text-left">{item.strMeasure16 !== " " ? "- " + item.strMeasure16 : ""}</Text>
                      <Text className="text-left">{item.strMeasure17 !== " " ? "- " + item.strMeasure17 : ""}</Text>
                      <Text className="text-left">{item.strMeasure18 !== " " ? "- " + item.strMeasure18 : ""}</Text>
                      <Text className="text-left">{item.strMeasure19 !== " " ? "- " + item.strMeasure19 : ""}</Text>
                      <Text className="text-left">{item.strMeasure20 !== " " ? "- " + item.strMeasure20 : ""}</Text>
                      {/* <Text className="text-left mt-2">Source: <a ref={item.strSource}>{item.strSource}</a></Text> */}
                    </div>
                  </Flex>
              </Card>
              
            )
              })
              : 
              <div></div>
        }
        </Grid>
    </main>
    </>
  );
};

