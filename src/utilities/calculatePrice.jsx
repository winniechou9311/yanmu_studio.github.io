// utilities/calculatePrice.js
export const calculatePrice = (
  selectedServiceType,
  weddingType,
  numberOfPeople,
  needDress,
  hikingType
) => {
  let price = 0;

  if (selectedServiceType === "個人寫真") {
    price = 4000;
  } else if (selectedServiceType === "婚紗攝影") {
    if (weddingType === "單人重磅婚紗") {
      price = 8000;
    } else if (weddingType === "單人輕量婚紗") {
      price = 6500;
    }

    if (numberOfPeople > 1) {
      price += needDress
        ? 2000 * (numberOfPeople - 1)
        : 500 * (numberOfPeople - 1);
    }
  } else if (selectedServiceType === "山岳攝影") {
    if (hikingType === "單日行程") {
      price = 8000;
    } else if (hikingType === "二日行程") {
      price = 12000;
    } else if (hikingType === "三日行程") {
      price = 16000;
    }

    if (numberOfPeople > 1) {
      price += 500 * (numberOfPeople - 1);
    }
  }

  return price; // 回傳計算後的價格
};
