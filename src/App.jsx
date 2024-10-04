import { useState, useEffect } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";

const App = () => {
  const [apidata, setAPiData] = useState([]);
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api =
          "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
        const response = await fetch(api);
        const data = await response.json();
        setAPiData(data.categories);
        setIsLoading(true);
      } catch (error) {
        console.error(`ERROR: ${error}`);
      }
    };
    fetchData();
  }, []);
  const handleCategory = (data) => {
    const selectedCategory = apidata.filter(
      (item) => item.category_name === data
    );
    setCategory(selectedCategory);
  };
  console.log(category);
  return (
    <>
      {isLoading ? (
        <div className="mx-40">
          <h1 className="text-center text-4xl font-bold font-serif">
            SELECT YOUR CHOICE
          </h1>
          <div>
            <div className="flex gap-1 items-center justify-center my-4">
              {apidata.map((item, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => handleCategory(item.category_name)}
                  >
                    <Button
                      data={item.category_name}
                      value={
                        category
                          ? category[0]?.category_name === item.category_name
                          : item.category_name === apidata[0]?.category_name
                      }
                    />
                  </button>
                );
              })}
            </div>

            {category ? (
              <div className="flex gap-4 justify-center flex-wrap">
                {category.map((catItem) => {
                  return catItem.category_products.map((product, index) => {
                    const discount = Math.floor(
                      ((product.compare_at_price - product.price) /
                        product.compare_at_price) *
                        100
                    );
                    return (
                      <Card
                        key={index}
                        img={product.image}
                        prodName={product.title.slice(0, 10) + "..."}
                        brand={product.vendor}
                        price={product.price}
                        maxPrice={product.compare_at_price}
                        discount={discount}
                      />
                    );
                  });
                })}
              </div>
            ) : (
              <div className="flex gap-4 justify-center flex-wrap">
                {apidata.map((Item) => {
                  return (
                    Item.category_name === "Men" &&
                    Item.category_products.map((product, index) => {
                      const discount = Math.floor(
                        ((product.compare_at_price - product.price) /
                          product.compare_at_price) *
                          100
                      );
                      return (
                        <Card
                          key={index}
                          img={product.image}
                          prodName={product.title.slice(0, 10) + "..."}
                          brand={product.vendor}
                          price={product.price}
                          maxPrice={product.compare_at_price}
                          discount={discount}
                        />
                      );
                    })
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div> Loading...</div>
      )}
    </>
  );
};

export default App;
