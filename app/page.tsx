import {
  Categories,
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  SortPopup,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список пицц */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
