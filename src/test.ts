// задача №1
interface TotalPrice {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}
const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: TotalPrice): number => {
  if (isInstallment) {
    return (price - (price * discount) / 100) / months
  } else {
    return price
  }
}

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: false,
  months: 12,
})
console.log(price)

// задача №2
interface Post {
  [key: string]: string
}

const posts: Post[] = [
  {
    id: '62e69d5a5458aac0ed320b35',
    title: 'id labore ex et quam laborum',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium',
  },
  {
    id: '62e69d5a5458aac0ed320b1c',
    title: 'quo vero reiciendis velit similique earum',
    body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et',
  },
  {
    id: '62e69d5a5458aac0ed320b32',
    title: 'odio adipisci rerum aut animi',
    body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione',
  },
  {
    id: '62e69d5a5458aac0ed320b39',
    title: 'alias odio sit',
    body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati',
  },
  {
    id: '62e69d5a5458aac0ed320b53',
    title: 'vero eaque aliquid doloribus et culpa',
    body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et',
  },
  {
    id: '62e69d5a5458aac0ed320b19',
    title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in',
  },
  {
    id: '62e69d5a5458aac0ed320b25',
    title: 'repellat consequatur praesentium vel minus molestias voluptatum',
    body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor',
  },
]

interface ReduceReturnType {
  [key: string]: Post
}

function renderObject(data: Post[]): ReduceReturnType {
  return data.reduce<ReduceReturnType>(
    (acc, item) => ((acc[item.id] = item), acc),
    {}
  )
}

function renderId(data: Post[]): string[] {
  return data.map((item) => item.id)
}

const normalizeData = (unnormalizedData: Post[]) => {
  return {
    byId: renderObject(unnormalizedData),
    allIds: renderId(unnormalizedData),
  }
}

console.log(normalizeData(posts))

// задача №3

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?_limit=3'

interface RENDERDATA {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getData = (url: string): Promise<Response> => {
  return fetch(url)
}

function renderData(posts: RENDERDATA[]): void {
  posts.forEach((comment) => {
    console.log('ID:', comment.id, 'Email:', comment.email)
  })
}

getData(COMMENTS_URL)
  .then((response: Response) => response.json())
  .then((data) => {
    if (Array.isArray(data)) {
      renderData(data)
    }
  })
  .catch((err: Error) => console.log('err', err))

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
