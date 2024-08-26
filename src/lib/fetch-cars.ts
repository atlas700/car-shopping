export const fetchCars = async ({
  manufacturer,
  model,
  fuel,
  year,
  limit,
}: {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
}) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "05daf485e5mshde0c3b9a50ac6b6p1322d5jsncc44993f52cb",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const results = await response.json();

  return results;
};

type carType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  model: string;
  make?: string;
  transmission: string;
  year: number;
};

export const generateCarImage = (car: carType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  const { model, year, make } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make!);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
