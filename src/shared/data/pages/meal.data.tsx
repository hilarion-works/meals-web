'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
// import Chart from './chart';

import Search from '~/components/widgets/Search';

let meals = [
  {
    idMeal: "52977",
    strMeal: "Corba",
    strDrinkAlternate: null,
    strCategory: "Side",
    strArea: "Turkish",
    strInstructions: "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.",
    strMealThumb: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
    strYoutube: "https://www.youtube.com/watch?v=VVnZd8A84z4",
    strIngredient1: "Lentils",
    strIngredient2: "Onion",
    strIngredient3: "Carrots",
    strIngredient4: "Tomato Puree",
    strIngredient5: "Cumin",
    strIngredient6: "Paprika",
    strIngredient7: "Mint",
    strIngredient8: "Thyme",
    strIngredient9: "Black Pepper",
    strIngredient10: "Red Pepper Flakes",
    strIngredient11: "Vegetable Stock",
    strIngredient12: "Water",
    strIngredient13: "Sea Salt",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "1 cup ",
    strMeasure2: "1 large",
    strMeasure3: "1 large",
    strMeasure4: "1 tbs",
    strMeasure5: "2 tsp",
    strMeasure6: "1 tsp ",
    strMeasure7: "1/2 tsp",
    strMeasure8: "1/2 tsp",
    strMeasure9: "1/4 tsp",
    strMeasure10: "1/4 tsp",
    strMeasure11: "4 cups ",
    strMeasure12: "1 cup ",
    strMeasure13: "Pinch",
    strMeasure14: " ",
    strMeasure15: " ",
    strMeasure16: " ",
    strMeasure17: " ",
    strMeasure18: " ",
    strMeasure19: " ",
    strMeasure20: " ",
    strSource: "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null
  },
];

const urlMeals = "https://themealdb.com/api/json/v1/1";

// export const mealList: MealProps = () => {
export const MealList = () => {  
  const [keyword, setKeyword] = useState("");
  const [newMeals, setMeals] = useState(meals)
  const getMeals = async (mealName: String) => {
    const headerData = {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
    axios.get((urlMeals + "/search.php?s=" + mealName),
      // { headers: headerData }
    )
      .then((dataMeals) => {
        console.log("dataMeals: ", dataMeals);
        // meals = dataMeals.data.meals
        setMeals(dataMeals.data.meals);
        console.log("newMeals: ", newMeals);
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

  const updateKeyword = (data: String) => {
    console.log("updateKeyword: ", data);
    getMeals(data);
  }


  useEffect(() => {
    getMeals("");
  }, [])
  
  return (
    <>
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Search keyword={ keyword} updateKeyword={updateKeyword} />
      <Grid numItemsSm={4} numItemsLg={4} className="gap-6">
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
                      {/* <Text className="text-left mt-6 w-200px">{item.strInstructions}</Text> */}
                      <Text className="text-left mt-6">Category: {item.strCategory}</Text>
                      <Text className="text-left mt-2">Tags: {item.strTags}</Text>
                      <Text className="text-left mt-2">Link Youtube: <a href={item.strYoutube}>here</a></Text>
                      {/* <Text className="text-left mt-2 mb-1">Ingredients:</Text>
                      <Text className="text-left">{item.strIngredient1}</Text>
                      <Text className="text-left">{item.strIngredient2}</Text>
                      <Text className="text-left">{item.strIngredient3}</Text>
                      <Text className="text-left">{item.strIngredient4}</Text>
                      <Text className="text-left">{item.strIngredient5}</Text>
                      <Text className="text-left">{item.strIngredient6}</Text>
                      <Text className="text-left">{item.strIngredient7}</Text>
                      <Text className="text-left">{item.strIngredient8}</Text>
                      <Text className="text-left">{item.strIngredient9}</Text>
                      <Text className="text-left">{item.strIngredient10}</Text>
                      <Text className="text-left">{item.strIngredient11}</Text>
                      <Text className="text-left">{item.strIngredient12}</Text>
                      <Text className="text-left">{item.strIngredient13}</Text>
                      <Text className="text-left">{item.strIngredient14}</Text>
                      <Text className="text-left">{item.strIngredient15}</Text>
                      <Text className="text-left">{item.strIngredient16}</Text>
                      <Text className="text-left">{item.strIngredient17}</Text>
                      <Text className="text-left">{item.strIngredient18}</Text>
                      <Text className="text-left">{item.strIngredient19}</Text>
                      <Text className="text-left">{item.strIngredient20}</Text>
                      
                      <Text className="text-left mt-2 mb-1">Measurements:</Text>
                      <Text className="text-left">{item.strMeasure1}</Text>
                      <Text className="text-left">{item.strMeasure2}</Text>
                      <Text className="text-left">{item.strMeasure3}</Text>
                      <Text className="text-left">{item.strMeasure4}</Text>
                      <Text className="text-left">{item.strMeasure5}</Text>
                      <Text className="text-left">{item.strMeasure6}</Text>
                      <Text className="text-left">{item.strMeasure7}</Text>
                      <Text className="text-left">{item.strMeasure8}</Text>
                      <Text className="text-left">{item.strMeasure9}</Text>
                      <Text className="text-left">{item.strMeasure10}</Text>
                      <Text className="text-left">{item.strMeasure11}</Text>
                      <Text className="text-left">{item.strMeasure12}</Text>
                      <Text className="text-left">{item.strMeasure13}</Text>
                      <Text className="text-left">{item.strMeasure14}</Text>
                      <Text className="text-left">{item.strMeasure15}</Text>
                      <Text className="text-left">{item.strMeasure16}</Text>
                      <Text className="text-left">{item.strMeasure17}</Text>
                      <Text className="text-left">{item.strMeasure18}</Text>
                      <Text className="text-left">{item.strMeasure19}</Text>
                      <Text className="text-left">{item.strMeasure20}</Text>
                      <Text className="text-left mt-2">Source: <a href={item.strSource}>{item.strSource}</a></Text> */}

                      {/* <Text className="text-left">{item.transactionTime}s ago</Text> */}
                    </div>
                    {/* <div className='col'>
                      <Text className="text-left">Validated By {item.transactionUser}</Text>
                      <Text className="text-left">{item.quantity} txns</Text>
                    </div> */}
                    {/* <Text>
                      <a
                        className="rounded-[14px] border border-black-400 text-black text-[13px] font-mono hover:bg-gray-700 transition-all rounded-md w-[100px] h-10 flex items-center justify-center"
                        target="_blank"
                        rel="noreferrer"
                        >
                        0 COIN
                      </a>
                    </Text> */}
                    {/* <BarList
                      data={item.transactionUser}
                      valueFormatter={(number: number) =>
                        Intl.NumberFormat('us').format(number).toString()
                      }
                      className="mt-2"
                    /> */}
                  </Flex>
                {/* <div className='mt-6'>
                  <Text className="text-center">VIEW ALL BLOCKS</Text>
                </div> */}
              </Card>
              
            )
              })
              : 
              <div></div>
        }
        </Grid>
      {/* <Chart /> */}
    </main>
    </>
  );
};

