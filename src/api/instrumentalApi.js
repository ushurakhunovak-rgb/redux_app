const instruments = [
    {
      id: 1,
      name: "Гитара",
      type: "Струнный",
      description: "Гитара - это струнный музыкальный инструмент, который обычно имеет шесть струн и используется в различных музыкальных жанрах.",
      price: 300
    },
  {
        id: 2,
        name: "Пианино",
        type: "Клавишный",
        description: "Пианино - это клавишный музыкальный инструмент, который используется для создания мелодий и аккомпанемента в различных музыкальных стилях.",
        price: 1500
  }  
];

//имитация задержки

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// получить все инструменты
export const fetchInstrumentsApi = async () => {
    await delay(500);
    return instruments;
}

// получить инструмент по id

export const fetchInstrumentByIdApi = async (id) => {
    await delay(300);
    return instruments.find(inst=>inst.id=== Number(id));
}